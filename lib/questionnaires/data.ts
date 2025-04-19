// Define interfaces for better type safety
export interface QuestionOption {
  value: string;
  label: string;
}

export interface Question {
  id: number | string;
  question: string;
  options: QuestionOption[];
}

// Sample questions for sleep optimization
export const sleepQuestions: Question[] = [
  {
    id: 1,
    question: "How many hours of sleep do you typically get each night?",
    options: [
      { value: "less-than-5", label: "Less than 5 hours" },
      { value: "5-6", label: "5-6 hours" },
      { value: "7-8", label: "7-8 hours" },
      { value: "more-than-8", label: "More than 8 hours" },
    ],
  },
  {
    id: 2,
    question: "How would you rate your sleep quality?",
    options: [
      { value: "poor", label: "Poor - I wake up feeling tired" },
      { value: "fair", label: "Fair - I wake up feeling okay" },
      { value: "good", label: "Good - I wake up feeling rested" },
      { value: "excellent", label: "Excellent - I wake up feeling refreshed" },
    ],
  },
  {
    id: 3,
    question: "Do you have trouble falling asleep?",
    options: [
      { value: "always", label: "Always - It takes me over an hour" },
      { value: "often", label: "Often - It takes me 30-60 minutes" },
      { value: "sometimes", label: "Sometimes - It takes me 15-30 minutes" },
      { value: "never", label: "Never - I fall asleep within 15 minutes" },
    ],
  },
  {
    id: 4,
    question: "Do you wake up during the night?",
    options: [
      { value: "multiple-times", label: "Multiple times and struggle to fall back asleep" },
      { value: "few-times", label: "A few times but fall back asleep easily" },
      { value: "rarely", label: "Rarely wake up during the night" },
      { value: "never", label: "Never wake up until morning" },
    ],
  },
  {
    id: 5,
    question: "How consistent is your sleep schedule?",
    options: [
      { value: "very-inconsistent", label: "Very inconsistent - different times every day" },
      { value: "somewhat-inconsistent", label: "Somewhat inconsistent - varies by 1-2 hours" },
      { value: "mostly-consistent", label: "Mostly consistent - within an hour each day" },
      { value: "very-consistent", label: "Very consistent - same time every day" },
    ],
  },
  {
    id: 6,
    question: "Do you use electronic devices before bed?",
    options: [
      { value: "always", label: "Always - right up until I fall asleep" },
      { value: "often", label: "Often - within 30 minutes of bedtime" },
      { value: "sometimes", label: "Sometimes - I try to avoid it" },
      { value: "never", label: "Never - I avoid screens at least 1 hour before bed" },
    ],
  },
  {
    id: 7,
    question: "How is your bedroom environment?",
    options: [
      { value: "poor", label: "Poor - noisy, bright, uncomfortable" },
      { value: "fair", label: "Fair - some distractions" },
      { value: "good", label: "Good - mostly quiet and comfortable" },
      { value: "excellent", label: "Excellent - dark, quiet, comfortable temperature" },
    ],
  },
  {
    id: 8,
    question: "Do you consume caffeine or alcohol in the evening?",
    options: [
      { value: "always", label: "Always - every evening" },
      { value: "often", label: "Often - several times a week" },
      { value: "sometimes", label: "Sometimes - once a week or less" },
      { value: "never", label: "Never - I avoid them in the evening" },
    ],
  },
  {
    id: 9,
    question: "Do you feel refreshed when you wake up?",
    options: [
      { value: "never", label: "Never - always tired" },
      { value: "rarely", label: "Rarely - usually tired" },
      { value: "sometimes", label: "Sometimes - occasionally refreshed" },
      { value: "always", label: "Always - consistently refreshed" },
    ],
  },
  {
    id: 10,
    question: "Have you tried any sleep aids or techniques?",
    options: [
      { value: "none", label: "None" },
      { value: "few", label: "A few basic techniques" },
      { value: "several", label: "Several techniques or products" },
      { value: "many", label: "Many different approaches" },
    ],
  },
];

// Sample questions for stress management
export const stressQuestions: Question[] = [
  {
    id: 1,
    question: "How often do you feel overwhelmed by stress?",
    options: [
      { value: "daily", label: "Daily - it's a constant presence" },
      { value: "frequently", label: "Frequently - several times a week" },
      { value: "occasionally", label: "Occasionally - a few times a month" },
      { value: "rarely", label: "Rarely - only in specific situations" },
    ],
  },
  {
    id: 2,
    question: "How would you rate your ability to manage stress?",
    options: [
      { value: "poor", label: "Poor - I struggle to cope" },
      { value: "fair", label: "Fair - I manage but it's difficult" },
      { value: "good", label: "Good - I have some effective strategies" },
      { value: "excellent", label: "Excellent - I handle stress well" },
    ],
  },
  {
    id: 3,
    question: "Do you experience physical symptoms of stress (headaches, tension, etc.)?",
    options: [
      { value: "severe", label: "Severe - multiple symptoms regularly" },
      { value: "moderate", label: "Moderate - noticeable symptoms often" },
      { value: "mild", label: "Mild - occasional symptoms" },
      { value: "none", label: "None - rarely experience physical symptoms" },
    ],
  },
  {
    id: 4,
    question: "How often do you practice mindfulness or relaxation techniques?",
    options: [
      { value: "never", label: "Never" },
      { value: "rarely", label: "Rarely - a few times a month" },
      { value: "sometimes", label: "Sometimes - a few times a week" },
      { value: "regularly", label: "Regularly - daily practice" },
    ],
  },
  {
    id: 5,
    question: "How does stress affect your sleep?",
    options: [
      { value: "severely", label: "Severely - I often can't sleep due to stress" },
      { value: "moderately", label: "Moderately - I have trouble falling or staying asleep" },
      { value: "slightly", label: "Slightly - It occasionally affects my sleep" },
      { value: "not-at-all", label: "Not at all - My sleep is unaffected by stress" },
    ],
  },
  {
    id: 6,
    question: "How often do you take time for yourself to relax and recharge?",
    options: [
      { value: "never", label: "Never - I'm always busy" },
      { value: "rarely", label: "Rarely - only when absolutely necessary" },
      { value: "sometimes", label: "Sometimes - I try to make time" },
      { value: "regularly", label: "Regularly - I prioritize self-care" },
    ],
  },
  {
    id: 7,
    question: "How does stress impact your relationships?",
    options: [
      { value: "severely", label: "Severely - It causes significant conflicts" },
      { value: "moderately", label: "Moderately - It sometimes creates tension" },
      { value: "slightly", label: "Slightly - It has minor effects" },
      { value: "not-at-all", label: "Not at all - My relationships are unaffected" },
    ],
  },
  {
    id: 8,
    question: "Do you have a support system to help you manage stress?",
    options: [
      { value: "none", label: "None - I handle everything alone" },
      { value: "limited", label: "Limited - I have one or two people I can talk to" },
      { value: "moderate", label: "Moderate - I have several supportive relationships" },
      { value: "strong", label: "Strong - I have a robust support network" },
    ],
  },
  {
    id: 9,
    question: "How often do you engage in physical activity to manage stress?",
    options: [
      { value: "never", label: "Never" },
      { value: "rarely", label: "Rarely - a few times a month" },
      { value: "sometimes", label: "Sometimes - 1-2 times a week" },
      { value: "regularly", label: "Regularly - 3+ times a week" },
    ],
  },
  {
    id: 10,
    question: "How would you describe your work-life balance?",
    options: [
      { value: "poor", label: "Poor - Work dominates my life" },
      { value: "fair", label: "Fair - I struggle to maintain balance" },
      { value: "good", label: "Good - I usually maintain a reasonable balance" },
      { value: "excellent", label: "Excellent - I have a healthy work-life balance" },
    ],
  },
];

// Sample questions for nutrition
export const nutritionQuestions: Question[] = [
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
];

// Sample questions for fitness
export const fitnessQuestions: Question[] = [
  {
    id: 1,
    question: "How many days per week do you engage in intentional physical activity?",
    options: [
      { value: "0", label: "0 days - I'm currently inactive" },
      { value: "1-2", label: "1-2 days per week" },
      { value: "3-4", label: "3-4 days per week" },
      { value: "5+", label: "5+ days per week" },
    ],
  },
  {
    id: 2,
    question: "What types of physical activity do you currently enjoy? (Select the closest match)",
    options: [
      { value: "none", label: "None currently" },
      { value: "light", label: "Light activity (walking, gentle yoga)" },
      { value: "moderate", label: "Moderate activity (jogging, cycling, swimming)" },
      { value: "intense", label: "Intense activity (HIIT, weight training, sports)" },
    ],
  },
  {
    id: 3,
    question: "How would you rate your current strength level?",
    options: [
      { value: "beginner", label: "Beginner - I struggle with basic strength tasks" },
      { value: "novice", label: "Novice - I can perform basic strength activities" },
      { value: "intermediate", label: "Intermediate - I have decent strength" },
      { value: "advanced", label: "Advanced - I have above-average strength" },
    ],
  },
  {
    id: 4,
    question: "How would you rate your current flexibility?",
    options: [
      { value: "poor", label: "Poor - I'm very inflexible" },
      { value: "fair", label: "Fair - I have limited range of motion" },
      { value: "good", label: "Good - I have average flexibility" },
      { value: "excellent", label: "Excellent - I'm very flexible" },
    ],
  },
  {
    id: 5,
    question: "How would you describe your cardiovascular endurance?",
    options: [
      { value: "poor", label: "Poor - I get winded easily" },
      { value: "fair", label: "Fair - I can sustain light activity" },
      { value: "good", label: "Good - I can maintain moderate activity" },
      { value: "excellent", label: "Excellent - I have strong endurance" },
    ],
  },
  {
    id: 6,
    question: "Do you experience pain or discomfort during physical activity?",
    options: [
      { value: "severe", label: "Severe - It prevents me from being active" },
      { value: "moderate", label: "Moderate - It limits what I can do" },
      { value: "mild", label: "Mild - Occasional discomfort" },
      { value: "none", label: "None - I exercise pain-free" },
    ],
  },
  {
    id: 7,
    question: "What is your primary motivation for physical activity?",
    options: [
      { value: "appearance", label: "Appearance/weight management" },
      { value: "health", label: "Health benefits/disease prevention" },
      { value: "performance", label: "Performance/athletic goals" },
      { value: "enjoyment", label: "Enjoyment/stress relief" },
    ],
  },
  {
    id: 8,
    question: "How consistent have you been with physical activity over the past year?",
    options: [
      { value: "inconsistent", label: "Very inconsistent - long breaks between activity" },
      { value: "somewhat-inconsistent", label: "Somewhat inconsistent - occasional breaks" },
      { value: "mostly-consistent", label: "Mostly consistent - few interruptions" },
      { value: "very-consistent", label: "Very consistent - regular routine" },
    ],
  },
  {
    id: 9,
    question: "How do you feel after physical activity?",
    options: [
      { value: "exhausted", label: "Exhausted - drained and depleted" },
      { value: "tired", label: "Tired - but in a satisfactory way" },
      { value: "energized", label: "Energized - with increased vitality" },
      { value: "euphoric", label: "Euphoric - significant mood boost" },
    ],
  },
  {
    id: 10,
    question: "What barriers do you face to regular physical activity?",
    options: [
      { value: "time", label: "Time constraints" },
      { value: "motivation", label: "Lack of motivation/enjoyment" },
      { value: "knowledge", label: "Lack of knowledge/guidance" },
      { value: "minimal", label: "Minimal barriers" },
    ],
  },
];

// Map of questionnaires by pillar and subcategory
export const questionnaireMap: Record<string, Record<string, Question[]>> = {
  "physical-vitality": {
    sleep: sleepQuestions,
    fitness: fitnessQuestions,
    "body-care": sleepQuestions, // Placeholder
    energy: sleepQuestions, // Placeholder
  },
  "mental-emotional-clarity": {
    stress: stressQuestions,
    mindfulness: stressQuestions, // Placeholder
    emotional: stressQuestions, // Placeholder
    cognitive: stressQuestions, // Placeholder
  },
  "nutritional-harmony": {
    "mindful-eating": nutritionQuestions,
    hydration: nutritionQuestions, // Placeholder
    "gut-health": nutritionQuestions, // Placeholder
    supplements: nutritionQuestions, // Placeholder
  },
}; 