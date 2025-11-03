export interface CategoryScore {
  category: string;
  score: number;
  maxScore: number;
  percentage: number;
}

export interface AssessmentResult {
  totalScore: number;
  maxScore: number;
  percentage: number;
  level: "Getting Started" | "Building Momentum" | "AI-Ready Leader";
  categoryScores: CategoryScore[];
  recommendations: string[];
  recommendedService: string;
}

export function calculateResults(answers: Record<number, number>): AssessmentResult {
  const categories = [
    "AI Tool Awareness",
    "Repetitive Tasks & Automation",
    "Data & Technology",
    "Business Goals & Growth",
    "Budget & Resources",
  ];

  // Calculate category scores
  const categoryScores: CategoryScore[] = [];
  let totalScore = 0;
  const maxScore = 45; // 15 questions × 3 points max

  // Group questions by category (3 questions per category)
  const categoryQuestions = {
    "AI Tool Awareness": [1, 2, 3],
    "Repetitive Tasks & Automation": [4, 5, 6],
    "Data & Technology": [7, 8, 9],
    "Business Goals & Growth": [10, 11, 12],
    "Budget & Resources": [13, 14, 15],
  };

  categories.forEach((category) => {
    const questionIds = categoryQuestions[category as keyof typeof categoryQuestions];
    const categoryScore = questionIds.reduce((sum, qId) => sum + (answers[qId] || 0), 0);
    const categoryMax = questionIds.length * 3;

    categoryScores.push({
      category,
      score: categoryScore,
      maxScore: categoryMax,
      percentage: Math.round((categoryScore / categoryMax) * 100),
    });

    totalScore += categoryScore;
  });

  const percentage = Math.round((totalScore / maxScore) * 100);

  // Determine level
  let level: AssessmentResult["level"];
  let recommendations: string[] = [];
  let recommendedService: string;

  if (totalScore <= 15) {
    level = "Getting Started";
    recommendedService = "AI Essentials Training";
    recommendations = [
      "Start with AI tool training (ChatGPT, Claude basics)",
      "Learn how AI can help with daily tasks specific to your industry",
      "Explore free AI tools to get comfortable with the technology",
      "Focus on building team awareness and reducing resistance to change",
    ];
  } else if (totalScore <= 30) {
    level = "Building Momentum";
    recommendedService = "AI Implementation Package";
    recommendations = [
      "Custom AI tool training for your team based on their roles",
      "Identify your top 3 processes to automate for maximum impact",
      "Implement AI workflow automation to save 10-20 hours per week",
      "Develop a data organization strategy to maximize AI benefits",
    ];
  } else {
    level = "AI-Ready Leader";
    recommendedService = "Custom AI Solutions";
    recommendations = [
      "Advanced AI integration across departments and workflows",
      "Custom AI solutions tailored to your unique business needs",
      "Train your team to become AI power users and internal champions",
      "Implement AI-driven analytics for strategic decision-making",
    ];
  }

  // Add specific recommendations based on weak categories
  const weakCategories = categoryScores
    .filter((cat) => cat.percentage < 50)
    .map((cat) => cat.category);

  if (weakCategories.includes("AI Tool Awareness")) {
    recommendations.push("Priority: Schedule AI awareness workshop for your team");
  }
  if (weakCategories.includes("Repetitive Tasks & Automation")) {
    recommendations.push("Priority: Conduct a workflow audit to identify automation opportunities");
  }
  if (weakCategories.includes("Data & Technology")) {
    recommendations.push("Priority: Implement a centralized data management system");
  }

  return {
    totalScore,
    maxScore,
    percentage,
    level,
    categoryScores,
    recommendations,
    recommendedService,
  };
}

export function getScoreMessage(level: AssessmentResult["level"]): string {
  const messages = {
    "Getting Started":
      "You're at the beginning of your AI journey—and that's okay! There's huge potential here.",
    "Building Momentum":
      "You're aware of AI but haven't fully integrated it. You're ready for the next step!",
    "AI-Ready Leader":
      "Impressive! You're ahead of most small businesses. Let's take you even further.",
  };

  return messages[level];
}
