// Mental & Emotional Clarity Questionnaires

export const stressQuestions = [
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
]

export const mindfulnessQuestions = [
  {
    id: 1,
    question: "How often do you practice formal meditation?",
    options: [
      { value: "never", label: "Never" },
      { value: "occasionally", label: "Occasionally - a few times a month" },
      { value: "regularly", label: "Regularly - a few times a week" },
      { value: "daily", label: "Daily - consistent practice" },
    ],
  },
  {
    id: 2,
    question: "How present are you during daily activities (eating, walking, etc.)?",
    options: [
      { value: "rarely", label: "Rarely present - usually distracted" },
      { value: "sometimes", label: "Sometimes present - often on autopilot" },
      { value: "mostly", label: "Mostly present - occasionally distracted" },
      { value: "fully", label: "Fully present - engaged in the moment" },
    ],
  },
  {
    id: 3,
    question: "How would you rate your ability to notice thoughts without judgment?",
    options: [
      { value: "poor", label: "Poor - I get caught up in my thoughts" },
      { value: "fair", label: "Fair - I sometimes notice my thought patterns" },
      { value: "good", label: "Good - I often observe thoughts without judgment" },
      { value: "excellent", label: "Excellent - I consistently practice non-judgment" },
    ],
  },
  {
    id: 4,
    question: "How often do you take mindful breaks during the day?",
    options: [
      { value: "never", label: "Never" },
      { value: "rarely", label: "Rarely - only when very stressed" },
      { value: "sometimes", label: "Sometimes - a few times a week" },
      { value: "frequently", label: "Frequently - multiple times daily" },
    ],
  },
  {
    id: 5,
    question: "How would you describe your breathing throughout the day?",
    options: [
      { value: "unaware", label: "Unaware - I never notice my breathing" },
      { value: "rarely-aware", label: "Rarely aware - only when prompted" },
      { value: "sometimes-aware", label: "Sometimes aware - occasionally check in" },
      { value: "very-aware", label: "Very aware - regularly monitor my breath" },
    ],
  },
  {
    id: 6,
    question: "How often do you practice body awareness or body scanning?",
    options: [
      { value: "never", label: "Never" },
      { value: "rarely", label: "Rarely - a few times a month" },
      { value: "sometimes", label: "Sometimes - weekly" },
      { value: "regularly", label: "Regularly - daily or almost daily" },
    ],
  },
  {
    id: 7,
    question: "How would you rate your ability to stay focused on one task?",
    options: [
      { value: "poor", label: "Poor - constantly distracted" },
      { value: "fair", label: "Fair - frequently lose focus" },
      { value: "good", label: "Good - generally maintain focus" },
      { value: "excellent", label: "Excellent - deeply focused for extended periods" },
    ],
  },
  {
    id: 8,
    question: "How often do you practice gratitude or appreciation?",
    options: [
      { value: "never", label: "Never" },
      { value: "occasionally", label: "Occasionally - when prompted" },
      { value: "frequently", label: "Frequently - several times a week" },
      { value: "daily", label: "Daily - consistent practice" },
    ],
  },
  {
    id: 9,
    question: "How would you describe your relationship with technology?",
    options: [
      { value: "addictive", label: "Addictive - constant checking and scrolling" },
      { value: "distracting", label: "Distracting - frequent interruptions" },
      { value: "balanced", label: "Balanced - moderate and intentional use" },
      { value: "mindful", label: "Mindful - very intentional and limited use" },
    ],
  },
  {
    id: 10,
    question: "How often do you connect mindfully with nature?",
    options: [
      { value: "never", label: "Never" },
      { value: "rarely", label: "Rarely - a few times a year" },
      { value: "sometimes", label: "Sometimes - monthly" },
      { value: "frequently", label: "Frequently - weekly or more" },
    ],
  },
]

export const emotionalAwarenessQuestions = [
  {
    id: 1,
    question: "How would you rate your ability to identify your emotions?",
    options: [
      { value: "poor", label: "Poor - often confused about what I'm feeling" },
      { value: "fair", label: "Fair - can identify basic emotions" },
      { value: "good", label: "Good - can identify most emotions" },
      { value: "excellent", label: "Excellent - precise emotional awareness" },
    ],
  },
  {
    id: 2,
    question: "How comfortable are you expressing your emotions?",
    options: [
      { value: "very-uncomfortable", label: "Very uncomfortable - I avoid expression" },
      { value: "somewhat-uncomfortable", label: "Somewhat uncomfortable - I limit expression" },
      { value: "somewhat-comfortable", label: "Somewhat comfortable - I express selectively" },
      { value: "very-comfortable", label: "Very comfortable - I express appropriately" },
    ],
  },
  {
    id: 3,
    question: "How often do you reflect on your emotional patterns?",
    options: [
      { value: "never", label: "Never" },
      { value: "rarely", label: "Rarely - only after intense experiences" },
      { value: "sometimes", label: "Sometimes - occasional reflection" },
      { value: "regularly", label: "Regularly - consistent reflection practice" },
    ],
  },
  {
    id: 4,
    question: "How well do you manage difficult emotions (anger, sadness, fear)?",
    options: [
      { value: "poorly", label: "Poorly - I'm overwhelmed by difficult emotions" },
      { value: "somewhat", label: "Somewhat - I struggle but eventually manage" },
      { value: "well", label: "Well - I have strategies that usually work" },
      { value: "very-well", label: "Very well - I process emotions effectively" },
    ],
  },
  {
    id: 5,
    question: "How would you describe your emotional resilience?",
    options: [
      { value: "low", label: "Low - I take a long time to recover from setbacks" },
      { value: "moderate", label: "Moderate - I eventually bounce back" },
      { value: "good", label: "Good - I recover relatively quickly" },
      { value: "high", label: "High - I adapt and recover very effectively" },
    ],
  },
  {
    id: 6,
    question: "How often do you track or journal about your emotions?",
    options: [
      { value: "never", label: "Never" },
      { value: "rarely", label: "Rarely - only during major life events" },
      { value: "sometimes", label: "Sometimes - occasionally" },
      { value: "regularly", label: "Regularly - consistent practice" },
    ],
  },
  {
    id: 7,
    question: "How well do you understand the connection between your thoughts and emotions?",
    options: [
      { value: "poorly", label: "Poorly - I don't see the connection" },
      { value: "somewhat", label: "Somewhat - I notice obvious connections" },
      { value: "well", label: "Well - I recognize most thought-emotion patterns" },
      { value: "very-well", label: "Very well - I have deep insight into this relationship" },
    ],
  },
  {
    id: 8,
    question: "How would you rate your empathy for others' emotions?",
    options: [
      { value: "low", label: "Low - I rarely consider others' feelings" },
      { value: "moderate", label: "Moderate - I sometimes understand others' emotions" },
      { value: "high", label: "High - I often understand and connect with others' feelings" },
      { value: "very-high", label: "Very high - I deeply sense and respond to others' emotions" },
    ],
  },
  {
    id: 9,
    question: "How comfortable are you with emotional vulnerability?",
    options: [
      { value: "very-uncomfortable", label: "Very uncomfortable - I avoid vulnerability" },
      { value: "somewhat-uncomfortable", label: "Somewhat uncomfortable - I limit vulnerability" },
      { value: "somewhat-comfortable", label: "Somewhat comfortable - I'm selective about vulnerability" },
      { value: "very-comfortable", label: "Very comfortable - I embrace appropriate vulnerability" },
    ],
  },
  {
    id: 10,
    question: "How would you rate your emotional self-awareness overall?",
    options: [
      { value: "poor", label: "Poor - minimal awareness of my emotional state" },
      { value: "fair", label: "Fair - basic awareness of emotions" },
      { value: "good", label: "Good - solid understanding of my emotional patterns" },
      { value: "excellent", label: "Excellent - deep insight into my emotional life" },
    ],
  },
]

export const cognitiveWellnessQuestions = [
  {
    id: 1,
    question: "How would you rate your ability to focus on tasks?",
    options: [
      { value: "poor", label: "Poor - easily distracted, can't maintain focus" },
      { value: "fair", label: "Fair - can focus but with frequent interruptions" },
      { value: "good", label: "Good - generally maintain focus with occasional lapses" },
      { value: "excellent", label: "Excellent - deep focus for extended periods" },
    ],
  },
  {
    id: 2,
    question: "How often do you engage in mentally stimulating activities?",
    options: [
      { value: "rarely", label: "Rarely - almost never" },
      { value: "occasionally", label: "Occasionally - a few times a month" },
      { value: "frequently", label: "Frequently - several times a week" },
      { value: "daily", label: "Daily - consistent mental challenges" },
    ],
  },
  {
    id: 3,
    question: "How would you describe your memory function?",
    options: [
      { value: "poor", label: "Poor - frequent memory lapses" },
      { value: "fair", label: "Fair - occasional memory issues" },
      { value: "good", label: "Good - generally reliable memory" },
      { value: "excellent", label: "Excellent - sharp, detailed recall" },
    ],
  },
  {
    id: 4,
    question: "How often do you learn new skills or information?",
    options: [
      { value: "rarely", label: "Rarely - almost never" },
      { value: "occasionally", label: "Occasionally - a few times a year" },
      { value: "frequently", label: "Frequently - monthly" },
      { value: "constantly", label: "Constantly - weekly or more often" },
    ],
  },
  {
    id: 5,
    question: "How would you rate your problem-solving abilities?",
    options: [
      { value: "poor", label: "Poor - I struggle with most problems" },
      { value: "fair", label: "Fair - I can solve basic problems" },
      { value: "good", label: "Good - I'm an effective problem solver" },
      { value: "excellent", label: "Excellent - I excel at complex problem solving" },
    ],
  },
  {
    id: 6,
    question: "How often do you experience mental fatigue or brain fog?",
    options: [
      { value: "daily", label: "Daily - constant mental fatigue" },
      { value: "frequently", label: "Frequently - several times a week" },
      { value: "occasionally", label: "Occasionally - a few times a month" },
      { value: "rarely", label: "Rarely - almost never" },
    ],
  },
  {
    id: 7,
    question: "How would you describe your mental flexibility and adaptability?",
    options: [
      { value: "rigid", label: "Rigid - I struggle with change" },
      { value: "somewhat-flexible", label: "Somewhat flexible - I adapt with effort" },
      { value: "flexible", label: "Flexible - I adapt well to most changes" },
      { value: "highly-flexible", label: "Highly flexible - I thrive with change and new ideas" },
    ],
  },
  {
    id: 8,
    question: "How often do you engage in activities that require deep thinking?",
    options: [
      { value: "rarely", label: "Rarely - almost never" },
      { value: "occasionally", label: "Occasionally - a few times a month" },
      { value: "frequently", label: "Frequently - weekly" },
      { value: "daily", label: "Daily - regular deep thinking" },
    ],
  },
  {
    id: 9,
    question: "How would you rate your creativity and innovative thinking?",
    options: [
      { value: "low", label: "Low - I rarely have creative ideas" },
      { value: "moderate", label: "Moderate - occasionally creative" },
      { value: "high", label: "High - frequently generate creative solutions" },
      { value: "very-high", label: "Very high - consistently innovative" },
    ],
  },
  {
    id: 10,
    question: "How often do you practice mental rest or cognitive recovery?",
    options: [
      { value: "rarely", label: "Rarely - my mind is always active" },
      { value: "occasionally", label: "Occasionally - sometimes allow mental rest" },
      { value: "frequently", label: "Frequently - regular mental breaks" },
      { value: "daily", label: "Daily - intentional mental rest practices" },
    ],
  },
]
