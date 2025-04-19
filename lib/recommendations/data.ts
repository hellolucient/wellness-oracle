// Define interfaces for better type safety
export interface Recommendation {
  type: "product" | "service" | "experience" | "habit";
  title: string;
  description: string;
  link: string;
  science: string;
  potential_link_category?: string;
}

// Sample recommendations for sleep optimization
export const sleepRecommendations: Recommendation[] = [
  {
    type: "product",
    title: "Philips SmartSleep Wake-Up Light",
    description:
      "This clinically proven light therapy lamp helps you wake up more naturally with a sunrise simulation and gentle sounds.",
    link: "#",
    science:
      "Light therapy has been shown to help regulate circadian rhythms. A 2019 study in the Journal of Sleep Research found that wake-up lights improved sleep quality and morning alertness by gradually increasing light exposure before waking.",
  },
  // ... full sleepRecommendations array ...
  {
    type: "service",
    title: "Sleep Tracking App Subscription",
    description:
      "Premium subscription to a sleep tracking app that provides detailed analysis of your sleep patterns and personalized recommendations.",
    link: "#",
    science:
      "While consumer sleep trackers aren't as accurate as clinical polysomnography, studies in Sleep Health journal show they can help identify patterns and motivate behavioral changes. Regular tracking increases awareness of sleep habits and can improve sleep hygiene compliance.",
  },
];

// Sample recommendations for stress management
export const stressRecommendations: Recommendation[] = [
  {
    type: "product",
    title: "Muse 2 Meditation Headband",
    description:
      "A brain-sensing headband that provides real-time feedback on your mental activity, heart rate, breathing, and body movements during meditation.",
    link: "#",
    science:
      "EEG-based neurofeedback devices have been shown to enhance meditation practice. A 2018 study in Frontiers in Human Neuroscience found that neurofeedback training improved attention and emotional regulation, key components in stress management.",
  },
  // ... full stressRecommendations array ...
  {
    type: "service",
    title: "Biofeedback Therapy Sessions",
    description:
      "Professional sessions using instruments to measure physiological functions and teach you to control them through awareness and relaxation techniques.",
    link: "#",
    science:
      "Clinical studies published in Applied Psychophysiology and Biofeedback demonstrate that biofeedback therapy can effectively reduce stress by teaching conscious control over autonomic functions. Participants show significant improvements in heart rate variability, blood pressure, and muscle tension, with effects persisting after treatment ends.",
  },
];

// Sample recommendations for nutrition
export const nutritionRecommendations: Recommendation[] = [
  {
    type: "product",
    title: "High-Quality Probiotic Supplement",
    description: "A multi-strain probiotic supplement to support gut health and improve digestion.",
    link: "#",
    science:
      "Research in the Journal of Gastroenterology shows that specific probiotic strains can improve gut barrier function and reduce inflammation. A 2020 meta-analysis found that multi-strain probiotics were more effective than single-strain products for improving digestive symptoms and overall gut health.",
  },
  // ... full nutritionRecommendations array ...
  {
    type: "service",
    title: "Mindful Eating Program",
    description:
      "A structured program teaching awareness of physical and emotional cues related to eating, helping you develop a healthier relationship with food.",
    link: "#",
    science:
      "Clinical trials published in Obesity Reviews demonstrate that mindful eating interventions can reduce emotional eating, binge eating episodes, and food cravings. Participants show improvements in body weight, glycemic control, and psychological well-being compared to traditional diet approaches.",
  },
];

// Sample recommendations for fitness
export const fitnessRecommendations: Recommendation[] = [
  {
    type: "product",
    title: "Adjustable Dumbbells Set",
    description:
      "Space-saving dumbbells that can be adjusted to different weights, allowing for progressive strength training at home.",
    link: "#",
    science:
      "Progressive resistance training has been shown in the Journal of Strength and Conditioning Research to be essential for muscle development and strength gains. A 2021 meta-analysis found that progressive overload principles using adjustable resistance leads to significant improvements in muscle mass and functional strength across all age groups.",
  },
  // ... full fitnessRecommendations array ...
  {
    type: "service",
    title: "Movement Assessment & Corrective Exercise Program",
    description:
      "A comprehensive evaluation of your movement patterns followed by targeted exercises to address imbalances and improve functional movement.",
    link: "#",
    science:
      "Functional movement screening and corrective exercise have been validated in the Journal of Physical Therapy Science as effective approaches for injury prevention. Research shows that addressing movement compensations and muscle imbalances can reduce injury risk by up to 65% and improve performance metrics across various physical activities.",
  },
];

// Map of recommendations by pillar and subcategory (can be used elsewhere if needed)
export const recommendationsMap: Record<string, Record<string, Recommendation[]>> = {
  "physical-vitality": {
    sleep: sleepRecommendations,
    fitness: fitnessRecommendations,
    "body-care": sleepRecommendations, // Placeholder
    energy: sleepRecommendations, // Placeholder
  },
  "mental-emotional-clarity": {
    stress: stressRecommendations,
    mindfulness: stressRecommendations, // Placeholder
    emotional: stressRecommendations, // Placeholder
    cognitive: stressRecommendations, // Placeholder
  },
  "nutritional-harmony": {
    "mindful-eating": nutritionRecommendations,
    hydration: nutritionRecommendations, // Placeholder
    "gut-health": nutritionRecommendations, // Placeholder
    supplements: nutritionRecommendations, // Placeholder
  },
};

// Combine all recommendations into a single list for searching
export const allRecommendations: Recommendation[] = [
  ...sleepRecommendations,
  ...stressRecommendations,
  ...nutritionRecommendations,
  ...fitnessRecommendations,
  // Add other recommendation arrays here if they exist
]; 