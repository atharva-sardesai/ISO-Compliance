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

// Helper function to convert input to number
const toNumber = (input: number | string): number => {
  if (typeof input === 'string') {
    return parseInt(input) || 0
  }
  return input
}

// Helper function to handle string array input
const toStringArray = (input: number | string): string[] => {
  if (typeof input === 'string') {
    return input.split(',').map(s => s.trim())
  }
  return []
}

// Update calculation functions to use helpers
const calculateEffort = (input: number | string) => {
  const value = toNumber(input)
  const baseEffort = 40
  const additionalEffort = value
  const totalEffort = baseEffort + additionalEffort
  return `${totalEffort}–${totalEffort + 40}`
}

const calculateTimeline = (input: number | string) => {
  const value = toNumber(input)
  const baseTimeline = 14
  const additionalTimeline = value * 7
  const totalTimeline = baseTimeline + additionalTimeline
  return `Within ${totalTimeline} days`
}

const calculateCost = (input: number | string) => {
  const value = toNumber(input)
  const baseCost = 874700
  const additionalCost = value * 87470
  const maxCost = Math.min(8747000, baseCost + additionalCost)
  return `₹${baseCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')} for assessment`
}

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
  },
  {
    id: 2,
    category: "Asset Management",
    text: "Is there an inventory management platform deployed to track the entire lifecycle of IT assets from procurement to destruction?",
    description: "IT asset management helps organizations track and manage their technology resources efficiently.",
    helpText: "This includes hardware, software, and other IT resources.",
    icon: Database,
    recommendations: [
      {
        id: "snipe-it",
        tier: "standard",
        name: "Snipe-IT",
        shortDescription: "Open-source IT asset management",
        description: "Snipe-IT is a free, open-source IT asset management system.",
        pros: ["Free to use", "Open source", "Active community", "Feature-rich"],
        cons: ["Self-hosted", "Requires maintenance", "Limited support"],
        pricing: "₹0 (Free)",
        pricingModel: "Free",
        officialWebsite: "https://snipeitapp.com/",
        setupTime: "1-2 weeks",
        recommendedTimeline: "Within 1-2 weeks",
        requiredResources: "IT administrator",
        organizationSize: "All sizes",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹0 (Free)",
        icon: Database
      },
      {
        id: "asset-panda",
        tier: "standard",
        name: "Asset Panda",
        shortDescription: "Cloud-based asset management",
        description: "Asset Panda provides a comprehensive asset management solution in the cloud.",
        pros: ["Cloud-based", "Mobile app", "Easy to use", "Good support"],
        cons: ["Limited customization", "Monthly subscription", "Internet dependent"],
        pricing: "₹125,000 annually for up to 500 assets",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.assetpanda.com/",
        setupTime: "1-2 weeks",
        recommendedTimeline: "Within 1-2 weeks",
        requiredResources: "IT administrator",
        organizationSize: "Small to medium organizations",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹125,000/year",
        icon: Database
      },
      {
        id: "servicenow",
        tier: "premium",
        name: "ServiceNow IT Asset Management",
        shortDescription: "Enterprise asset management",
        description: "ServiceNow provides comprehensive IT asset management with advanced features.",
        pros: ["Enterprise-grade", "Advanced features", "Integration capabilities", "24/7 support"],
        cons: ["High cost", "Complex setup", "Requires training"],
        pricing: "₹830,000 annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.servicenow.com/",
        setupTime: "2-3 weeks",
        recommendedTimeline: "Within 2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "Large enterprises",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹830,000/year",
        icon: Database
      }
    ],
    subQuestion: {
      id: "asset-count",
      text: "How many IT assets does your organization manage?",
      options: ["1-100", "101-500", "501-1000", "1000+"],
      defaultValue: "1-100",
      recommendations: []
    }
  },
  {
    id: 3,
    category: "Identity Management",
    text: "Is there an identity management solution in place?",
    description: "Identity management solutions help organizations manage user identities and access rights.",
    helpText: "This includes user authentication, authorization, and access control.",
    icon: Users,
    recommendations: [
      {
        id: "openldap",
        tier: "standard",
        name: "OpenLDAP",
        shortDescription: "Open-source directory service",
        description: "OpenLDAP is a free, open-source implementation of the Lightweight Directory Access Protocol.",
        pros: ["Free to use", "Open source", "Highly customizable", "Industry standard"],
        cons: ["Complex setup", "Requires expertise", "Limited support"],
        pricing: "₹0 (Free)",
        pricingModel: "Free",
        officialWebsite: "https://www.openldap.org/",
        setupTime: "3-4 weeks",
        recommendedTimeline: "Within 3-4 weeks",
        requiredResources: "System administrator",
        organizationSize: "All sizes",
        effortHours: "120-160",
        priority: "Medium",
        estimatedCostRange: "₹0 (Free)",
        icon: Users
      },
      {
        id: "activedirectory",
        tier: "standard",
        name: "Microsoft Active Directory",
        shortDescription: "Enterprise identity management",
        description: "Active Directory provides comprehensive identity and access management capabilities.",
        pros: ["Enterprise integration", "Microsoft ecosystem", "Good support", "Scalable"],
        cons: ["Windows-dependent", "Complex setup", "Licensing costs"],
        pricing: "₹41,500 - ₹498,000 (Windows Server licensing)",
        pricingModel: "One-time + annual",
        officialWebsite: "https://www.microsoft.com/",
        setupTime: "1-2 weeks",
        recommendedTimeline: "Within 1-2 weeks",
        requiredResources: "Windows administrator",
        organizationSize: "Medium to large organizations",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹41,500 - ₹498,000",
        icon: Users
      },
      {
        id: "okta",
        tier: "premium",
        name: "Okta Identity Management",
        shortDescription: "Cloud-based identity management",
        description: "Okta provides comprehensive identity management with advanced security features.",
        pros: ["Cloud-based", "Advanced security", "Easy integration", "24/7 support"],
        cons: ["Higher cost", "Internet dependent", "Complex pricing"],
        pricing: "₹166 per user/month",
        pricingModel: "Per user, monthly",
        officialWebsite: "https://www.okta.com/",
        setupTime: "3-4 weeks",
        recommendedTimeline: "Within 3-4 weeks",
        requiredResources: "Identity management team",
        organizationSize: "Medium to large organizations",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹166/user/month",
        icon: Users
      }
    ],
    subQuestion: {
      id: "user-count",
      text: "How many user identities need to be managed?",
      options: ["1-100", "101-500", "501-1000", "1000+"],
      defaultValue: "1-100",
      recommendations: []
    }
  },
  {
    id: 4,
    category: "Incident Management",
    text: "Is there an incident management platform in place?",
    description: "Incident management platforms help organizations track and respond to security incidents.",
    helpText: "This includes incident tracking, response coordination, and resolution management.",
    icon: AlertTriangle,
    recommendations: [
      {
        id: "thehive",
        tier: "standard",
        name: "TheHive",
        shortDescription: "Open-source incident response platform",
        description: "TheHive is a free, open-source incident response platform.",
        pros: ["Free to use", "Open source", "Community-driven", "Feature-rich"],
        cons: ["Self-hosted", "Requires maintenance", "Limited support"],
        pricing: "₹0 (Free)",
        pricingModel: "Free",
        officialWebsite: "https://thehive-project.org/",
        setupTime: "2-3 weeks",
        recommendedTimeline: "Within 2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "All sizes",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹0 (Free)",
        icon: AlertTriangle
      },
      {
        id: "jira",
        tier: "standard",
        name: "Atlassian Jira Service Management",
        shortDescription: "Cloud-based incident management",
        description: "Jira Service Management provides comprehensive incident management capabilities.",
        pros: ["Cloud-based", "Easy to use", "Good integration", "Scalable"],
        cons: ["Monthly subscription", "Limited customization", "Internet dependent"],
        pricing: "₹1,660 per agent/month",
        pricingModel: "Per agent, monthly",
        officialWebsite: "https://www.atlassian.com/",
        setupTime: "1-2 weeks",
        recommendedTimeline: "Within 1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium organizations",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹1,660/agent/month",
        icon: AlertTriangle
      },
      {
        id: "servicenow-incident",
        tier: "premium",
        name: "ServiceNow Incident Management",
        shortDescription: "Enterprise incident management",
        description: "ServiceNow provides comprehensive incident management with advanced features.",
        pros: ["Enterprise-grade", "Advanced features", "Integration capabilities", "24/7 support"],
        cons: ["High cost", "Complex setup", "Requires training"],
        pricing: "₹830,000 annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.servicenow.com/",
        setupTime: "3-4 weeks",
        recommendedTimeline: "Within 3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Large enterprises",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹830,000/year",
        icon: AlertTriangle
      }
    ],
    subQuestion: {
      id: "incident-count",
      text: "How many incidents does your organization handle monthly?",
      options: ["1-10", "11-50", "51-100", "100+"],
      defaultValue: "1-10",
      recommendations: []
    }
  },
  {
    id: 5,
    category: "Data Loss Prevention",
    text: "Is there a Data Loss Prevention (DLP) solution in place?",
    description: "DLP solutions help organizations prevent unauthorized data access and leakage.",
    helpText: "This includes monitoring and controlling data access and transfer.",
    icon: Lock,
    recommendations: [
      {
        id: "opendlp",
        tier: "standard",
        name: "OpenDLP",
        shortDescription: "Open-source DLP solution",
        description: "OpenDLP is a free, open-source data loss prevention solution.",
        pros: ["Free to use", "Open source", "Highly customizable", "Community support"],
        cons: ["Complex setup", "Requires expertise", "Limited features"],
        pricing: "₹0 (Free)",
        pricingModel: "Free",
        officialWebsite: "https://opendlp.org/",
        setupTime: "4+ weeks",
        recommendedTimeline: "Within 4+ weeks",
        requiredResources: "Security team",
        organizationSize: "All sizes",
        effortHours: "160+",
        priority: "Medium",
        estimatedCostRange: "₹0 (Free)",
        icon: Lock
      },
      {
        id: "symantec-dlp",
        tier: "standard",
        name: "Symantec DLP",
        shortDescription: "Enterprise DLP solution",
        description: "Symantec provides comprehensive data loss prevention capabilities.",
        pros: ["Enterprise-grade", "Good support", "Feature-rich", "Scalable"],
        cons: ["Higher cost", "Complex setup", "Resource intensive"],
        pricing: "₹2,075 per user annually",
        pricingModel: "Per user, annual",
        officialWebsite: "https://www.broadcom.com/",
        setupTime: "2-3 weeks",
        recommendedTimeline: "Within 2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to large organizations",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹2,075/user/year",
        icon: Lock
      },
      {
        id: "forcepoint-dlp",
        tier: "premium",
        name: "Forcepoint DLP",
        shortDescription: "Advanced DLP solution",
        description: "Forcepoint provides advanced data loss prevention with comprehensive features.",
        pros: ["Advanced features", "24/7 support", "Cloud integration", "AI-powered"],
        cons: ["Premium pricing", "Complex setup", "Requires training"],
        pricing: "₹4,150 per user annually",
        pricingModel: "Per user, annual",
        officialWebsite: "https://www.forcepoint.com/",
        setupTime: "4+ weeks",
        recommendedTimeline: "Within 4+ weeks",
        requiredResources: "Dedicated security team",
        organizationSize: "Large enterprises",
        effortHours: "160+",
        priority: "High",
        estimatedCostRange: "₹4,150/user/year",
        icon: Lock
      }
    ],
    subQuestion: {
      id: "data-type",
      text: "What types of sensitive data does your organization handle?",
      options: ["Personal Information", "Financial Data", "Intellectual Property", "Healthcare Data", "Other"],
      defaultValue: "Personal Information",
      recommendations: []
    }
  },
  {
    id: 6,
    category: "PII Redaction",
    text: "Is there Personally Identifiable Information (PII) redaction technology in place?",
    description: "PII redaction technology helps protect sensitive personal information in documents.",
    helpText: "This includes automated redaction of sensitive information from documents.",
    icon: FileText,
    recommendations: [
      {
        id: "pdfredact",
        tier: "standard",
        name: "PdfRedactTools",
        shortDescription: "Open-source PDF redaction tool",
        description: "PdfRedactTools is a free tool for redacting sensitive information from PDF documents.",
        pros: ["Free to use", "Open source", "Basic functionality", "Community support"],
        cons: ["Manual processing", "Limited features", "Basic interface"],
        pricing: "₹0 (Free)",
        pricingModel: "Free",
        officialWebsite: "https://github.com/pdf-redaction-tools",
        setupTime: "4+ weeks",
        recommendedTimeline: "Within 4+ weeks",
        requiredResources: "Document processing team",
        organizationSize: "All sizes",
        effortHours: "160+",
        priority: "Medium",
        estimatedCostRange: "₹0 (Free)",
        icon: FileText
      },
      {
        id: "vera",
        tier: "standard",
        name: "Vera Redaction",
        shortDescription: "Cloud-based redaction tool",
        description: "Vera provides automated redaction capabilities for sensitive information.",
        pros: ["Cloud-based", "Easy to use", "Good support", "Scalable"],
        cons: ["Monthly subscription", "Internet dependent", "Limited customization"],
        pricing: "₹830 per user/month",
        pricingModel: "Per user, monthly",
        officialWebsite: "https://www.vera.com/",
        setupTime: "2-3 weeks",
        recommendedTimeline: "Within 2-3 weeks",
        requiredResources: "Document processing team",
        organizationSize: "Small to medium organizations",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹830/user/month",
        icon: FileText
      },
      {
        id: "ibm-watson",
        tier: "premium",
        name: "IBM Watson Discovery",
        shortDescription: "AI-powered redaction solution",
        description: "IBM Watson provides advanced redaction capabilities with AI technology.",
        pros: ["AI-powered", "Advanced features", "24/7 support", "High accuracy"],
        cons: ["High cost", "Complex setup", "Requires training"],
        pricing: "₹41,500 per month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://www.ibm.com/",
        setupTime: "3-4 weeks",
        recommendedTimeline: "Within 3-4 weeks",
        requiredResources: "AI/ML team",
        organizationSize: "Large enterprises",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹41,500/month",
        icon: FileText
      }
    ],
    subQuestion: {
      id: "document-volume",
      text: "What volume of documents containing PII does your organization process?",
      options: ["1-100", "101-500", "501-1000", "1000+"],
      defaultValue: "1-100",
      recommendations: []
    }
  },
  {
    id: 7,
    category: "Security Training",
    text: "Is there annual or quarterly security awareness training for employees?",
    description: "Security awareness training helps employees understand and prevent security risks.",
    helpText: "This includes regular training on security best practices and threat awareness.",
    icon: Users,
    recommendations: [
      {
        id: "staysafeonline",
        tier: "standard",
        name: "StaySafeOnline",
        shortDescription: "Free security awareness resources",
        description: "StaySafeOnline provides free security awareness training materials.",
        pros: ["Free to use", "Comprehensive materials", "Regular updates", "Community support"],
        cons: ["Manual delivery", "Limited tracking", "Basic content"],
        pricing: "₹0 (Free)",
        pricingModel: "Free",
        officialWebsite: "https://staysafeonline.org/",
        setupTime: "2-3 weeks",
        recommendedTimeline: "Within 2-3 weeks",
        requiredResources: "Training team",
        organizationSize: "All sizes",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹0 (Free)",
        icon: Users
      },
      {
        id: "knowbe4",
        tier: "standard",
        name: "KnowBe4 Security Awareness Training",
        shortDescription: "Cloud-based security training",
        description: "KnowBe4 provides comprehensive security awareness training platform.",
        pros: ["Cloud-based", "Automated delivery", "Good tracking", "Regular updates"],
        cons: ["Monthly subscription", "Internet dependent", "Limited customization"],
        pricing: "₹830 per user annually",
        pricingModel: "Per user, annual",
        officialWebsite: "https://www.knowbe4.com/",
        setupTime: "1-2 weeks",
        recommendedTimeline: "Within 1-2 weeks",
        requiredResources: "Training team",
        organizationSize: "Small to medium organizations",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹830/user/year",
        icon: Users
      },
      {
        id: "sans",
        tier: "premium",
        name: "SANS Security Awareness Training",
        shortDescription: "Enterprise security training",
        description: "SANS provides comprehensive security awareness training for enterprises.",
        pros: ["Enterprise-grade", "Advanced content", "24/7 support", "Customizable"],
        cons: ["High cost", "Complex setup", "Requires training"],
        pricing: "₹4,150 per user annually",
        pricingModel: "Per user, annual",
        officialWebsite: "https://www.sans.org/",
        setupTime: "2-3 weeks",
        recommendedTimeline: "Within 2-3 weeks",
        requiredResources: "Training team",
        organizationSize: "Large enterprises",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹4,150/user/year",
        icon: Users
      }
    ],
    subQuestion: {
      id: "employee-count",
      text: "How many employees require security awareness training?",
      options: ["1-50", "51-200", "201-500", "500+"],
      defaultValue: "1-50",
      recommendations: []
    }
  },
  {
    id: 8,
    category: "Remote Access",
    text: "Is VPN technology or Zero Trust architecture in place?",
    description: "Secure remote access solutions protect organizational resources from unauthorized access.",
    helpText: "This includes VPN or Zero Trust solutions for secure remote access.",
    icon: Network,
    recommendations: [
      {
        id: "openvpn",
        tier: "standard",
        name: "OpenVPN",
        shortDescription: "Open-source VPN solution",
        description: "OpenVPN is a free, open-source VPN solution.",
        pros: ["Free to use", "Open source", "Highly secure", "Cross-platform"],
        cons: ["Complex setup", "Requires expertise", "Limited support"],
        pricing: "₹0 (Free)",
        pricingModel: "Free",
        officialWebsite: "https://openvpn.net/",
        setupTime: "2-3 weeks",
        recommendedTimeline: "Within 2-3 weeks",
        requiredResources: "Network administrator",
        organizationSize: "All sizes",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹0 (Free)",
        icon: Network
      },
      {
        id: "nordlayer",
        tier: "standard",
        name: "NordLayer",
        shortDescription: "Cloud-based VPN solution",
        description: "NordLayer provides secure remote access with advanced features.",
        pros: ["Cloud-based", "Easy to use", "Good support", "Scalable"],
        cons: ["Monthly subscription", "Internet dependent", "Limited customization"],
        pricing: "₹581 per user/month",
        pricingModel: "Per user, monthly",
        officialWebsite: "https://nordlayer.com/",
        setupTime: "3-4 weeks",
        recommendedTimeline: "Within 3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium organizations",
        effortHours: "120-160",
        priority: "Medium",
        estimatedCostRange: "₹581/user/month",
        icon: Network
      },
      {
        id: "zscaler",
        tier: "premium",
        name: "Zscaler Zero Trust Exchange",
        shortDescription: "Zero Trust security platform",
        description: "Zscaler provides comprehensive Zero Trust security with advanced features.",
        pros: ["Zero Trust", "Advanced security", "24/7 support", "Cloud-native"],
        cons: ["High cost", "Complex setup", "Requires training"],
        pricing: "Custom pricing",
        pricingModel: "Custom",
        officialWebsite: "https://www.zscaler.com/",
        setupTime: "4-5 weeks",
        recommendedTimeline: "Within 4-5 weeks",
        requiredResources: "Security team",
        organizationSize: "Large enterprises",
        effortHours: "160-200",
        priority: "High",
        estimatedCostRange: "Custom pricing",
        icon: Network
      }
    ],
    subQuestion: {
      id: "remote-users",
      text: "How many remote users require secure access?",
      options: ["1-50", "51-200", "201-500", "500+"],
      defaultValue: "1-50",
      recommendations: []
    }
  },
  {
    id: 9,
    category: "Physical Access",
    text: "Is there FaceID or fingerprint ID physical access control to the premises?",
    description: "Biometric access control provides secure physical access to premises.",
    helpText: "This includes biometric authentication for physical access.",
    icon: Lock,
    recommendations: [
      {
        id: "zkteco",
        tier: "standard",
        name: "ZKTeco Biometric Access Control",
        shortDescription: "Standard biometric access control",
        description: "ZKTeco provides reliable biometric access control solutions.",
        pros: ["Cost-effective", "Easy to use", "Good support", "Reliable"],
        cons: ["Limited features", "Basic security", "Manual management"],
        pricing: "₹41,500 per entry point",
        pricingModel: "Per entry point",
        officialWebsite: "https://www.zkteco.in/",
        setupTime: "2-3 weeks",
        recommendedTimeline: "Within 2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to medium organizations",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹41,500/entry point",
        icon: Lock
      },
      {
        id: "hid-global",
        tier: "premium",
        name: "HID Global Biometric Access Control",
        shortDescription: "Advanced biometric access control",
        description: "HID Global provides advanced biometric access control solutions.",
        pros: ["Advanced features", "High security", "24/7 support", "Enterprise-grade"],
        cons: ["High cost", "Complex setup", "Requires training"],
        pricing: "₹83,000 - ₹166,000 per entry point",
        pricingModel: "Per entry point",
        officialWebsite: "https://www.hidglobal.com/",
        setupTime: "3-4 weeks",
        recommendedTimeline: "Within 3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Large enterprises",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹83,000 - ₹166,000/entry point",
        icon: Lock
      }
    ],
    subQuestion: {
      id: "entry-points",
      text: "How many entry points require biometric access control?",
      options: ["1-5", "6-10", "11-20", "20+"],
      defaultValue: "1-5",
      recommendations: []
    }
  },
  {
    id: 10,
    category: "Video Surveillance",
    text: "Is there CCTV camera monitoring in place for the office premises?",
    description: "CCTV monitoring helps maintain physical security and surveillance.",
    helpText: "This includes video surveillance systems for premises security.",
    icon: Bell,
    recommendations: [
      {
        id: "hikvision",
        tier: "standard",
        name: "Hikvision DVR Kits",
        shortDescription: "Standard CCTV system",
        description: "Hikvision provides reliable CCTV camera systems.",
        pros: ["Cost-effective", "Easy to use", "Good support", "Reliable"],
        cons: ["Limited features", "Basic security", "Manual management"],
        pricing: "₹24,900 - ₹83,000 for 4-8 camera setup",
        pricingModel: "One-time purchase",
        officialWebsite: "https://www.hikvision.com/",
        setupTime: "1-2 weeks",
        recommendedTimeline: "Within 1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Small to medium organizations",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹24,900 - ₹83,000",
        icon: Bell
      },
      {
        id: "arlo",
        tier: "premium",
        name: "Arlo Pro Wireless Camera Systems",
        shortDescription: "Advanced wireless CCTV system",
        description: "Arlo provides advanced wireless CCTV camera systems.",
        pros: ["Wireless", "Advanced features", "Cloud storage", "Mobile app"],
        cons: ["Higher cost", "Internet dependent", "Monthly subscription"],
        pricing: "₹41,500 for 3-camera system",
        pricingModel: "One-time purchase + subscription",
        officialWebsite: "https://www.arlo.com/",
        setupTime: "1-2 weeks",
        recommendedTimeline: "Within 1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to large organizations",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹41,500",
        icon: Bell
      }
    ],
    subQuestion: {
      id: "camera-areas",
      text: "How many areas or rooms require CCTV monitoring?",
      options: ["1-5", "6-10", "11-20", "20+"],
      defaultValue: "1-5",
      recommendations: []
    }
  },
  {
    id: 11,
    category: "Fire Safety",
    text: "Are there fire extinguishers placed at designated locations within the premises?",
    description: "Fire safety equipment is essential for premises safety.",
    helpText: "This includes fire extinguishers and related safety equipment.",
    icon: AlertTriangle,
    recommendations: [
      {
        id: "abc-extinguishers",
        tier: "standard",
        name: "ABC-rated Fire Extinguishers",
        shortDescription: "Standard fire extinguishers",
        description: "ABC-rated fire extinguishers for general fire safety.",
        pros: ["Cost-effective", "Easy to use", "Good coverage", "Reliable"],
        cons: ["Basic protection", "Manual inspection", "Limited features"],
        pricing: "₹4,150 - ₹8,300 per unit",
        pricingModel: "Per unit",
        officialWebsite: "https://www.fireextinguisher.com/",
        setupTime: "1-2 weeks",
        recommendedTimeline: "Within 1-2 weeks",
        requiredResources: "Safety team",
        organizationSize: "All sizes",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹4,150 - ₹8,300/unit",
        icon: AlertTriangle
      },
      {
        id: "fire-safety-company",
        tier: "premium",
        name: "Professional Fire Safety Assessment",
        shortDescription: "Comprehensive fire safety solution",
        description: "Professional fire safety assessment and installation service.",
        pros: ["Professional assessment", "Comprehensive solution", "Regular maintenance", "Expert support"],
        cons: ["Higher cost", "Scheduled visits", "Contract required"],
        pricing: "Starting at ₹41,500",
        pricingModel: "Custom",
        officialWebsite: "https://www.firesafety.com/",
        setupTime: "1-2 weeks",
        recommendedTimeline: "Within 1-2 weeks",
        requiredResources: "Safety team",
        organizationSize: "Medium to large organizations",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹41,500+",
        icon: AlertTriangle
      }
    ],
    subQuestion: {
      id: "extinguisher-count",
      text: "How many extinguishers are required, based on the size and layout of the premises?",
      options: ["1-5", "6-10", "11-20", "20+"],
      defaultValue: "1-5",
      recommendations: []
    }
  },
  {
    id: 12,
    category: "Cable Protection",
    text: "Are cables carrying power, data, or supporting information services protected from interception, interference, or damage?",
    description: "Cable protection ensures secure and reliable data transmission.",
    helpText: "This includes physical protection of cables and infrastructure.",
    icon: Network,
    recommendations: [
      {
        id: "protective-conduits",
        tier: "standard",
        name: "Protective Conduits and Shielding",
        shortDescription: "Standard cable protection",
        description: "Basic cable protection using conduits and shielding.",
        pros: ["Cost-effective", "Easy to install", "Good protection", "Reliable"],
        cons: ["Basic security", "Manual installation", "Limited features"],
        pricing: "₹166 - ₹415 per meter",
        pricingModel: "Per meter",
        officialWebsite: "https://www.cableprotection.com/",
        setupTime: "2-3 weeks",
        recommendedTimeline: "Within 2-3 weeks",
        requiredResources: "IT team",
        organizationSize: "All sizes",
        effortHours: "80-120",
        priority: "Medium",
        estimatedCostRange: "₹166 - ₹415/meter",
        icon: Network
      },
      {
        id: "professional-cabling",
        tier: "premium",
        name: "Professional Cabling Service",
        shortDescription: "Professional cable installation",
        description: "Professional cabling service with comprehensive protection.",
        pros: ["Professional installation", "Comprehensive protection", "Warranty", "Expert support"],
        cons: ["Higher cost", "Scheduled work", "Contract required"],
        pricing: "Starting at ₹41,500",
        pricingModel: "Custom",
        officialWebsite: "https://www.professionalcabling.com/",
        setupTime: "4-5 weeks",
        recommendedTimeline: "Within 4-5 weeks",
        requiredResources: "Professional installers",
        organizationSize: "Medium to large organizations",
        effortHours: "160-200",
        priority: "High",
        estimatedCostRange: "₹41,500+",
        icon: Network
      }
    ],
    subQuestion: {
      id: "cable-length",
      text: "How many meters of cabling need protection or reinstallation?",
      options: ["1-100", "101-500", "501-1000", "1000+"],
      defaultValue: "1-100",
      recommendations: []
    }
  },
  {
    id: 13,
    category: "Endpoint Protection",
    text: "Do you have endpoint protection (e.g., antivirus, device encryption) implemented?",
    description: "Endpoint protection secures devices and data from threats.",
    helpText: "This includes antivirus and device encryption solutions.",
    icon: Shield,
    recommendations: [
      {
        id: "norton",
        tier: "standard",
        name: "Norton Endpoint Security",
        shortDescription: "Standard endpoint protection",
        description: "Norton provides reliable endpoint security solutions.",
        pros: ["Cost-effective", "Easy to use", "Good protection", "Regular updates"],
        cons: ["Basic features", "Limited customization", "Resource intensive"],
        pricing: "₹2,490 per device annually",
        pricingModel: "Per device, annual",
        officialWebsite: "https://www.norton.com/",
        setupTime: "1-2 weeks",
        recommendedTimeline: "Within 1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium organizations",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹2,490/device/year",
        icon: Shield
      },
      {
        id: "crowdstrike",
        tier: "premium",
        name: "CrowdStrike Falcon",
        shortDescription: "Advanced endpoint protection",
        description: "CrowdStrike provides advanced endpoint protection with AI capabilities.",
        pros: ["AI-powered", "Advanced features", "24/7 support", "Cloud-based"],
        cons: ["Higher cost", "Complex setup", "Requires training"],
        pricing: "₹4,990 per device annually",
        pricingModel: "Per device, annual",
        officialWebsite: "https://www.crowdstrike.com/",
        setupTime: "2-3 weeks",
        recommendedTimeline: "Within 2-3 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to large organizations",
        effortHours: "80-120",
        priority: "High",
        estimatedCostRange: "₹4,990/device/year",
        icon: Shield
      }
    ],
    subQuestion: {
      id: "device-count",
      text: "How many devices require endpoint protection?",
      options: ["1-50", "51-200", "201-500", "500+"],
      defaultValue: "1-50",
      recommendations: []
    }
  },
  {
    id: 14,
    category: "Privileged Access",
    text: "Are privileged access rights restricted and monitored?",
    description: "Privileged access management controls and monitors administrative access.",
    helpText: "This includes monitoring and restricting administrative privileges.",
    icon: Key,
    recommendations: [
      {
        id: "manageengine",
        tier: "standard",
        name: "ManageEngine PAM",
        shortDescription: "Standard privileged access management",
        description: "ManageEngine provides basic privileged access management capabilities.",
        pros: ["Cost-effective", "Easy to use", "Good features", "Regular updates"],
        cons: ["Basic security", "Limited customization", "Resource intensive"],
        pricing: "₹83,000 annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.manageengine.com/",
        setupTime: "3-4 weeks",
        recommendedTimeline: "Within 3-4 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium organizations",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹83,000/year",
        icon: Key
      },
      {
        id: "cyberark",
        tier: "premium",
        name: "CyberArk PAM",
        shortDescription: "Advanced privileged access management",
        description: "CyberArk provides comprehensive privileged access management.",
        pros: ["Advanced security", "Comprehensive features", "24/7 support", "Enterprise-grade"],
        cons: ["High cost", "Complex setup", "Requires training"],
        pricing: "Custom pricing, starting at ₹415,000 annually",
        pricingModel: "Custom",
        officialWebsite: "https://www.cyberark.com/",
        setupTime: "4-5 weeks",
        recommendedTimeline: "Within 4-5 weeks",
        requiredResources: "Security team",
        organizationSize: "Large enterprises",
        effortHours: "160-200",
        priority: "High",
        estimatedCostRange: "₹415,000+/year",
        icon: Key
      }
    ],
    subQuestion: {
      id: "user-monitoring",
      text: "How many users or accounts need to be monitored and restricted?",
      options: ["1-50", "51-200", "201-500", "500+"],
      defaultValue: "1-50",
      recommendations: []
    }
  },
  {
    id: 15,
    category: "Access Control",
    text: "Is access to information and assets restricted as per access control policies?",
    description: "Access control policies ensure proper authorization and access management.",
    helpText: "This includes implementing and enforcing access control policies.",
    icon: Lock,
    recommendations: [
      {
        id: "group-policy",
        tier: "standard",
        name: "Microsoft Group Policy",
        shortDescription: "Standard access control",
        description: "Microsoft Group Policy for basic access control management.",
        pros: ["Included with Windows", "Easy to use", "Good features", "Regular updates"],
        cons: ["Windows-only", "Limited customization", "Basic security"],
        pricing: "Included with Windows Server",
        pricingModel: "Included",
        officialWebsite: "https://www.microsoft.com/",
        setupTime: "1-2 weeks",
        recommendedTimeline: "Within 1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium organizations",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "Included with Windows Server",
        icon: Lock
      },
      {
        id: "okta-access",
        tier: "premium",
        name: "Okta Access Management",
        shortDescription: "Advanced access management",
        description: "Okta provides comprehensive access management capabilities.",
        pros: ["Advanced features", "Cloud-based", "24/7 support", "Enterprise-grade"],
        cons: ["Higher cost", "Complex setup", "Requires training"],
        pricing: "₹166 per user/month",
        pricingModel: "Per user, monthly",
        officialWebsite: "https://www.okta.com/",
        setupTime: "1-2 weeks",
        recommendedTimeline: "Within 1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to large organizations",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹166/user/month",
        icon: Lock
      }
    ],
    subQuestion: {
      id: "asset-type",
      text: "What type of assets require access control (e.g., files, servers, applications)?",
      options: ["Files", "Servers", "Applications", "All of the above"],
      defaultValue: "Files",
      recommendations: []
    }
  },
  {
    id: 16,
    category: "Source Code Security",
    text: "Is access to source code, development tools, and software libraries managed securely?",
    description: "Secure source code management protects intellectual property and ensures code integrity.",
    helpText: "This includes secure management of development resources.",
    icon: FileCode,
    recommendations: [
      {
        id: "github-enterprise",
        tier: "standard",
        name: "GitHub Enterprise",
        shortDescription: "Standard source code management",
        description: "GitHub Enterprise provides secure source code management.",
        pros: ["Industry standard", "Good features", "Regular updates", "Community support"],
        cons: ["Monthly subscription", "Internet dependent", "Limited customization"],
        pricing: "₹1,745 per user/month",
        pricingModel: "Per user, monthly",
        officialWebsite: "https://github.com/",
        setupTime: "1-2 weeks",
        recommendedTimeline: "Within 1-2 weeks",
        requiredResources: "Development team",
        organizationSize: "Small to medium organizations",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹1,745/user/month",
        icon: FileCode
      },
      {
        id: "snyk",
        tier: "premium",
        name: "Snyk",
        shortDescription: "Advanced code security",
        description: "Snyk provides advanced dependency and code security features.",
        pros: ["Advanced security", "Dependency scanning", "24/7 support", "Enterprise-grade"],
        cons: ["Higher cost", "Complex setup", "Requires training"],
        pricing: "₹4,150 per developer/month",
        pricingModel: "Per developer, monthly",
        officialWebsite: "https://snyk.io/",
        setupTime: "3-4 weeks",
        recommendedTimeline: "Within 3-4 weeks",
        requiredResources: "Development team",
        organizationSize: "Medium to large organizations",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹4,150/developer/month",
        icon: FileCode
      }
    ],
    subQuestion: {
      id: "dev-tools",
      text: "What tools or libraries are currently in use?",
      options: ["Git", "SVN", "Mercurial", "Other"],
      defaultValue: "Git",
      recommendations: []
    }
  },
  {
    id: 17,
    category: "Authentication",
    text: "Do you use secure authentication technologies, such as MFA?",
    description: "Multi-factor authentication enhances security by requiring multiple verification methods.",
    helpText: "This includes implementing MFA for secure authentication.",
    icon: Key,
    recommendations: [
      {
        id: "google-auth",
        tier: "standard",
        name: "Google Authenticator",
        shortDescription: "Standard MFA solution",
        description: "Google Authenticator provides basic MFA capabilities.",
        pros: ["Free to use", "Easy to use", "Good support", "Regular updates"],
        cons: ["Basic features", "Limited customization", "Manual setup"],
        pricing: "₹0 (Free)",
        pricingModel: "Free",
        officialWebsite: "https://support.google.com/accounts/answer/1066447",
        setupTime: "1-2 weeks",
        recommendedTimeline: "Within 1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "All sizes",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹0 (Free)",
        icon: Key
      },
      {
        id: "duo",
        tier: "premium",
        name: "Duo Security MFA",
        shortDescription: "Advanced MFA solution",
        description: "Duo Security provides comprehensive MFA capabilities.",
        pros: ["Advanced features", "Cloud-based", "24/7 support", "Enterprise-grade"],
        cons: ["Higher cost", "Complex setup", "Requires training"],
        pricing: "₹249 per user/month",
        pricingModel: "Per user, monthly",
        officialWebsite: "https://duo.com/",
        setupTime: "1-2 weeks",
        recommendedTimeline: "Within 1-2 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to large organizations",
        effortHours: "40-80",
        priority: "High",
        estimatedCostRange: "₹249/user/month",
        icon: Key
      }
    ],
    subQuestion: {
      id: "mfa-users",
      text: "How many users need MFA solutions?",
      options: ["1-50", "51-200", "201-500", "500+"],
      defaultValue: "1-50",
      recommendations: []
    }
  },
  {
    id: 18,
    category: "Resource Monitoring",
    text: "Do you have resource monitoring and malware protection in place?",
    description: "Resource monitoring and malware protection ensure system security and performance.",
    helpText: "This includes monitoring system resources and protecting against malware.",
    icon: Server,
    recommendations: [
      {
        id: "solarwinds",
        tier: "standard",
        name: "SolarWinds Network Performance Monitor",
        shortDescription: "Standard resource monitoring",
        description: "SolarWinds provides basic resource monitoring capabilities.",
        pros: ["Cost-effective", "Easy to use", "Good features", "Regular updates"],
        cons: ["Basic monitoring", "Limited customization", "Resource intensive"],
        pricing: "₹124,500 annually",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.solarwinds.com/",
        setupTime: "1-2 weeks",
        recommendedTimeline: "Within 1-2 weeks",
        requiredResources: "IT team",
        organizationSize: "Small to medium organizations",
        effortHours: "40-80",
        priority: "Medium",
        estimatedCostRange: "₹124,500/year",
        icon: Server
      },
      {
        id: "crowdstrike-monitoring",
        tier: "premium",
        name: "CrowdStrike Falcon",
        shortDescription: "Advanced malware protection",
        description: "CrowdStrike provides comprehensive malware protection and monitoring.",
        pros: ["Advanced security", "AI-powered", "24/7 support", "Enterprise-grade"],
        cons: ["Higher cost", "Complex setup", "Requires training"],
        pricing: "₹4,990 per device annually",
        pricingModel: "Per device, annual",
        officialWebsite: "https://www.crowdstrike.com/",
        setupTime: "3-4 weeks",
        recommendedTimeline: "Within 3-4 weeks",
        requiredResources: "Security team",
        organizationSize: "Medium to large organizations",
        effortHours: "120-160",
        priority: "High",
        estimatedCostRange: "₹4,990/device/year",
        icon: Server
      }
    ],
    subQuestion: {
      id: "monitoring-resources",
      text: "Which resources or endpoints require monitoring?",
      options: ["Servers", "Workstations", "Network Devices", "All of the above"],
      defaultValue: "Servers",
      recommendations: []
    }
  }
] 