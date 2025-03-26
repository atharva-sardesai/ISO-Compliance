import {
  Shield,
  Lock,
  Database,
  FileText,
  Users,
  AlertTriangle,
  BarChart,
  Building,
  Server,
  Network,
  Key,
  FileCode,
  Bell,
  UserCheck,
  type LucideIcon,
} from "lucide-react"

export interface SubQuestion {
  id: string
  text: string
  options: string[]
  defaultValue: number | string
  recommendations: Recommendation[]
  placeholder?: string
  unit?: string
  min?: number
  max?: number
}

export interface Recommendation {
  id: string
  tier: "standard" | "premium"
  name: string
  shortDescription: string
  description: string
  pros: string[]
  cons: string[]
  pricing: string
  pricingModel: string
  officialWebsite: string
  pricingPage?: string
  setupTime: string
  recommendedTimeline: string
  requiredResources: string
  organizationSize: string
  effortHours: string
  priority: "High" | "Medium" | "Low"
  estimatedCostRange: string
  icon: LucideIcon
  calculateEffort?: (input: number | string) => string
  calculateTimeline?: (input: number | string) => string
  calculateCost?: (input: number | string) => string
}

export interface Question {
  id: number
  category: string
  text: string
  description?: string
  helpText?: string
  icon: LucideIcon
  recommendations: Recommendation[]
  subQuestion?: SubQuestion
}

export const questionsData: Question[] = [
  {
    id: 1,
    category: "Threat Intelligence",
    text: "Do you receive a threat intelligence feed regarding the technology stack of your application to remain up to date with the latest threats?",
    description: "Threat intelligence helps organizations stay informed about potential security threats and vulnerabilities.",
    helpText: "This includes monitoring for threats specific to your technology stack and infrastructure.",
    icon: Shield,
    recommendations: [
      {
        id: "otx",
        tier: "standard",
        name: "Open Threat Exchange (OTX)",
        shortDescription: "Free threat intelligence platform",
        description: "OTX provides access to threat intelligence data from a global community of security researchers.",
        pros: ["Free to use", "Community-driven", "Regular updates", "API access"],
        cons: ["Limited advanced features", "Basic threat data", "No dedicated support"],
        pricing: "₹0 (Free)",
        pricingModel: "Free",
        officialWebsite: "https://otx.alienvault.com/",
        setupTime: "1-2 days",
        recommendedTimeline: "Within 1-2 weeks",
        requiredResources: "Security analyst",
        organizationSize: "All sizes",
        effortHours: "8-16",
        priority: "Medium",
        estimatedCostRange: "₹0 (Free)",
        icon: Shield
      },
      {
        id: "recorded-future",
        tier: "standard",
        name: "Recorded Future",
        shortDescription: "Enterprise threat intelligence platform",
        description: "Recorded Future provides comprehensive threat intelligence with advanced analytics and automation.",
        pros: ["Advanced analytics", "Automated threat detection", "Dedicated support", "API integration"],
        cons: ["Higher cost", "Complex setup", "Requires training"],
        pricing: "₹3,000,000 annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.recordedfuture.com/",
        setupTime: "1 week",
        recommendedTimeline: "Within 1 week",
        requiredResources: "Security team",
        organizationSize: "Medium to large organizations",
        effortHours: "40",
        priority: "High",
        estimatedCostRange: "₹3,000,000/year",
        icon: Shield
      },
      {
        id: "fireeye",
        tier: "premium",
        name: "FireEye Threat Intelligence",
        shortDescription: "Advanced threat intelligence solution",
        description: "FireEye provides comprehensive threat intelligence with advanced threat detection and response capabilities.",
        pros: ["Advanced threat detection", "Global threat network", "24/7 support", "Custom intelligence"],
        cons: ["Premium pricing", "Complex integration", "Resource intensive"],
        pricing: "₹8,300,000 annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.fireeye.com/",
        setupTime: "1-2 weeks",
        recommendedTimeline: "Within 1-2 weeks",
        requiredResources: "Dedicated security team",
        organizationSize: "Large enterprises",
        effortHours: "80",
        priority: "High",
        estimatedCostRange: "₹8,300,000/year",
        icon: Shield
      }
    ],
    subQuestion: {
      id: "threat-intel-interest",
      text: "Are you interested in integrating a threat intelligence service to monitor and respond to emerging threats relevant to your technology stack?",
      options: ["Yes", "No"],
      defaultValue: "Yes",
      recommendations: []
    }
  }
] 