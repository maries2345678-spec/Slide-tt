export interface ProjectAuthor {
  name: string;
  role: string;
  school: string;
}

export interface ProjectInfo {
  title: string;
  subtitle: string;
  contest: string;
  academicYear: string;
  field: string;
  authors: ProjectAuthor[];
  advisor: string;
  date: string;
  demoUrl: string;
  sampleSize: number;
  totalTopics: number;
  themeCount: number;
}

export interface SlideData {
  id: string;
  slideNumber: number;
  category: string;
  title: string;
  headline: string;
  lead: string;
  image?: string;
  imageCaption?: string;
  metadata?: Record<string, string>;
  stats?: Array<{ value: string; label: string; subtext: string }>;
  keyIssues?: Array<{ title: string; description: string }>;
  researchQuestions?: Array<{ number: string; question: string; answer: string }>;
  hypothesis?: { core: string; validationMetric: string };
  spaces?: Array<{ index: string; name: string; items: string[]; focus: string }>;
  pillars?: Array<{ title: string; desc: string }>;
  aiEthicsPrinciples?: string[];
  timelineSteps?: Array<{ phase: string; title: string; detail: string }>;
  demographics?: { sample: number; school: string; grades: string; tool: string };
  channelsData?: Array<{ channel: string; rate: number; status: string }>;
  aiAdoptionData?: Array<{ label: string; percent: number; color: string }>;
  baselineInsights?: Array<{ metric: string; title: string; desc: string }>;
  table31?: Array<{ criteria: string; content: string; rate: number }>;
  aiAccess?: { often: number; sometimes: number; rarelyOrNever: number; score: number; scoreMax: number };
  preTestScores?: Array<{ domain: string; rate: number; desc: string }>;
  preTestAverage?: number;
  comparisonTable?: Array<{
    domain: string;
    preTest: number;
    postTest: number;
    delta: string;
    significance: string;
    deltaValue: number;
  }>;
  keyFindings?: string[];
  likertScores?: Array<{
    cluster: string;
    score: number;
    max: number;
    benchmark: string;
    subMetrics: Array<{ label: string; val: number }>;
  }>;
  studentVoice?: Array<{ quote: string; author: string }>;
  contributions?: Array<{ title: string; badge: string; points: string[] }>;
  limitations?: Array<{ title: string; desc: string }>;
  roadmap?: Array<{ stage: string; title: string; desc: string }>;
  summaryHighlights?: Array<{ title: string; detail: string }>;
  qrLinks?: { title: string; url: string; authorSignoff: string };
  speakerNotes: string;
}

export interface PresentationData {
  projectInfo: ProjectInfo;
  styleGuide: {
    colors: Record<string, string>;
    fonts: Record<string, string>;
  };
  slides: SlideData[];
}
