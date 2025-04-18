// Nutritional Harmony Questionnaires

export const nutritionQuestions = [
  {
    id: 1,
    question: "How many servings of fruits and vegetables do you typically consume daily?",
    options: [
      { value: "0-1", label: "0-1 servings" },
      { value: "2-3", label: "2-3 servings" },
      { value: "4-5", label: "4-5 servings" },
      { value: "6+", label: "6+ servings" },
    ],
  },
  {
    id: 2,
    question: "How often do you eat processed or fast foods?",
    options: [
      { value: "daily", label: "Daily - most meals" },
      { value: "frequently", label: "Frequently - several times a week" },
      { value: "occasionally", label: "Occasionally - once a week or less" },
      { value: "rarely", label: "Rarely or never" },
    ],
  },
  {
    id: 3,
    question: "How would you describe your water intake?",
    options: [
      { value: "minimal", label: "Minimal - I rarely drink plain water" },
      { value: "low", label: "Low - 1-3 glasses daily" },
      { value: "moderate", label: "Moderate - 4-6 glasses daily" },
      { value: "optimal", label: "Optimal - 7+ glasses daily" },
    ],
  },
  {
    id: 4,
    question: "How often do you eat mindfully (paying attention to hunger cues, savoring food)?",
    options: [
      { value: "never", label: "Never - I eat quickly or while distracted" },
      { value: "rarely", label: "Rarely - I sometimes rush meals" },
      { value: "sometimes", label: "Sometimes - I try to be mindful" },
      { value: "always", label: "Always - I practice mindful eating regularly" },
    ],
  },
  {
    id: 5,
    question: "How diverse is your diet in terms of different food groups and colors?",
    options: [
      { value: "very-limited", label: "Very limited - I eat the same foods regularly" },
      { value: "somewhat-limited", label: "Somewhat limited - I have a few go-to meals" },
      { value: "moderately-diverse", label: "Moderately diverse - I incorporate variety" },
      { value: "very-diverse", label: "Very diverse - I eat a wide range of foods" },
    ],
  },
  {
    id: 6,
    question: "How often do you experience digestive issues (bloating, discomfort, etc.)?",
    options: [
      { value: "daily", label: "Daily - after most meals" },
      { value: "frequently", label: "Frequently - several times a week" },
      { value: "occasionally", label: "Occasionally - a few times a month" },
      { value: "rarely", label: "Rarely or never" },
    ],
  },
  {
    id: 7,
    question: "Do you take any nutritional supplements?",
    options: [
      { value: "none", label: "None" },
      { value: "basic", label: "Basic - multivitamin only" },
      { value: "several", label: "Several - targeted supplements" },
      { value: "comprehensive", label: "Comprehensive - personalized regimen" },
    ],
  },
  {
    id: 8,
    question: "How often do you prepare meals at home vs. eating out?",
    options: [
      { value: "rarely-home", label: "Rarely cook - mostly eat out/takeout" },
      { value: "sometimes-home", label: "Sometimes cook - eat out frequently" },
      { value: "mostly-home", label: "Mostly cook - eat out occasionally" },
      { value: "almost-always-home", label: "Almost always cook at home" },
    ],
  },
  {
    id: 9,
    question: "How would you rate your energy levels throughout the day?",
    options: [
      { value: "very-low", label: "Very low - constantly fatigued" },
      { value: "fluctuating", label: "Fluctuating - energy crashes after meals" },
      { value: "moderate", label: "Moderate - occasional dips in energy" },
      { value: "high", label: "High - consistent energy throughout the day" },
    ],
  },
  {
    id: 10,
    question: "How would you describe your relationship with food?",
    options: [
      { value: "negative", label: "Negative - anxiety, guilt, or strict rules" },
      { value: "complicated", label: "Complicated - occasional struggles" },
      { value: "neutral", label: "Neutral - food is just fuel" },
      { value: "positive", label: "Positive - enjoyment with balance" },
    ],
  },
]

export const hydrationQuestions = [
  {
    id: 1,
    question: "How much water do you typically drink daily?",
    options: [
      { value: "very-little", label: "Very little - less than 2 cups" },
      { value: "some", label: "Some - 2-4 cups" },
      { value: "moderate", label: "Moderate - 5-7 cups" },
      { value: "optimal", label: "Optimal - 8+ cups" },
    ],
  },
  {
    id: 2,
    question: "How often do you feel thirsty throughout the day?",
    options: [
      { value: "constantly", label: "Constantly - I'm frequently thirsty" },
      { value: "often", label: "Often - several times a day" },
      { value: "occasionally", label: "Occasionally - once or twice a day" },
      { value: "rarely", label: "Rarely - I stay well hydrated" },
    ],
  },
  {
    id: 3,
    question: "What is your primary beverage throughout the day?",
    options: [
      { value: "sugary-drinks", label: "Sugary drinks (soda, juice, sweetened coffee)" },
      { value: "caffeine", label: "Caffeinated beverages (coffee, tea, energy drinks)" },
      { value: "flavored-water", label: "Flavored water or herbal tea" },
      { value: "water", label: "Plain water" },
    ],
  },
  {
    id: 4,
    question: "How would you describe the color of your urine most of the time?",
    options: [
      { value: "dark-yellow", label: "Dark yellow/amber" },
      { value: "yellow", label: "Yellow" },
      { value: "light-yellow", label: "Light yellow" },
      { value: "pale-clear", label: "Pale or clear" },
    ],
  },
  {
    id: 5,
    question: "How often do you experience dry mouth, lips, or skin?",
    options: [
      { value: "frequently", label: "Frequently - daily" },
      { value: "sometimes", label: "Sometimes - several times a week" },
      { value: "occasionally", label: "Occasionally - a few times a month" },
      { value: "rarely", label: "Rarely - almost never" },
    ],
  },
  {
    id: 6,
    question: "How consistent is your water intake throughout the day?",
    options: [
      { value: "inconsistent", label: "Inconsistent - I often forget to drink water" },
      { value: "somewhat", label: "Somewhat - I drink when I remember" },
      { value: "mostly", label: "Mostly consistent - I drink at regular intervals" },
      { value: "very", label: "Very consistent - I have a regular hydration schedule" },
    ],
  },
  {
    id: 7,
    question: "How often do you drink water before, during, and after exercise?",
    options: [
      { value: "rarely", label: "Rarely - I often forget" },
      { value: "sometimes", label: "Sometimes - I drink when very thirsty" },
      { value: "usually", label: "Usually - I try to stay hydrated during activity" },
      { value: "always", label: "Always - I have a specific hydration plan" },
    ],
  },
  {
    id: 8,
    question: "How often do you experience headaches that could be related to dehydration?",
    options: [
      { value: "frequently", label: "Frequently - several times a week" },
      { value: "sometimes", label: "Sometimes - a few times a month" },
      { value: "occasionally", label: "Occasionally - rarely" },
      { value: "never", label: "Never - I don't get dehydration headaches" },
    ],
  },
  {
    id: 9,
    question: "Do you adjust your water intake based on activity level, weather, or other factors?",
    options: [
      { value: "never", label: "Never - I drink the same amount regardless" },
      { value: "rarely", label: "Rarely - I don't think about it much" },
      { value: "sometimes", label: "Sometimes - I make some adjustments" },
      { value: "always", label: "Always - I'm very mindful about adjusting intake" },
    ],
  },
  {
    id: 10,
    question: "How would you rate your knowledge about proper hydration?",
    options: [
      { value: "poor", label: "Poor - I know very little" },
      { value: "basic", label: "Basic - I know some fundamentals" },
      { value: "good", label: "Good - I understand most hydration principles" },
      { value: "excellent", label: "Excellent - I'm very knowledgeable" },
    ],
  },
]

export const gutHealthQuestions = [
  {
    id: 1,
    question: "How often do you experience digestive discomfort (bloating, gas, pain)?",
    options: [
      { value: "daily", label: "Daily - after most meals" },
      { value: "frequently", label: "Frequently - several times a week" },
      { value: "occasionally", label: "Occasionally - a few times a month" },
      { value: "rarely", label: "Rarely - almost never" },
    ],
  },
  {
    id: 2,
    question: "How would you describe your bowel movements?",
    options: [
      { value: "irregular", label: "Irregular - unpredictable or problematic" },
      { value: "somewhat-regular", label: "Somewhat regular - occasional issues" },
      { value: "mostly-regular", label: "Mostly regular - generally consistent" },
      { value: "very-regular", label: "Very regular - consistent and healthy" },
    ],
  },
  {
    id: 3,
    question: "How often do you consume fermented foods (yogurt, kimchi, sauerkraut, etc.)?",
    options: [
      { value: "never", label: "Never" },
      { value: "rarely", label: "Rarely - a few times a month" },
      { value: "sometimes", label: "Sometimes - weekly" },
      { value: "frequently", label: "Frequently - several times a week" },
    ],
  },
  {
    id: 4,
    question: "How would you rate your fiber intake?",
    options: [
      { value: "low", label: "Low - minimal fruits, vegetables, whole grains" },
      { value: "moderate", label: "Moderate - some fiber-rich foods" },
      { value: "good", label: "Good - regular fiber consumption" },
      { value: "excellent", label: "Excellent - abundant fiber from diverse sources" },
    ],
  },
  {
    id: 5,
    question: "How often do you take probiotics or prebiotics?",
    options: [
      { value: "never", label: "Never" },
      { value: "occasionally", label: "Occasionally - when having issues" },
      { value: "regularly", label: "Regularly - as part of my routine" },
      { value: "daily", label: "Daily - consistent supplementation" },
    ],
  },
  {
    id: 6,
    question: "How often do you consume highly processed or artificial foods?",
    options: [
      { value: "daily", label: "Daily - most meals" },
      { value: "frequently", label: "Frequently - several times a week" },
      { value: "occasionally", label: "Occasionally - once a week or less" },
      { value: "rarely", label: "Rarely or never" },
    ],
  },
  {
    id: 7,
    question: "How would you rate your stress levels and their impact on your digestion?",
    options: [
      { value: "severe", label: "Severe - stress regularly affects my digestion" },
      { value: "moderate", label: "Moderate - stress sometimes affects my digestion" },
      { value: "mild", label: "Mild - stress occasionally affects my digestion" },
      { value: "minimal", label: "Minimal - stress rarely affects my digestion" },
    ],
  },
  {
    id: 8,
    question: "How often do you experience food sensitivities or intolerances?",
    options: [
      { value: "frequently", label: "Frequently - many foods cause reactions" },
      { value: "sometimes", label: "Sometimes - certain foods cause reactions" },
      { value: "occasionally", label: "Occasionally - rare reactions" },
      { value: "rarely", label: "Rarely or never experience food reactions" },
    ],
  },
  {
    id: 9,
    question: "How would you rate your knowledge of the gut-brain connection?",
    options: [
      { value: "poor", label: "Poor - I know very little" },
      { value: "basic", label: "Basic - I understand there is a connection" },
      { value: "good", label: "Good - I understand the basic principles" },
      { value: "excellent", label: "Excellent - I have in-depth knowledge" },
    ],
  },
  {
    id: 10,
    question: "How often do you eat mindfully and chew your food thoroughly?",
    options: [
      { value: "rarely", label: "Rarely - I eat quickly and don't think about it" },
      { value: "sometimes", label: "Sometimes - I occasionally remember to slow down" },
      { value: "often", label: "Often - I try to eat mindfully most meals" },
      { value: "always", label: "Always - I consistently practice mindful eating" },
    ],
  },
]

export const supplementsQuestions = [
  {
    id: 1,
    question: "How would you describe your current supplement regimen?",
    options: [
      { value: "none", label: "None - I don't take any supplements" },
      { value: "basic", label: "Basic - multivitamin or single supplement" },
      { value: "moderate", label: "Moderate - several targeted supplements" },
      { value: "comprehensive", label: "Comprehensive - personalized regimen" },
    ],
  },
  {
    id: 2,
    question: "How do you determine which supplements to take?",
    options: [
      { value: "randomly", label: "Randomly - based on trends or advertisements" },
      { value: "self-research", label: "Self-research - based on my own reading" },
      { value: "some-guidance", label: "Some guidance - general recommendations" },
      { value: "professional", label: "Professional guidance - based on testing/assessment" },
    ],
  },
  {
    id: 3,
    question: "How consistent are you with taking your supplements?",
    options: [
      { value: "inconsistent", label: "Very inconsistent - often forget" },
      { value: "somewhat", label: "Somewhat consistent - remember most days" },
      { value: "mostly", label: "Mostly consistent - rarely miss" },
      { value: "very", label: "Very consistent - have a system in place" },
    ],
  },
  {
    id: 4,
    question: "How often do you reassess your supplement needs?",
    options: [
      { value: "never", label: "Never - I take the same things indefinitely" },
      { value: "rarely", label: "Rarely - only when something changes" },
      { value: "occasionally", label: "Occasionally - every few years" },
      { value: "regularly", label: "Regularly - at least annually" },
    ],
  },
  {
    id: 5,
    question: "How would you rate your knowledge of supplement quality and sourcing?",
    options: [
      { value: "poor", label: "Poor - I don't consider quality" },
      { value: "basic", label: "Basic - I have some awareness" },
      { value: "good", label: "Good - I research brands and sources" },
      { value: "excellent", label: "Excellent - I'm very particular about quality" },
    ],
  },
  {
    id: 6,
    question: "Do you check for potential interactions between supplements and medications?",
    options: [
      { value: "never", label: "Never - I haven't considered this" },
      { value: "rarely", label: "Rarely - only if obvious concerns arise" },
      { value: "sometimes", label: "Sometimes - for major supplements" },
      { value: "always", label: "Always - I thoroughly research interactions" },
    ],
  },
  {
    id: 7,
    question: "How do you monitor the effectiveness of your supplements?",
    options: [
      { value: "dont", label: "I don't monitor effectiveness" },
      { value: "subjective", label: "Subjective - based on how I feel" },
      { value: "some-tracking", label: "Some tracking - note general changes" },
      { value: "comprehensive", label: "Comprehensive - testing and detailed tracking" },
    ],
  },
  {
    id: 8,
    question: "How would you rate your diet's nutritional completeness without supplements?",
    options: [
      { value: "poor", label: "Poor - significant nutritional gaps" },
      { value: "fair", label: "Fair - some nutritional gaps" },
      { value: "good", label: "Good - minor nutritional gaps" },
      { value: "excellent", label: "Excellent - comprehensive nutrition from food" },
    ],
  },
  {
    id: 9,
    question: "How often do you take supplements with specific absorption enhancers or at optimal timing?",
    options: [
      { value: "never", label: "Never - I don't consider timing or absorption" },
      { value: "rarely", label: "Rarely - I take everything at once" },
      { value: "sometimes", label: "Sometimes - I consider basic timing" },
      { value: "always", label: "Always - I optimize timing and absorption" },
    ],
  },
  {
    id: 10,
    question: "How would you rate your understanding of your specific nutritional needs?",
    options: [
      { value: "poor", label: "Poor - I'm not sure what I need" },
      { value: "basic", label: "Basic - I understand general needs" },
      { value: "good", label: "Good - I know my specific requirements" },
      { value: "excellent", label: "Excellent - I have detailed knowledge of my needs" },
    ],
  },
]
