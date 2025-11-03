export interface Question {
  id: number;
  category: string;
  question: string;
  options: {
    text: string;
    points: number;
  }[];
  multiSelect?: boolean;
}

export const questions: Question[] = [
  // Category 1: AI Tool Awareness (Training Opportunity)
  {
    id: 1,
    category: "AI Tool Awareness",
    question: "How familiar are you with AI tools like ChatGPT, Claude, or Gemini?",
    options: [
      { text: "Never heard of them", points: 0 },
      { text: "Heard of them but never tried", points: 1 },
      { text: "Tried once or twice", points: 2 },
      { text: "Use them regularly", points: 3 },
    ],
  },
  {
    id: 2,
    category: "AI Tool Awareness",
    question: "Does your team currently use any AI-powered tools?",
    options: [
      { text: "No, we don't use any", points: 0 },
      { text: "Not sure / Maybe unknowingly", points: 1 },
      { text: "Yes, 1-2 tools", points: 2 },
      { text: "Yes, multiple tools across the business", points: 3 },
    ],
  },
  {
    id: 3,
    category: "AI Tool Awareness",
    question: "How confident is your team in learning new technology?",
    options: [
      { text: "Very resistant to change", points: 0 },
      { text: "Hesitant but willing if trained", points: 1 },
      { text: "Open to learning with proper support", points: 2 },
      { text: "Eager to adopt new tools", points: 3 },
    ],
  },

  // Category 2: Repetitive Tasks & Automation Potential
  {
    id: 4,
    category: "Repetitive Tasks & Automation",
    question: "How many hours per week does your team spend on repetitive tasks?",
    options: [
      { text: "Less than 5 hours", points: 0 },
      { text: "5-15 hours", points: 1 },
      { text: "15-30 hours", points: 2 },
      { text: "30+ hours", points: 3 },
    ],
  },
  {
    id: 5,
    category: "Repetitive Tasks & Automation",
    question: "Which tasks feel most time-consuming for your business?",
    options: [
      { text: "Customer service/responding to inquiries", points: 2 },
      { text: "Social media content creation", points: 2 },
      { text: "Data entry and spreadsheet work", points: 3 },
      { text: "Scheduling and calendar management", points: 1 },
      { text: "Writing emails and proposals", points: 2 },
      { text: "Bookkeeping and invoicing", points: 3 },
      { text: "None, we're pretty efficient", points: 0 },
    ],
  },
  {
    id: 6,
    category: "Repetitive Tasks & Automation",
    question: "Do you currently use automation for any business processes?",
    options: [
      { text: "No automation at all", points: 0 },
      { text: "Basic email templates or scheduling", points: 1 },
      { text: "Some automated workflows (Zapier, IFTTT)", points: 2 },
      { text: "Extensive automation across multiple areas", points: 3 },
    ],
  },

  // Category 3: Data & Technology Infrastructure
  {
    id: 7,
    category: "Data & Technology",
    question: "How is your business data currently stored?",
    options: [
      { text: "Mostly paper-based or scattered files", points: 0 },
      { text: "Local computer files and spreadsheets", points: 1 },
      { text: "Cloud storage (Google Drive, Dropbox)", points: 2 },
      { text: "Centralized business software (CRM, ERP)", points: 3 },
    ],
  },
  {
    id: 8,
    category: "Data & Technology",
    question: "What tools does your business currently use?",
    options: [
      { text: "Email only", points: 0 },
      { text: "Microsoft Office / Google Workspace", points: 1 },
      { text: "Social media scheduling tools", points: 2 },
      { text: "CRM (HubSpot, Salesforce)", points: 3 },
      { text: "Project management (Asana, Monday)", points: 2 },
      { text: "Accounting software (QuickBooks, Xero)", points: 2 },
    ],
  },
  {
    id: 9,
    category: "Data & Technology",
    question: "How easy is it to access customer data when you need it?",
    options: [
      { text: "Very difficult, it's scattered everywhere", points: 0 },
      { text: "Takes time but we can find it", points: 1 },
      { text: "Fairly organized, usually accessible", points: 2 },
      { text: "Instant access, everything is centralized", points: 3 },
    ],
  },

  // Category 4: Business Goals & Growth
  {
    id: 10,
    category: "Business Goals & Growth",
    question: "What's your primary business goal for the next 12 months?",
    options: [
      { text: "Survive / Stay afloat", points: 0 },
      { text: "Maintain current operations", points: 1 },
      { text: "Grow revenue by 10-25%", points: 2 },
      { text: "Scale rapidly / Expand team", points: 3 },
    ],
  },
  {
    id: 11,
    category: "Business Goals & Growth",
    question: "What's your biggest business challenge right now?",
    options: [
      { text: "Not enough customers/sales", points: 1 },
      { text: "Too much manual work, not enough time", points: 3 },
      { text: "Inconsistent quality/processes", points: 2 },
      { text: "Difficulty competing with larger companies", points: 2 },
      { text: "Team training and skill gaps", points: 2 },
    ],
  },
  {
    id: 12,
    category: "Business Goals & Growth",
    question: "If you could save 10 hours per week, what would you focus on?",
    options: [
      { text: "Marketing and customer acquisition", points: 2 },
      { text: "Strategy and business development", points: 3 },
      { text: "Improving product/service quality", points: 2 },
      { text: "Personal time / work-life balance", points: 1 },
    ],
  },

  // Category 5: Budget & Resources
  {
    id: 13,
    category: "Budget & Resources",
    question: "What's your appetite for investing in new tools/training?",
    options: [
      { text: "Very limited budget right now", points: 0 },
      { text: "Willing to invest if ROI is clear", points: 2 },
      { text: "Ready to invest in growth", points: 3 },
      { text: "Already budgeting for technology upgrades", points: 3 },
    ],
  },
  {
    id: 14,
    category: "Budget & Resources",
    question: "How many employees does your business have?",
    options: [
      { text: "Just me (solo)", points: 1 },
      { text: "2-5 employees", points: 2 },
      { text: "6-20 employees", points: 3 },
      { text: "20+ employees", points: 3 },
    ],
  },
  {
    id: 15,
    category: "Budget & Resources",
    question: "How do you prefer to learn new skills/tools?",
    options: [
      { text: "Figure it out myself / trial and error", points: 1 },
      { text: "Watch YouTube videos / read articles", points: 2 },
      { text: "Hands-on training with an expert", points: 3 },
      { text: "Formal courses or certifications", points: 2 },
    ],
  },
];
