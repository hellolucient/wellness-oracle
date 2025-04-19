import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import {
  Question,
  QuestionOption,
  questionnaireMap,
  sleepQuestions, // Default import
} from "@/lib/questionnaires/data"

// Get the OpenAI API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Helper to get questions (similar to results page)
const getQuestions = (pillar: string, subcategory: string): Question[] => {
  const pillarQuestions = questionnaireMap[pillar as keyof typeof questionnaireMap];
  if (pillarQuestions) {
    const subcategoryQuestions = pillarQuestions[subcategory as keyof typeof pillarQuestions];
    if (subcategoryQuestions) {
      return subcategoryQuestions;
    }
  }
  return sleepQuestions; // Default
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { answers, pillar, subcategory } = body;

    // Validation
    if (!answers || typeof answers !== 'object' || Object.keys(answers).length === 0) {
      return NextResponse.json({ error: 'Missing or invalid answers data' }, { status: 400 });
    }
    if (!pillar || !subcategory) {
      return NextResponse.json({ error: 'Missing pillar or subcategory' }, { status: 400 });
    }

    // --- 1. Prepare Data for Prompt ---
    const questions = getQuestions(pillar, subcategory);
    let promptDetails = "User Questionnaire Answers:\n";
    promptDetails += `Pillar: ${pillar}\nSubcategory: ${subcategory}\n---\n`;

    Object.entries(answers).forEach(([qId, answerValue]) => {
      const question = questions.find(q => q.id.toString() === qId);
      const option = question?.options.find(o => o.value === answerValue);
      if (question) {
        promptDetails += `Q${qId}: ${question.question}\n`;
        promptDetails += `Answer: ${option ? option.label : answerValue}\n---\n`;
      }
    });

    // --- 2. Construct the Prompt ---
    // Define the desired JSON structure for the response
    const desiredJsonStructure = `
    {
      "analysis": [
        {
          "questionId": "(The ID of the question, e.g., '1')",
          "feedback": "(Personalized feedback based on the user's answer to this specific question, max 2 sentences)"
        }
        // ... more analysis objects for each question ...
      ],
      "recommendations": [
        {
          "type": "(product | service | experience | habit)",
          "title": "(Concise title, including brand name if applicable)",
          "description": "(Actionable description relevant to Thailand, 1-3 sentences)",
          "research": "(REQUIRED: Justification based on research/evidence, 2-3 sentences)",
          "link": "(Optional but PREFERRED: Direct URL link to product/service/experience website)",
          "potential_link_category": "(A category hint for potential affiliate linking, e.g., 'meditation_app_subscription', 'local_yoga_studio', 'specific_supplement_brand')"
        }
        // ... 3-5 relevant recommendations ...
      ]
    }
    `;

    const systemPrompt = `You are the Wellness Oracle AI, an expert in providing actionable wellness advice tailored for users in THAILAND. Analyze the user's answers and provide personalized feedback and recommendations. Focus on being supportive, encouraging, and culturally relevant to Thailand. Provide output ONLY in the specified JSON format. Include specific brand names or service providers available in Thailand where appropriate. Include direct website links in the 'link' field whenever possible. Ensure the 'research' field is populated for EVERY recommendation with 2-3 sentences of justification.`;

    const userPrompt = `Please analyze the following user answers for the ${subcategory} assessment within the ${pillar} pillar:

${promptDetails}

Based ONLY on these answers, provide:
1.  Personalized feedback for EACH question answered in the 'analysis' array.
2.  Relevant and actionable recommendations in the 'recommendations' array, specifically considering options available in THAILAND. For EACH relevant category (product, service, experience, habit), provide 3-5 recommendations if possible. Include specific brands/providers and direct website URLs in the 'link' field where possible. Ensure the 'research' field provides 2-3 sentences of justification for each recommendation.

Output the entire response strictly as a single JSON object matching this structure:
${desiredJsonStructure}
`;

    // --- 3. Call OpenAI API ---
    console.log("Sending prompt to OpenAI...");
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Or your fine-tuned model ID, or "gpt-4" etc.
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      response_format: { type: "json_object" }, // Request JSON output
      temperature: 0.7, // Adjust for creativity vs consistency
    });

    // --- 4. Parse and Return Response ---
    const aiResponse = completion.choices[0]?.message?.content;

    if (!aiResponse) {
      throw new Error("OpenAI response was empty.");
    }

    console.log("Received raw response from OpenAI:", aiResponse);

    try {
      const parsedJson = JSON.parse(aiResponse);
      // Basic validation of the parsed structure
      if (!parsedJson.analysis || !parsedJson.recommendations) {
          throw new Error("Invalid JSON structure received from OpenAI.");
      }
      console.log("Returning parsed JSON to client");
      return NextResponse.json(parsedJson);
    } catch (parseError) {
      console.error("Failed to parse JSON response from OpenAI:", parseError);
      console.error("Raw OpenAI response was:", aiResponse); // Log the raw response on parse failure
      throw new Error("Invalid JSON response received from AI.");
    }

  } catch (error: any) {
    console.error("API analyze error:", error);
    // Avoid sending detailed internal errors to the client in production
    const errorMessage = process.env.NODE_ENV === 'development' ? error.message : 'Failed to process request';
    return NextResponse.json({ error: 'Failed to process request', details: errorMessage }, { status: 500 });
  }
} 