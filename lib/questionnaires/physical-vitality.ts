// Physical Vitality Questionnaires

export const sleepQuestions = [
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
]

export const fitnessQuestions = [
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
]

export const bodyCareQuestions = [
  {
    id: 1,
    question: "How often do you engage in preventative health practices (check-ups, screenings)?",
    options: [
      { value: "never", label: "Never - I only seek care when ill" },
      { value: "rarely", label: "Rarely - I'm inconsistent with check-ups" },
      { value: "sometimes", label: "Sometimes - I get some recommended screenings" },
      { value: "regularly", label: "Regularly - I follow all recommended schedules" },
    ],
  },
  {
    id: 2,
    question: "How would you rate your daily hygiene and self-care routine?",
    options: [
      { value: "minimal", label: "Minimal - basic necessities only" },
      { value: "basic", label: "Basic - regular but simple routine" },
      { value: "thorough", label: "Thorough - consistent daily practices" },
      { value: "comprehensive", label: "Comprehensive - detailed attention to all aspects" },
    ],
  },
  {
    id: 3,
    question: "How often do you experience physical discomfort or pain?",
    options: [
      { value: "constantly", label: "Constantly - daily pain or discomfort" },
      { value: "frequently", label: "Frequently - several times a week" },
      { value: "occasionally", label: "Occasionally - a few times a month" },
      { value: "rarely", label: "Rarely - almost never experience pain" },
    ],
  },
  {
    id: 4,
    question: "How well do you listen to your body's signals (hunger, fatigue, pain)?",
    options: [
      { value: "ignore", label: "I typically ignore body signals" },
      { value: "notice-late", label: "I notice signals when they're intense" },
      { value: "somewhat-aware", label: "I'm somewhat aware of my body's signals" },
      { value: "very-aware", label: "I'm very attuned to my body's signals" },
    ],
  },
  {
    id: 5,
    question: "How often do you receive bodywork (massage, physical therapy, etc.)?",
    options: [
      { value: "never", label: "Never" },
      { value: "rarely", label: "Rarely - a few times a year" },
      { value: "sometimes", label: "Sometimes - monthly" },
      { value: "regularly", label: "Regularly - weekly or biweekly" },
    ],
  },
  {
    id: 6,
    question: "How would you rate your posture throughout the day?",
    options: [
      { value: "poor", label: "Poor - frequently slouched or hunched" },
      { value: "fair", label: "Fair - occasionally mindful of posture" },
      { value: "good", label: "Good - generally maintain good posture" },
      { value: "excellent", label: "Excellent - consistently mindful of alignment" },
    ],
  },
  {
    id: 7,
    question: "How often do you practice body maintenance activities (stretching, foam rolling)?",
    options: [
      { value: "never", label: "Never" },
      { value: "rarely", label: "Rarely - a few times a month" },
      { value: "sometimes", label: "Sometimes - a few times a week" },
      { value: "daily", label: "Daily - regular practice" },
    ],
  },
  {
    id: 8,
    question: "How do you respond when you notice a health concern?",
    options: [
      { value: "ignore", label: "Ignore it and hope it resolves" },
      { value: "wait", label: "Wait to see if it gets worse" },
      { value: "research", label: "Research and try self-care first" },
      { value: "address", label: "Address it promptly with appropriate care" },
    ],
  },
  {
    id: 9,
    question: "How would you rate your skin health and care routine?",
    options: [
      { value: "minimal", label: "Minimal - basic cleansing only" },
      { value: "basic", label: "Basic - cleansing and occasional moisturizing" },
      { value: "moderate", label: "Moderate - regular skincare routine" },
      { value: "comprehensive", label: "Comprehensive - detailed skincare regimen" },
    ],
  },
  {
    id: 10,
    question: "Have you explored complementary health practices (acupuncture, chiropractic)?",
    options: [
      { value: "never", label: "Never tried any" },
      { value: "tried-once", label: "Tried once or twice" },
      { value: "occasional", label: "Occasional use" },
      { value: "regular", label: "Regular part of my health routine" },
    ],
  },
]

export const energyManagementQuestions = [
  {
    id: 1,
    question: "How would you rate your energy levels throughout the day?",
    options: [
      { value: "very-low", label: "Very low - constantly fatigued" },
      { value: "fluctuating", label: "Fluctuating - significant energy crashes" },
      { value: "moderate", label: "Moderate - occasional dips in energy" },
      { value: "high", label: "High - consistent energy throughout the day" },
    ],
  },
  {
    id: 2,
    question: "How often do you feel too tired to complete daily activities?",
    options: [
      { value: "daily", label: "Daily - constant struggle with fatigue" },
      { value: "frequently", label: "Frequently - several times a week" },
      { value: "occasionally", label: "Occasionally - a few times a month" },
      { value: "rarely", label: "Rarely - almost never feel too tired" },
    ],
  },
  {
    id: 3,
    question: "How would you describe your ability to balance activity and rest?",
    options: [
      { value: "poor", label: "Poor - I'm either overactive or exhausted" },
      { value: "fair", label: "Fair - I struggle to find balance" },
      { value: "good", label: "Good - I usually maintain a reasonable balance" },
      { value: "excellent", label: "Excellent - I consistently balance activity and rest" },
    ],
  },
  {
    id: 4,
    question: "How often do you take short breaks during periods of focused work?",
    options: [
      { value: "never", label: "Never - I work until exhausted" },
      { value: "rarely", label: "Rarely - only when absolutely necessary" },
      { value: "sometimes", label: "Sometimes - occasional breaks" },
      { value: "regularly", label: "Regularly - scheduled breaks throughout work" },
    ],
  },
  {
    id: 5,
    question: "How would you rate the quality of your rest periods?",
    options: [
      { value: "poor", label: "Poor - I don't feel refreshed after rest" },
      { value: "fair", label: "Fair - somewhat refreshed after rest" },
      { value: "good", label: "Good - generally refreshed after rest" },
      { value: "excellent", label: "Excellent - fully rejuvenated after rest" },
    ],
  },
  {
    id: 6,
    question: "How often do you engage in activities that energize you?",
    options: [
      { value: "rarely", label: "Rarely - almost never" },
      { value: "occasionally", label: "Occasionally - a few times a month" },
      { value: "frequently", label: "Frequently - several times a week" },
      { value: "daily", label: "Daily - regular part of my routine" },
    ],
  },
  {
    id: 7,
    question: "How well do you manage your energy for important tasks?",
    options: [
      { value: "poorly", label: "Poorly - often depleted when needed most" },
      { value: "somewhat", label: "Somewhat - inconsistent energy management" },
      { value: "well", label: "Well - usually have energy when needed" },
      { value: "very-well", label: "Very well - strategically manage my energy" },
    ],
  },
  {
    id: 8,
    question: "How would you describe your caffeine or stimulant use?",
    options: [
      { value: "dependent", label: "Dependent - can't function without it" },
      { value: "heavy", label: "Heavy - multiple servings throughout the day" },
      { value: "moderate", label: "Moderate - 1-2 servings daily" },
      { value: "minimal", label: "Minimal or none - rarely use stimulants" },
    ],
  },
  {
    id: 9,
    question: "How often do you feel mentally drained or experience brain fog?",
    options: [
      { value: "constantly", label: "Constantly - daily mental fatigue" },
      { value: "frequently", label: "Frequently - several times a week" },
      { value: "occasionally", label: "Occasionally - a few times a month" },
      { value: "rarely", label: "Rarely - almost never experience mental fatigue" },
    ],
  },
  {
    id: 10,
    question: "How would you rate your ability to recognize early signs of burnout?",
    options: [
      { value: "poor", label: "Poor - only notice when severely affected" },
      { value: "fair", label: "Fair - sometimes notice late warning signs" },
      { value: "good", label: "Good - generally aware of warning signs" },
      { value: "excellent", label: "Excellent - highly attuned to early indicators" },
    ],
  },
]
