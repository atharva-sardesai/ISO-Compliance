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
  TypeIcon as type,
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

export const questionsData: Question[] = [
  {
    id: 1,
    category: "Antivirus Protection",
    text: "Does your organization have enterprise antivirus software deployed across all systems?",
    description: "Enterprise-grade antivirus solutions provide centralized management and advanced threat protection.",
    helpText: "This includes servers, workstations, and mobile devices used for business purposes.",
    icon: Shield,
    recommendations: [
      {
        id: "clamav",
        tier: "standard",
        name: "ClamAV",
        shortDescription: "Open-source antivirus solution",
        description: "ClamAV is a robust open-source antivirus engine that provides basic protection against malware and viruses.",
        pros: [
          "Free and open-source",
          "Cross-platform support",
          "Regular virus database updates",
          "Community-driven development"
        ],
        cons: [
          "Basic protection features",
          "Requires technical expertise",
          "Limited management capabilities",
          "No centralized management"
        ],
        pricing: "₹0 (Free)",
        pricingModel: "Open-source",
        officialWebsite: "https://www.clamav.net/",
        setupTime: "4-8 hours with IT support",
        recommendedTimeline: "Within 1 week",
        requiredResources: "IT administrator with Linux experience",
        organizationSize: "Small to medium organizations",
        effortHours: "4–8",
        priority: "Medium",
        estimatedCostRange: "₹0 (Free)",
        icon: Shield,
        calculateEffort: (endpoints: number | string) => {
          const numEndpoints = typeof endpoints === 'string' ? parseInt(endpoints) : endpoints
          const baseEffort = 4
          const additionalEffort = Math.ceil(numEndpoints * 0.2)
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 4}`
        },
        calculateTimeline: (endpoints: number | string) => {
          const numEndpoints = typeof endpoints === 'string' ? parseInt(endpoints) : endpoints
          const days = Math.max(2, Math.ceil(numEndpoints / 50) + 1)
          return `Within ${days} days`
        },
        calculateCost: (endpoints: number | string) => {
          return "₹0 (Free)"
        }
      },
      {
        id: "microsoft-defender",
        tier: "standard",
        name: "Microsoft Defender for Business",
        shortDescription: "Integrated security for Microsoft environments",
        description: "Microsoft Defender for Business provides enterprise-grade endpoint security designed specifically for small and medium-sized businesses with up to 300 employees.",
        pros: [
          "Seamless integration with Microsoft 365",
          "Automated threat remediation",
          "No additional infrastructure required",
          "Simplified management"
        ],
        cons: [
          "Best suited for Microsoft-centric environments",
          "Limited customization options",
          "May require Microsoft 365 Business Premium"
        ],
        pricing: "₹262-437 per user/month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://www.microsoft.com/en-us/security/business/endpoint-security/microsoft-defender-business",
        pricingPage: "https://www.microsoft.com/en-us/security/business/endpoint-security/microsoft-defender-business#pricing",
        setupTime: "2-4 hours with IT support",
        recommendedTimeline: "Within 1 week",
        requiredResources: "IT administrator with Microsoft experience",
        organizationSize: "Small to medium businesses (10-300 employees)",
        effortHours: "2–4",
        priority: "High",
        estimatedCostRange: "₹1,57,446–2,62,410/year",
        icon: Shield,
        calculateEffort: (endpoints: number | string) => {
          const numEndpoints = typeof endpoints === 'string' ? parseInt(endpoints) : endpoints
          const baseEffort = 2
          const additionalEffort = Math.ceil(numEndpoints * 0.05)
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 2}`
        },
        calculateTimeline: (endpoints: number | string) => {
          const numEndpoints = typeof endpoints === 'string' ? parseInt(endpoints) : endpoints
          const days = Math.max(1, Math.ceil(numEndpoints / 100) + 1)
          return `Within ${days} days`
        },
        calculateCost: (endpoints: number | string) => {
          const numEndpoints = typeof endpoints === 'string' ? parseInt(endpoints) : endpoints
          const minCost = numEndpoints * 262 * 12
          const maxCost = numEndpoints * 437 * 12
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
        }
      }
    ],
    subQuestion: {
      id: "antivirus-endpoints",
      text: "How many endpoints (devices) need antivirus installation?",
      options: ["Enter number of devices"],
      defaultValue: 50,
      min: 1,
      recommendations: [
        {
          id: "symantec-endpoint",
          tier: "standard",
          name: "Symantec Endpoint Protection",
          shortDescription: "Comprehensive endpoint security solution",
          description: "Symantec Endpoint Protection provides comprehensive threat protection for your organization's devices with centralized management and advanced threat intelligence.",
          pros: [
            "Centralized management console",
            "Advanced threat intelligence",
            "Endpoint detection and response",
            "Cloud integration capabilities",
          ],
          cons: [
            "Higher resource usage on endpoints",
            "Complex initial setup",
            "Requires dedicated IT staff for management",
          ],
          pricing: "₹3,936-5,248 per endpoint/year",
          pricingModel: "Annual subscription",
          officialWebsite: "https://www.broadcom.com/products/cyber-security/endpoint/end-user/protection-suite",
          pricingPage: "https://www.broadcom.com/products/cyber-security/endpoint/end-user/protection-suite#pricing",
          setupTime: "4-8 hours with IT support",
          recommendedTimeline: "Within 2 weeks",
          requiredResources: "IT security team involvement",
          organizationSize: "Medium to large organizations (50+ employees)",
          effortHours: "4–8",
          priority: "High",
          estimatedCostRange: "₹1,96,808–2,62,410/year",
          icon: Shield,
          calculateEffort: (endpoints: number | string) => {
            const numEndpoints = typeof endpoints === 'string' ? parseInt(endpoints) : endpoints
            const baseEffort = 4
            const additionalEffort = Math.ceil(numEndpoints * 0.1)
            const totalEffort = baseEffort + additionalEffort
            return `${totalEffort}–${totalEffort + 4}`
          },
          calculateTimeline: (endpoints: number | string) => {
            const numEndpoints = typeof endpoints === 'string' ? parseInt(endpoints) : endpoints
            const days = Math.max(2, Math.ceil(numEndpoints / 100) + 1)
            return `Within ${days} days`
          },
          calculateCost: (endpoints: number | string) => {
            const numEndpoints = typeof endpoints === 'string' ? parseInt(endpoints) : endpoints
            const minCost = numEndpoints * 3936
            const maxCost = numEndpoints * 5248
            return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
          },
        },
        {
          id: "microsoft-defender",
          tier: "standard",
          name: "Microsoft Defender for Business",
          shortDescription: "Integrated security for Microsoft environments",
          description:
            "Microsoft Defender for Business provides enterprise-grade endpoint security designed specifically for small and medium-sized businesses with up to 300 employees.",
          pros: [
            "Seamless integration with Microsoft 365",
            "Automated threat remediation",
            "No additional infrastructure required",
            "Simplified management",
          ],
          cons: [
            "Best suited for Microsoft-centric environments",
            "Limited customization options",
            "May require Microsoft 365 Business Premium",
          ],
          pricing: "₹262-437 per user/month",
          pricingModel: "Monthly subscription",
          officialWebsite:
            "https://www.microsoft.com/en-us/security/business/endpoint-security/microsoft-defender-business",
          pricingPage:
            "https://www.microsoft.com/en-us/security/business/endpoint-security/microsoft-defender-business#pricing",
          setupTime: "2-4 hours with IT support",
          recommendedTimeline: "Within 1 week",
          requiredResources: "IT administrator with Microsoft experience",
          organizationSize: "Small to medium businesses (10-300 employees)",
          effortHours: "2–4",
          priority: "High",
          estimatedCostRange: "₹1,57,446–2,62,410/year",
          icon: Shield,
          calculateEffort: (endpoints: number | string) => {
            const numEndpoints = typeof endpoints === 'string' ? parseInt(endpoints) : endpoints
            const baseEffort = 4
            const additionalEffort = Math.ceil(numEndpoints * 0.1)
            const totalEffort = baseEffort + additionalEffort
            return `${totalEffort}–${totalEffort + 4}`
          },
          calculateTimeline: (endpoints: number | string) => {
            const numEndpoints = typeof endpoints === 'string' ? parseInt(endpoints) : endpoints
            const days = Math.max(2, Math.ceil(numEndpoints / 100) + 1)
            return `Within ${days} days`
          },
          calculateCost: (endpoints: number | string) => {
            const numEndpoints = typeof endpoints === 'string' ? parseInt(endpoints) : endpoints
            const minCost = numEndpoints * 262 * 12
            const maxCost = numEndpoints * 437 * 12
            return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
          },
        },
        {
          id: "crowdstrike-falcon",
          tier: "premium",
          name: "CrowdStrike Falcon",
          shortDescription: "Next-generation endpoint protection",
          description:
            "CrowdStrike Falcon is a cloud-native endpoint protection platform that combines next-gen antivirus, endpoint detection and response, and 24/7 threat hunting.",
          pros: [
            "Industry-leading threat detection",
            "Low performance impact",
            "Real-time visibility and response",
            "Integrated threat intelligence",
          ],
          cons: [
            "Premium pricing",
            "Advanced features require technical expertise",
            "May require professional services for optimal setup",
          ],
          pricing: "₹699-1,049 per endpoint/month",
          pricingModel: "Annual contract",
          officialWebsite: "https://www.crowdstrike.com/products/endpoint-security/",
          pricingPage: "https://www.crowdstrike.com/products/endpoint-security/falcon-pricing/",
          setupTime: "1-2 days with security team",
          recommendedTimeline: "Within 1 month",
          requiredResources: "Dedicated security team involvement",
          organizationSize: "Medium to enterprise organizations (100+ employees)",
          effortHours: "8–16",
          priority: "High",
          estimatedCostRange: "₹4,19,856–6,29,784/year",
          icon: Shield,
          calculateEffort: (endpoints: number | string) => {
            const numEndpoints = typeof endpoints === 'string' ? parseInt(endpoints) : endpoints
            const baseEffort = 4
            const additionalEffort = Math.ceil(numEndpoints * 0.1)
            const totalEffort = baseEffort + additionalEffort
            return `${totalEffort}–${totalEffort + 4}`
          },
          calculateTimeline: (endpoints: number | string) => {
            const numEndpoints = typeof endpoints === 'string' ? parseInt(endpoints) : endpoints
            const days = Math.max(2, Math.ceil(numEndpoints / 100) + 1)
            return `Within ${days} days`
          },
          calculateCost: (endpoints: number | string) => {
            const numEndpoints = typeof endpoints === 'string' ? parseInt(endpoints) : endpoints
            const minCost = numEndpoints * 699 * 12
            const maxCost = numEndpoints * 1049 * 12
            return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
          },
        },
      ],
    },
  },
  {
    id: 2,
    category: "Network Protection",
    text: "Does your organization have a firewall protecting your network?",
    description: "Firewalls are essential for controlling network traffic and protecting against unauthorized access.",
    helpText: "This includes hardware firewalls, cloud-based firewalls, and proper configuration of firewall rules.",
    icon: Network,
    subQuestion: {
      id: "firewall-networks",
      text: "How many networks or subnets need protection?",
      placeholder: "Enter number of networks",
      unit: "networks",
      defaultValue: 1,
      min: 1,
      options: ["Enter number of networks"],
      recommendations: []
    },
    recommendations: [
      {
        id: "fortinet-fortigate",
        tier: "standard",
        name: "Fortinet FortiGate",
        shortDescription: "Next-generation firewall solution",
        description:
          "Fortinet FortiGate provides comprehensive network security with advanced threat protection, VPN capabilities, and centralized management.",
        pros: [
          "Integrated security features",
          "High performance",
          "Scalable for growing networks",
          "Centralized management",
        ],
        cons: ["Complex configuration", "Requires technical expertise", "Subscription costs for advanced features"],
        pricing: "₹1,31,205-4,37,350 for hardware + ₹43,735-1,74,940/year for services",
        pricingModel: "Hardware purchase + annual subscription",
        officialWebsite: "https://www.fortinet.com/products/next-generation-firewall",
        pricingPage: "https://www.fortinet.com/products/next-generation-firewall/fortigate-pricing",
        setupTime: "1-3 days with network team",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "Network administrator with security experience",
        organizationSize: "Small to large organizations (25+ employees)",
        effortHours: "16–24",
        priority: "High",
        estimatedCostRange: "₹1,74,940–6,12,290 first year",
        icon: Network,
        calculateEffort: (networks: number | string) => {
          const numNetworks = typeof networks === 'string' ? parseInt(networks) : networks
          const baseEffort = 8
          const additionalEffort = numNetworks * 8
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 8}`
        },
        calculateTimeline: (networks: number | string) => {
          const numNetworks = typeof networks === 'string' ? parseInt(networks) : networks
          const days = Math.max(2, numNetworks * 2)
          return `Within ${days} days`
        },
        calculateCost: (networks: number | string) => {
          const numNetworks = typeof networks === 'string' ? parseInt(networks) : networks
          const baseHardware = 1500
          const additionalHardware = numNetworks > 1 ? (numNetworks - 1) * 1000 : 0
          const services = 500 * numNetworks
          const minCost = baseHardware + additionalHardware + services
          const maxCost = minCost * 2
          return `$${minCost.toLocaleString()}–${maxCost.toLocaleString()} first year`
        },
      },
      {
        id: "cisco-meraki",
        tier: "standard",
        name: "Cisco Meraki MX",
        shortDescription: "Cloud-managed security appliance",
        description:
          "Cisco Meraki MX provides cloud-managed security with integrated threat protection, content filtering, and SD-WAN capabilities.",
        pros: [
          "Easy cloud management",
          "Auto VPN capabilities",
          "Integrated security features",
          "Regular automatic updates",
        ],
        cons: ["Subscription required", "Limited advanced configuration options", "Higher long-term cost"],
        pricing: "₹65,603–11,37,110 first year",
        pricingModel: "Hardware purchase + annual license",
        officialWebsite: "https://meraki.cisco.com/products/security-sd-wan/",
        pricingPage: "https://meraki.cisco.com/products/security-sd-wan/#models",
        setupTime: "1-2 days with IT support",
        recommendedTimeline: "Within 1 week",
        requiredResources: "IT administrator with networking experience",
        organizationSize: "Small to medium businesses (10-250 employees)",
        effortHours: "8–16",
        priority: "High",
        estimatedCostRange: "$750–13,000 first year",
        icon: Network,
        calculateEffort: (networks: number | string) => {
          const numNetworks = typeof networks === 'string' ? parseInt(networks) : networks
          const baseEffort = 8
          const additionalEffort = numNetworks * 4
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 8}`
        },
        calculateTimeline: (networks: number | string) => {
          const numNetworks = typeof networks === 'string' ? parseInt(networks) : networks
          const days = Math.max(1, numNetworks)
          return `Within ${days} days`
        },
        calculateCost: (networks: number | string) => {
          const numNetworks = typeof networks === 'string' ? parseInt(networks) : networks
          const baseHardware = 600
          const additionalHardware = numNetworks > 1 ? (numNetworks - 1) * 1000 : 0
          const license = 150 * numNetworks
          const minCost = baseHardware + additionalHardware + license
          const maxCost = minCost * 2
          return `$${minCost.toLocaleString()}–${maxCost.toLocaleString()} first year`
        },
      },
      {
        id: "palo-alto-ngfw",
        tier: "premium",
        name: "Palo Alto Networks Next-Generation Firewall",
        shortDescription: "Enterprise-grade security platform",
        description:
          "Palo Alto Networks provides advanced threat prevention, URL filtering, and application visibility with industry-leading security effectiveness.",
        pros: [
          "Advanced threat prevention",
          "Detailed application visibility",
          "Automated policy recommendations",
          "Comprehensive security platform",
        ],
        cons: ["Higher cost", "Complex implementation", "Requires dedicated security resources"],
        pricing: "₹5,24,820–52,48,200 first year",
        pricingModel: "Hardware purchase + annual subscriptions",
        officialWebsite: "https://www.paloaltonetworks.com/network-security/next-generation-firewall",
        pricingPage: "https://www.paloaltonetworks.com/resources/guides/next-generation-firewall-buyers-guide",
        setupTime: "1-3 weeks with security team",
        recommendedTimeline: "Within 1 month",
        requiredResources: "Dedicated security team with NGFW experience",
        organizationSize: "Medium to enterprise organizations (100+ employees)",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "$6,000–60,000 first year",
        icon: Network,
        calculateEffort: (networks: number | string) => {
          const numNetworks = typeof networks === 'string' ? parseInt(networks) : networks
          const baseEffort = 40
          const additionalEffort = numNetworks * 16
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (networks: number | string) => {
          const numNetworks = typeof networks === 'string' ? parseInt(networks) : networks
          const days = Math.max(7, 5 * numNetworks + 2)
          return `Within ${days} days`
        },
        calculateCost: (networks: number | string) => {
          const numNetworks = typeof networks === 'string' ? parseInt(networks) : networks
          const baseHardware = 5000
          const additionalHardware = numNetworks > 1 ? (numNetworks - 1) * 5000 : 0
          const subscriptions = 1000 * numNetworks
          const minCost = baseHardware + additionalHardware + subscriptions
          const maxCost = minCost * 3
          return `$${minCost.toLocaleString()}–${maxCost.toLocaleString()} first year`
        },
      },
    ],
  },
  {
    id: 3,
    category: "Access Control",
    text: "Does your organization implement role-based access control with unique credentials for all employees?",
    description:
      "Role-based access control ensures employees only have access to the resources necessary for their job functions.",
    helpText: "This includes unique login credentials, multi-factor authentication, and proper access management.",
    icon: Lock,
    subQuestion: {
      id: "access-control-users",
      text: "How many users have access to critical systems?",
      placeholder: "Enter number of users",
      unit: "users",
      defaultValue: 25,
      min: 1,
    },
    recommendations: [
      {
        id: "okta-identity",
        tier: "standard",
        name: "Okta Identity Cloud",
        shortDescription: "Cloud-based identity management",
        description:
          "Okta Identity Cloud provides secure, scalable, and reliable identity management for your workforce and customers with single sign-on and multi-factor authentication.",
        pros: [
          "Centralized identity management",
          "Extensive application integrations",
          "Automated user provisioning",
          "Strong multi-factor authentication options",
        ],
        cons: [
          "Implementation complexity for large organizations",
          "Requires ongoing management",
          "Cost increases with additional features",
        ],
        pricing: "₹262-437 per user/month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://www.okta.com/products/",
        pricingPage: "https://www.okta.com/pricing/",
        setupTime: "1-2 weeks with IT support",
        recommendedTimeline: "Within 1 month",
        requiredResources: "IT administrator with identity management experience",
        organizationSize: "Small to large organizations (25+ employees)",
        effortHours: "16–32",
        priority: "High",
        estimatedCostRange: "₹1,57,446–2,62,410/year",
        icon: Lock,
        calculateEffort: (users: number | string) => {
          const numUsers = typeof users === 'string' ? parseInt(users) : users
          const baseEffort = 4
          const additionalEffort = Math.ceil(numUsers * 0.1)
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 4}`
        },
        calculateTimeline: (users: number | string) => {
          const numUsers = typeof users === 'string' ? parseInt(users) : users
          const days = Math.max(2, Math.ceil(numUsers / 100) + 1)
          return `Within ${days} days`
        },
        calculateCost: (users: number | string) => {
          const numUsers = typeof users === 'string' ? parseInt(users) : users
          const minCost = numUsers * 262 * 12
          const maxCost = numUsers * 437 * 12
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
        },
      },
      {
        id: "microsoft-entra",
        tier: "standard",
        name: "Microsoft Entra ID (formerly Azure AD)",
        shortDescription: "Microsoft's cloud identity solution",
        description:
          "Microsoft Entra ID provides secure identity and access management with single sign-on, multi-factor authentication, and conditional access policies.",
        pros: [
          "Deep integration with Microsoft products",
          "Hybrid identity capabilities",
          "Conditional access policies",
          "Self-service password reset",
        ],
        cons: [
          "Advanced features require premium licenses",
          "Best suited for Microsoft environments",
          "Complex configuration for advanced scenarios",
        ],
        pricing: "Free tier available, ₹524-787 per user/month for premium",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id",
        pricingPage: "https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id#pricing",
        setupTime: "3-5 days with IT support",
        recommendedTimeline: "Within 3 weeks",
        requiredResources: "IT administrator with Microsoft experience",
        organizationSize: "Small to large organizations (10+ employees)",
        effortHours: "24–40",
        priority: "High",
        estimatedCostRange: "₹3,14,892–4,72,338/year",
        icon: Lock,
        calculateEffort: (users: number | string) => {
          const numUsers = typeof users === 'string' ? parseInt(users) : users
          const baseEffort = 4
          const additionalEffort = Math.ceil(numUsers * 0.1)
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 4}`
        },
        calculateTimeline: (users: number | string) => {
          const numUsers = typeof users === 'string' ? parseInt(users) : users
          const days = Math.max(2, Math.ceil(numUsers / 100) + 1)
          return `Within ${days} days`
        },
        calculateCost: (users: number | string) => {
          const numUsers = typeof users === 'string' ? parseInt(users) : users
          const minCost = numUsers * 6 * 12
          const maxCost = numUsers * 9 * 12
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
        },
      },
      {
        id: "cyberark-identity",
        tier: "premium",
        name: "CyberArk Identity Security Platform",
        shortDescription: "Comprehensive privileged access management",
        description:
          "CyberArk Identity Security Platform secures human and machine identities with a comprehensive approach to privileged access management.",
        pros: [
          "Industry-leading privileged access management",
          "Secure remote access capabilities",
          "Secrets management",
          "Endpoint privilege management",
        ],
        cons: [
          "Higher implementation complexity",
          "Significant investment required",
          "Requires dedicated security resources",
        ],
        pricing: "Starting at ₹21,86,750/year for small deployments",
        pricingModel: "Annual contract",
        officialWebsite: "https://www.cyberark.com/products/identity-security-platform/",
        pricingPage: "https://www.cyberark.com/request-information/",
        setupTime: "2-4 weeks with security team",
        recommendedTimeline: "Within 2 months",
        requiredResources: "Dedicated security team with PAM experience",
        organizationSize: "Medium to enterprise organizations (100+ employees)",
        effortHours: "80–160",
        priority: "Medium",
        estimatedCostRange: "₹21,86,750–34,98,800/year",
        icon: Lock,
        calculateEffort: (users: number | string) => {
          const numUsers = typeof users === 'string' ? parseInt(users) : users
          const baseEffort = 80
          const additionalEffort = users
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 80}`
        },
        calculateTimeline: (users: number | string) => {
          const numUsers = typeof users === 'string' ? parseInt(users) : users
          const days = Math.max(14, Math.ceil(numUsers / 10) + 13)
          return `Within ${days} days`
        },
        calculateCost: (users: number | string) => {
          const numUsers = typeof users === 'string' ? parseInt(users) : users
          const baseCost = 25000
          const perUserCost = 200
          const minCost = baseCost + numUsers * perUserCost
          const maxCost = minCost * 1.6
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
        },
      },
    ],
  },
  {
    id: 4,
    category: "Data Protection",
    text: "Does your organization have encryption in place for sensitive data?",
    description: "Encryption protects sensitive data from unauthorized access, both at rest and in transit.",
    helpText:
      "This includes disk encryption, database encryption, email encryption, and secure file transfer protocols.",
    icon: Key,
    subQuestion: {
      id: "encryption-data-size",
      text: "What is the approximate size of data to be encrypted (in GB)?",
      placeholder: "Enter data size in GB",
      unit: "GB",
      defaultValue: 500,
      min: 1,
    },
    recommendations: [
      {
        id: "bitlocker-filevault",
        tier: "standard",
        name: "BitLocker (Windows) + FileVault (Mac)",
        shortDescription: "Built-in disk encryption solutions",
        description:
          "Use Microsoft BitLocker for Windows devices and Apple FileVault for Mac devices to provide full-disk encryption for endpoint devices.",
        pros: [
          "Built into operating systems",
          "No additional licensing costs",
          "Centralized management through group policies",
          "Strong encryption algorithms",
        ],
        cons: [
          "Requires Windows Pro/Enterprise or macOS",
          "Limited to disk encryption only",
          "Requires key management solution",
        ],
        pricing: "Included with Windows Pro/Enterprise and macOS",
        pricingModel: "Included with OS licenses",
        officialWebsite:
          "https://docs.microsoft.com/en-us/windows/security/information-protection/bitlocker/bitlocker-overview",
        pricingPage:
          "https://www.microsoft.com/en-us/microsoft-365/business/compare-all-microsoft-365-business-products",
        setupTime: "1-3 days with IT support",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT administrator with endpoint management experience",
        organizationSize: "Organizations of all sizes",
        effortHours: "16–32",
        priority: "High",
        estimatedCostRange: "₹0–1,74,940 for management tools",
        icon: Key,
        calculateEffort: (dataSize: number) => {
          // Base effort + 1 hour per 100GB
          const baseEffort = 16
          const additionalEffort = Math.ceil(dataSize / 100)
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 16}`
        },
        calculateTimeline: (dataSize: number) => {
          // Base timeline + 1 day per 500GB
          const days = Math.max(3, Math.ceil(dataSize / 500) + 2)
          return `Within ${days} days`
        },
        calculateCost: (dataSize: number) => {
          // Mostly free, but management tools might cost
          const managementCost = Math.min(2000, Math.ceil(dataSize / 100) * 200)
          return `₹0–${managementCost.toLocaleString()} for management tools`
        },
      },
      {
        id: "veracrypt",
        tier: "standard",
        name: "VeraCrypt",
        shortDescription: "Open-source disk encryption software",
        description:
          "VeraCrypt is a free, open-source disk encryption software that provides strong security for data at rest across multiple platforms.",
        pros: [
          "Free and open-source",
          "Cross-platform support",
          "Strong encryption algorithms",
          "Container-based encryption options",
        ],
        cons: ["No centralized management", "Manual deployment required", "Limited enterprise support"],
        pricing: "Free",
        pricingModel: "Open-source",
        officialWebsite: "https://www.veracrypt.fr/",
        pricingPage: "https://www.veracrypt.fr/en/Downloads.html",
        setupTime: "2-5 days with IT support",
        recommendedTimeline: "Within 3 weeks",
        requiredResources: "IT administrator with security experience",
        organizationSize: "Small to medium organizations (5-100 employees)",
        effortHours: "24–48",
        priority: "High",
        estimatedCostRange: "₹0 for software, ₹87,470–2,62,410 for implementation",
        icon: Key,
        calculateEffort: (dataSize: number) => {
          // Base effort + 2 hours per 100GB
          const baseEffort = 24
          const additionalEffort = Math.ceil(dataSize / 100) * 2
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 24}`
        },
        calculateTimeline: (dataSize: number) => {
          // Base timeline + 1 day per 200GB
          const days = Math.max(5, Math.ceil(dataSize / 200) + 4)
          return `Within ${days} days`
        },
        calculateCost: (dataSize: number) => {
          // Free software, but implementation costs
          const implementationCost = 1000 + Math.min(2000, Math.ceil(dataSize / 100) * 100)
          return `₹0 for software, ₹${implementationCost.toLocaleString()} for implementation`
        },
      },
      {
        id: "symantec-endpoint-encryption",
        tier: "premium",
        name: "Symantec Endpoint Encryption",
        shortDescription: "Enterprise encryption solution",
        description:
          "Symantec Endpoint Encryption provides comprehensive data protection with full disk, removable media, and file and folder encryption capabilities.",
        pros: [
          "Centralized management console",
          "Policy-based encryption",
          "Detailed reporting and auditing",
          "Integration with other security tools",
        ],
        cons: ["Higher licensing costs", "Complex deployment for large environments", "Requires dedicated management"],
        pricing: "₹2,624-4,374 per endpoint/year",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.broadcom.com/products/cyber-security/endpoint/encryption",
        pricingPage: "https://www.broadcom.com/products/cyber-security/endpoint/encryption#contact",
        setupTime: "2-4 weeks with security team",
        recommendedTimeline: "Within 2 months",
        requiredResources: "Security team with encryption experience",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "40–80",
        priority: "Medium",
        estimatedCostRange: "₹26,24,100–43,73,500/year",
        icon: Key,
        calculateEffort: (dataSize: number) => {
          // Base effort + 3 hours per 100GB
          const baseEffort = 40
          const additionalEffort = Math.ceil(dataSize / 100) * 3
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (dataSize: number) => {
          // Base timeline + 1 day per 100GB
          const days = Math.max(14, Math.ceil(dataSize / 100) + 13)
          return `Within ${days} days`
        },
        calculateCost: (dataSize: number) => {
          // $30-50 per endpoint + server licenses
          // Assuming 1 endpoint per 50GB of data and minimum of 50 endpoints
          const endpoints = Math.max(50, Math.ceil(dataSize / 50))
          const minCost = endpoints * 30
          const maxCost = endpoints * 50
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
        },
      },
    ],
  },
  {
    id: 5,
    category: "Vulnerability Management",
    text: "Does your organization conduct regular vulnerability assessments and penetration testing (VAPT)?",
    description: "Regular VAPT helps identify and remediate security vulnerabilities before they can be exploited.",
    helpText: "This includes automated scanning, manual testing, and remediation of identified vulnerabilities.",
    icon: FileCode,
    subQuestion: {
      id: "vapt-systems",
      text: "How many systems or applications need testing?",
      placeholder: "Enter number of systems",
      unit: "systems",
      defaultValue: 10,
      min: 1,
    },
    recommendations: [
      {
        id: "qualys-vm",
        tier: "standard",
        name: "Qualys Vulnerability Management",
        shortDescription: "Cloud-based vulnerability scanning",
        description:
          "Qualys provides comprehensive vulnerability management with continuous scanning, risk assessment, and remediation tracking.",
        pros: [
          "Cloud-based architecture",
          "Comprehensive vulnerability database",
          "Detailed reporting",
          "Integration with ticketing systems",
        ],
        cons: [
          "Complex for small organizations",
          "Requires expertise to interpret results",
          "Additional cost for web application scanning",
        ],
        pricing: "₹8,74,700-43,73,500 per assessment",
        pricingModel: "Annual subscription based on assets",
        officialWebsite: "https://www.qualys.com/apps/vulnerability-management/",
        pricingPage: "https://www.qualys.com/forms/contact-us/",
        setupTime: "1-2 weeks with security team",
        recommendedTimeline: "Within 1 month",
        requiredResources: "Security analyst with vulnerability management experience",
        organizationSize: "Small to large organizations (25+ employees)",
        effortHours: "24–40",
        priority: "High",
        estimatedCostRange: "₹8,74,700–43,73,500/year",
        icon: FileCode,
        calculateTimeline: (systems: number | string) => {
          const numSystems = typeof systems === 'string' ? parseInt(systems) : systems
          const days = Math.max(30, Math.ceil(numSystems / 5) * 2 + 28)
          return `Within ${days} days`
        },
        calculateCost: (systems: number | string) => {
          const numSystems = typeof systems === 'string' ? parseInt(systems) : systems
          const baseCost = 874700 // 10000 USD in INR
          const perSystemCost = 174940 // 2000 USD in INR
          const minCost = baseCost + numSystems * perSystemCost
          const maxCost = Math.min(4373500, minCost * 1.5) // 50000 USD in INR
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')} per assessment`
        },
      },
      {
        id: "nessus-professional",
        tier: "standard",
        name: "Nessus Professional",
        shortDescription: "Industry-standard vulnerability scanner",
        description:
          "Nessus Professional is a comprehensive vulnerability scanner that helps identify security issues, configuration problems, and malware.",
        pros: [
          "Easy to use interface",
          "Accurate vulnerability detection",
          "Regular updates",
          "Low false positive rate",
        ],
        cons: [
          "Limited to vulnerability scanning",
          "No centralized management in basic version",
          "Manual remediation tracking",
        ],
        pricing: "₹2,09,093 per year",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.tenable.com/products/nessus",
        pricingPage: "https://www.tenable.com/products/nessus/nessus-professional/pricing",
        setupTime: "1-3 days with IT support",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT administrator with security experience",
        organizationSize: "Small to medium organizations (5-100 employees)",
        effortHours: "16–24",
        priority: "High",
        estimatedCostRange: "₹2,09,093–4,18,186/year",
        icon: FileCode,
        calculateEffort: (systems: number | string) => {
          const numSystems = typeof systems === 'string' ? parseInt(systems) : systems
          const baseEffort = 16
          const additionalEffort = Math.ceil(numSystems * 1.5)
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 8}`
        },
        calculateTimeline: (systems: number | string) => {
          const numSystems = typeof systems === 'string' ? parseInt(systems) : systems
          const days = Math.max(3, Math.ceil(numSystems / 10) + 2)
          return `Within ${days} days`
        },
        calculateCost: (systems: number | string) => {
          const numSystems = typeof systems === 'string' ? parseInt(systems) : systems
          const baseCost = 2390
          const additionalLicenses = Math.max(0, Math.ceil(numSystems / 50) - 1)
          const totalCost = baseCost + additionalLicenses * baseCost
          return `₹${totalCost.toLocaleString('en-IN')}–${(totalCost * 2).toLocaleString('en-IN')}/year`
        },
      },
      {
        id: "external-pentest",
        tier: "premium",
        name: "External Penetration Testing Service",
        shortDescription: "Professional security assessment",
        description:
          "Engage a professional security firm to conduct comprehensive penetration testing of your external and internal systems.",
        pros: [
          "Expert manual testing",
          "Comprehensive assessment",
          "Detailed remediation guidance",
          "Compliance documentation",
        ],
        cons: ["Higher cost", "Point-in-time assessment", "Requires scheduling and coordination"],
        pricing: "$10,000-50,000 per assessment",
        pricingModel: "Project-based",
        officialWebsite: "Various security firms",
        pricingPage: "Contact for custom quote",
        setupTime: "1-2 months planning and execution",
        recommendedTimeline: "Within 3 months",
        requiredResources: "Security team coordination and executive sponsorship",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "40–80",
        priority: "Medium",
        estimatedCostRange: "$10,000–50,000 per assessment",
        icon: FileCode,
        calculateEffort: (systems: number | string) => {
          const numSystems = typeof systems === 'string' ? parseInt(systems) : systems
          const baseEffort = 40
          const additionalEffort = numSystems * 4
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (systems: number | string) => {
          const numSystems = typeof systems === 'string' ? parseInt(systems) : systems
          const days = Math.max(30, Math.ceil(numSystems / 5) * 2 + 28)
          return `Within ${days} days`
        },
        calculateCost: (systems: number | string) => {
          const numSystems = typeof systems === 'string' ? parseInt(systems) : systems
          const baseCost = 10000
          const perSystemCost = 2000
          const minCost = baseCost + numSystems * perSystemCost
          const maxCost = Math.min(50000, minCost * 1.5)
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')} per assessment`
        },
      },
    ],
  },
  {
    id: 6,
    category: "Business Continuity",
    text: "Does your organization have a disaster recovery plan in place?",
    description:
      "A disaster recovery plan ensures that critical systems and data can be restored in the event of a disaster.",
    helpText: "This includes backup procedures, recovery time objectives, and regular testing of the recovery process.",
    icon: Database,
    subQuestion: {
      id: "dr-infrastructure",
      text: "What is the size and complexity of your IT infrastructure (number of critical servers)?",
      placeholder: "Enter number of servers",
      unit: "servers",
      defaultValue: 5,
      min: 1,
    },
    recommendations: [
      {
        id: "veeam-backup",
        tier: "standard",
        name: "Veeam Backup & Replication",
        shortDescription: "Comprehensive backup solution",
        description:
          "Veeam Backup & Replication provides reliable backup, recovery, and replication for virtual, physical, and cloud-based workloads.",
        pros: [
          "Comprehensive backup capabilities",
          "Fast and reliable recovery options",
          "Cloud integration",
          "Ransomware protection",
        ],
        cons: [
          "Requires dedicated backup infrastructure",
          "Complex licensing model",
          "Technical expertise needed for advanced features",
        ],
        pricing: "Starting at ₹21,86,750/year",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.veeam.com/backup-replication-virtual-physical-cloud.html",
        pricingPage: "https://www.veeam.com/pricing.html",
        setupTime: "2-3 days with IT support",
        recommendedTimeline: "Within 1 month",
        requiredResources: "IT administrator with backup experience",
        organizationSize: "Small to large organizations (25+ employees)",
        effortHours: "16–24",
        priority: "High",
        estimatedCostRange: "₹21,86,750–34,98,800/year",
        icon: Database,
        calculateEffort: (servers: number | string) => {
          const numServers = typeof servers === 'string' ? parseInt(servers) : servers
          const baseEffort = 4
          const additionalEffort = numServers * 4
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 4}`
        },
        calculateTimeline: (servers: number | string) => {
          const numServers = typeof servers === 'string' ? parseInt(servers) : servers
          const days = Math.max(5, Math.ceil(numServers / 2) + 4)
          return `Within ${days} days`
        },
        calculateCost: (servers: number | string) => {
          const numServers = typeof servers === 'string' ? parseInt(servers) : servers
          const sockets = numServers * 2
          const minCost = sockets * 800
          const maxCost = sockets * 1000
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
        },
      },
      {
        id: "dr-plan-development",
        tier: "standard",
        name: "Disaster Recovery Plan Development",
        shortDescription: "Custom DR plan creation",
        description:
          "Develop a comprehensive disaster recovery plan tailored to your organization's specific needs and infrastructure.",
        pros: [
          "Customized to your environment",
          "Addresses specific business requirements",
          "Includes documentation and procedures",
          "Can be developed internally",
        ],
        cons: [
          "Requires significant time investment",
          "Needs regular updates and testing",
          "May require external expertise",
        ],
        pricing: "₹4,37,350-13,12,050 for consulting services",
        pricingModel: "Project-based",
        officialWebsite: "Various consulting firms",
        pricingPage: "Contact for custom quote",
        setupTime: "1-2 months with business and IT teams",
        recommendedTimeline: "Within 3 months",
        requiredResources: "Business continuity manager and IT team",
        organizationSize: "Organizations of all sizes",
        effortHours: "40–80",
        priority: "Medium",
        estimatedCostRange: "₹4,37,350–13,12,050 for development",
        icon: Database,
        calculateEffort: (servers: number | string) => {
          const numServers = typeof servers === 'string' ? parseInt(servers) : servers
          const baseEffort = 40
          const additionalEffort = numServers * 8
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (servers: number | string) => {
          const numServers = typeof servers === 'string' ? parseInt(servers) : servers
          const days = Math.max(30, Math.ceil(numServers / 3) * 2 + 28)
          return `Within ${days} days`
        },
        calculateCost: (servers: number | string) => {
          const numServers = typeof servers === 'string' ? parseInt(servers) : servers
          const baseCost = 5000
          const perServerCost = 1000
          const minCost = baseCost + numServers * perServerCost
          const maxCost = Math.min(15000, minCost * 1.5)
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')} for development`
        },
      },
      {
        id: "cloud-draas",
        tier: "premium",
        name: "Cloud-Based Disaster Recovery (DRaaS)",
        shortDescription: "Managed disaster recovery service",
        description:
          "Disaster Recovery as a Service (DRaaS) provides cloud-based disaster recovery with minimal on-premises infrastructure requirements.",
        pros: [
          "Reduced capital expenditure",
          "Rapid recovery capabilities",
          "Managed service with expert support",
          "Regular testing and validation",
        ],
        cons: ["Ongoing operational costs", "Potential bandwidth limitations", "Data sovereignty considerations"],
        pricing: "₹1,000-3,000 per server/year",
        pricingModel: "Annual subscription",
        officialWebsite: "Various providers (Azure Site Recovery, AWS Disaster Recovery, etc.)",
        pricingPage: "Contact for custom quote",
        setupTime: "2-4 weeks with cloud provider",
        recommendedTimeline: "Within 2 months",
        requiredResources: "IT team with cloud experience",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "60–120",
        priority: "Medium",
        estimatedCostRange: "₹5,000–30,000/year",
        icon: Database,
        calculateEffort: (servers: number | string) => {
          const numServers = typeof servers === 'string' ? parseInt(servers) : servers
          const baseEffort = 60
          const additionalEffort = numServers * 12
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 60}`
        },
        calculateTimeline: (servers: number | string) => {
          const numServers = typeof servers === 'string' ? parseInt(servers) : servers
          const days = Math.max(14, Math.ceil(numServers / 2) * 3 + 11)
          return `Within ${days} days`
        },
        calculateCost: (servers: number | string) => {
          const numServers = typeof servers === 'string' ? parseInt(servers) : servers
          const minCost = numServers * 1000
          const maxCost = numServers * 3000
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
        },
      },
    ],
  },
  {
    id: 7,
    category: "Security Monitoring",
    text: "Does your organization have logging and monitoring for all critical systems?",
    description: "Security monitoring helps detect and respond to security incidents in a timely manner.",
    helpText: "This includes log collection, security event monitoring, and incident response procedures.",
    icon: Bell,
    subQuestion: {
      id: "monitoring-systems",
      text: "How many systems or devices need monitoring?",
      placeholder: "Enter number of systems",
      unit: "systems",
      defaultValue: 20,
      min: 1,
    },
    recommendations: [
      {
        id: "wazuh-siem",
        tier: "standard",
        name: "Wazuh Open Source SIEM",
        shortDescription: "Free security monitoring platform",
        description:
          "Wazuh is a free, open-source security monitoring solution that provides threat detection, integrity monitoring, and compliance capabilities.",
        pros: [
          "Free and open-source",
          "Comprehensive monitoring capabilities",
          "Active community support",
          "Regular updates",
        ],
        cons: [
          "Requires technical expertise to deploy",
          "Self-hosted infrastructure needed",
          "Limited commercial support",
        ],
        pricing: "Free",
        pricingModel: "Open-source",
        officialWebsite: "https://wazuh.com/",
        pricingPage: "https://wazuh.com/pricing/",
        setupTime: "1-3 weeks with security team",
        recommendedTimeline: "Within 1 month",
        requiredResources: "Security analyst with SIEM experience",
        organizationSize: "Small to medium organizations (10-250 employees)",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "$0 for software, $5,000–10,000 for implementation",
        icon: Bell,
        calculateEffort: (systems: number | string) => {
          const numSystems = typeof systems === 'string' ? parseInt(systems) : systems
          const baseEffort = 40
          const additionalEffort = numSystems * 2
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (systems: number | string) => {
          const numSystems = typeof systems === 'string' ? parseInt(systems) : systems
          const days = Math.max(7, Math.ceil(numSystems / 10) + 6)
          return `Within ${days} days`
        },
        calculateCost: (systems: number | string) => {
          // Free software, but implementation costs
          const implementationCost = 5000 + numSystems * 100
          const maxCost = Math.min(10000, implementationCost)
          return `₹${implementationCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')} for implementation`
        },
      },
      {
        id: "alienvault-ossim",
        tier: "standard",
        name: "AlienVault OSSIM",
        shortDescription: "Open-source security information management",
        description:
          "AlienVault OSSIM provides asset discovery, vulnerability assessment, intrusion detection, and behavioral monitoring in a unified platform.",
        pros: [
          "Free and open-source",
          "All-in-one security monitoring",
          "Threat intelligence integration",
          "User-friendly interface",
        ],
        cons: [
          "Limited scalability in free version",
          "Self-hosted infrastructure required",
          "Limited reporting capabilities",
        ],
        pricing: "Free (OSSIM) or ₹9,31,556+ per year (USM Anywhere)",
        pricingModel: "Open-source or subscription",
        officialWebsite: "https://cybersecurity.att.com/products/ossim",
        pricingPage: "https://cybersecurity.att.com/pricing",
        setupTime: "2-4 weeks with security team",
        recommendedTimeline: "Within 2 months",
        requiredResources: "Security analyst with SIEM experience",
        organizationSize: "Small to medium organizations (10-250 employees)",
        effortHours: "60–100",
        priority: "High",
        estimatedCostRange: "$0 for software, $6,000–12,000 for implementation",
        icon: Bell,
        calculateEffort: (systems: number | string) => {
          const numSystems = typeof systems === 'string' ? parseInt(systems) : systems
          const baseEffort = 60
          const additionalEffort = Math.ceil(numSystems * 2.5)
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (systems: number | string) => {
          const numSystems = typeof systems === 'string' ? parseInt(systems) : systems
          const days = Math.max(14, Math.ceil(numSystems / 8) + 13)
          return `Within ${days} days`
        },
        calculateCost: (systems: number | string) => {
          // Free software, but implementation costs
          const implementationCost = 6000 + numSystems * 150
          const maxCost = Math.min(12000, implementationCost)
          return `₹${implementationCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')} for implementation`
        },
      },
      {
        id: "splunk-es",
        tier: "premium",
        name: "Splunk Enterprise Security",
        shortDescription: "Enterprise SIEM solution",
        description:
          "Splunk Enterprise Security is a comprehensive SIEM solution that provides advanced security analytics, threat intelligence, and incident management.",
        pros: [
          "Advanced correlation capabilities",
          "Extensive integration options",
          "Powerful search and analytics",
          "Customizable dashboards",
        ],
        cons: ["Significant investment required", "Complex implementation", "Requires dedicated resources"],
        pricing: "Starting at ₹21,86,750/year",
        pricingModel: "Annual subscription based on data volume",
        officialWebsite: "https://www.splunk.com/en_us/software/enterprise-security.html",
        pricingPage: "https://www.splunk.com/en_us/talk-to-sales.html",
        setupTime: "1-3 months with security team",
        recommendedTimeline: "Within 3 months",
        requiredResources: "Dedicated SIEM administrator and security analysts",
        organizationSize: "Medium to large organizations (100+ employees)",
        effortHours: "120–240",
        priority: "Medium",
        estimatedCostRange: "₹21,86,750–87,47,000/year",
        icon: Bell,
        calculateEffort: (systems: number | string) => {
          const numSystems = typeof systems === 'string' ? parseInt(systems) : systems
          const baseEffort = 120
          const additionalEffort = numSystems * 6
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 120}`
        },
        calculateTimeline: (systems: number | string) => {
          const numSystems = typeof systems === 'string' ? parseInt(systems) : systems
          const days = Math.max(30, Math.ceil(numSystems / 5) * 2 + 28)
          return `Within ${days} days`
        },
        calculateCost: (systems: number | string) => {
          const numSystems = typeof systems === 'string' ? parseInt(systems) : systems
          const baseCost = 25000
          const perSystemCost = 1000
          const minCost = baseCost + numSystems * perSystemCost
          const maxCost = Math.min(100000, minCost * 2)
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
        },
      },
    ],
  },
  {
    id: 8,
    category: "Security Awareness",
    text: "Does your organization conduct regular security awareness training for all employees?",
    description: "Security awareness training helps employees recognize and respond appropriately to security threats.",
    helpText: "This includes phishing simulations, social engineering awareness, and security best practices training.",
    icon: Users,
    subQuestion: {
      id: "training-employees",
      text: "How many employees need training?",
      placeholder: "Enter number of employees",
      unit: "employees",
      defaultValue: 50,
      min: 1,
    },
    recommendations: [
      {
        id: "knowbe4",
        tier: "standard",
        name: "KnowBe4",
        shortDescription: "Security awareness training platform",
        description:
          "KnowBe4 provides a comprehensive security awareness training platform with phishing simulations, training modules, and compliance tracking.",
        pros: [
          "Extensive training library",
          "Automated phishing simulations",
          "User-friendly dashboard",
          "Compliance reporting",
        ],
        cons: [
          "Subscription cost scales with users",
          "Requires ongoing management",
          "Some advanced features only in higher tiers",
        ],
        pricing: "₹1,486-2,624 per user/year",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.knowbe4.com/",
        pricingPage: "https://www.knowbe4.com/pricing-kevin-mitnick-security-awareness-training/",
        setupTime: "1-2 weeks",
        recommendedTimeline: "Within 1 month",
        requiredResources: "IT or security administrator",
        organizationSize: "Organizations of all sizes",
        effortHours: "16–32",
        priority: "High",
        estimatedCostRange: "₹1,48,699–2,62,410/year",
        icon: Users,
        calculateEffort: (employees: number | string) => {
          const numEmployees = typeof employees === 'string' ? parseInt(employees) : employees
          const baseEffort = 4
          const additionalEffort = Math.ceil(numEmployees * 0.1)
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 4}`
        },
        calculateTimeline: (employees: number | string) => {
          const numEmployees = typeof employees === 'string' ? parseInt(employees) : employees
          const days = Math.max(2, Math.ceil(numEmployees / 100) + 1)
          return `Within ${days} days`
        },
        calculateCost: (employees: number | string) => {
          const numEmployees = typeof employees === 'string' ? parseInt(employees) : employees
          const minCost = numEmployees * 1487
          const maxCost = numEmployees * 2624
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
        },
      },
      {
        id: "proofpoint-sat",
        tier: "standard",
        name: "Proofpoint Security Awareness Training",
        shortDescription: "Comprehensive security education",
        description:
          "Proofpoint Security Awareness Training provides comprehensive security education with threat simulations and behavior change analysis.",
        pros: [
          "Targeted training based on user vulnerability",
          "Advanced reporting and analytics",
          "Integration with email security",
          "Customizable content",
        ],
        cons: ["Higher cost solution", "Complex reporting for small organizations", "Requires dedicated management"],
        pricing: "₹175-437 per user/month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://www.proofpoint.com/us/products/security-awareness-training",
        pricingPage: "https://www.proofpoint.com/us/contact",
        setupTime: "2-3 weeks",
        recommendedTimeline: "Within 1 month",
        requiredResources: "Security awareness program manager",
        organizationSize: "Small to large organizations (25+ employees)",
        effortHours: "24–40",
        priority: "High",
        estimatedCostRange: "₹1,57,446–2,62,410/year",
        icon: Users,
        calculateEffort: (employees: number | string) => {
          const numEmployees = typeof employees === 'string' ? parseInt(employees) : employees
          const baseEffort = 4
          const additionalEffort = Math.ceil(numEmployees * 0.1)
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 4}`
        },
        calculateTimeline: (employees: number | string) => {
          const numEmployees = typeof employees === 'string' ? parseInt(employees) : employees
          const days = Math.max(2, Math.ceil(numEmployees / 100) + 1)
          return `Within ${days} days`
        },
        calculateCost: (employees: number | string) => {
          const numEmployees = typeof employees === 'string' ? parseInt(employees) : employees
          const minCost = numEmployees * 1312
          const maxCost = numEmployees * 2624
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
        },
      },
      {
        id: "sans-security-awareness",
        tier: "premium",
        name: "SANS Security Awareness",
        shortDescription: "Expert-led security training",
        description:
          "SANS Security Awareness provides expert-led security awareness training with comprehensive content and deployment program support.",
        pros: [
          "Industry-leading content quality",
          "Deployment program support",
          "Comprehensive training materials",
          "Regular content updates",
        ],
        cons: [
          "Premium pricing",
          "Less automated than some competitors",
          "May require more internal resources to manage",
        ],
        pricing: "Starting at ₹69,976 per socket/year",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.sans.org/security-awareness-training/",
        pricingPage: "https://www.sans.org/security-awareness-training/pricing/",
        setupTime: "3-4 weeks",
        recommendedTimeline: "Within 2 months",
        requiredResources: "Dedicated program manager",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "40–60",
        priority: "Medium",
        estimatedCostRange: "₹69,976–1,39,952/year",
        icon: Users,
        calculateEffort: (employees: number | string) => {
          const numEmployees = typeof employees === 'string' ? parseInt(employees) : employees
          const baseEffort = 40
          const additionalEffort = Math.ceil(numEmployees * 0.1)
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 20}`
        },
        calculateTimeline: (employees: number | string) => {
          const numEmployees = typeof employees === 'string' ? parseInt(employees) : employees
          const days = Math.max(14, Math.ceil(numEmployees / 50) + 13)
          return `Within ${days} days`
        },
        calculateCost: (employees: number | string) => {
          const numEmployees = typeof employees === 'string' ? parseInt(employees) : employees
          const baseCost = 5000
          const perEmployeeCost = 50
          const minCost = baseCost + numEmployees * perEmployeeCost
          const maxCost = Math.min(15000, minCost * 1.5)
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
        },
      },
    ],
  },
  {
    id: 9,
    category: "Authentication",
    text: "Does your organization have multi-factor authentication (MFA) enabled for all critical accounts?",
    description: "Multi-factor authentication adds an additional layer of security beyond passwords.",
    helpText: "This includes email accounts, admin accounts, VPN access, and cloud services.",
    icon: UserCheck,
    subQuestion: {
      id: "mfa-accounts",
      text: "How many users/accounts need MFA setup?",
      placeholder: "Enter number of users",
      unit: "users",
      defaultValue: 25,
      min: 1,
    },
    recommendations: [
      {
        id: "microsoft-authenticator",
        tier: "standard",
        name: "Microsoft Authenticator",
        shortDescription: "Free MFA mobile app",
        description:
          "Microsoft Authenticator provides multi-factor authentication for Microsoft accounts and other services with push notifications and one-time codes.",
        pros: [
          "Free for basic use",
          "Easy to deploy",
          "Works with many services",
          "Push notifications for easy approval",
        ],
        cons: [
          "Limited to app-based authentication",
          "No hardware token support",
          "Limited centralized management in free version",
        ],
        pricing: "Free for basic use",
        pricingModel: "Free app with premium features in Microsoft 365",
        officialWebsite: "https://www.microsoft.com/en-us/security/mobile-authenticator-app",
        pricingPage:
          "https://www.microsoft.com/en-us/microsoft-365/business/compare-all-microsoft-365-business-products",
        setupTime: "1-2 days with IT support",
        recommendedTimeline: "Within 1 week",
        requiredResources: "IT administrator for deployment guidance",
        organizationSize: "Organizations of all sizes",
        effortHours: "8–16",
        priority: "High",
        estimatedCostRange: "$0 for basic, $500–2,000 for premium features",
        icon: UserCheck,
        calculateEffort: (users: number | string) => {
          const numUsers = typeof users === 'string' ? parseInt(users) : users
          const baseEffort = 4
          const additionalEffort = Math.ceil(numUsers * 0.1)
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 4}`
        },
        calculateTimeline: (users: number | string) => {
          const numUsers = typeof users === 'string' ? parseInt(users) : users
          const days = Math.max(2, Math.ceil(numUsers / 50) + 1)
          return `Within ${days} days`
        },
        calculateCost: (users: number | string) => {
          // Free for basic, premium features with Microsoft 365
          const premiumUsers = Math.ceil(numUsers * 0.2) // Assuming 20% need premium features
          const premiumCost = premiumUsers * 100 // Approximate cost per premium user
          return `₹${premiumCost.toLocaleString('en-IN')}–${(premiumCost * 2).toLocaleString('en-IN')} for premium features`
        },
      },
      {
        id: "duo-security",
        tier: "standard",
        name: "Duo Security",
        shortDescription: "User-friendly MFA solution",
        description:
          "Duo Security provides easy-to-use multi-factor authentication with multiple authentication methods and a user-friendly interface.",
        pros: [
          "Simple user experience",
          "Multiple authentication methods",
          "Broad application support",
          "Detailed reporting",
        ],
        cons: [
          "Subscription cost per user",
          "Advanced features require higher tiers",
          "Integration complexity for some applications",
        ],
        pricing: "₹437-1,312 per user/month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://duo.com/",
        pricingPage: "https://duo.com/pricing",
        setupTime: "3-5 days with IT support",
        recommendedTimeline: "Within 2 weeks",
        requiredResources: "IT administrator with identity management experience",
        organizationSize: "Small to large organizations (10+ employees)",
        effortHours: "16–32",
        priority: "High",
        estimatedCostRange: "₹900–1,800/year",
        icon: UserCheck,
        calculateEffort: (users: number | string) => {
          const numUsers = typeof users === 'string' ? parseInt(users) : users
          const baseEffort = 4
          const additionalEffort = Math.ceil(numUsers * 0.1)
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 4}`
        },
        calculateTimeline: (users: number | string) => {
          const numUsers = typeof users === 'string' ? parseInt(users) : users
          const days = Math.max(2, Math.ceil(numUsers / 30) + 2)
          return `Within ${days} days`
        },
        calculateCost: (users: number | string) => {
          const numUsers = typeof users === 'string' ? parseInt(users) : users
          const minCost = numUsers * 262 * 12 // Annual cost
          const maxCost = numUsers * 524 * 12
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
        },
      },
      {
        id: "yubikey",
        tier: "premium",
        name: "YubiKey Hardware Tokens",
        shortDescription: "Physical security keys",
        description:
          "YubiKey provides hardware-based authentication tokens that offer the highest level of security for critical accounts.",
        pros: [
          "Strongest authentication method",
          "Phishing-resistant",
          "No batteries required",
          "Multiple protocol support",
        ],
        cons: [
          "Higher upfront cost",
          "Physical distribution required",
          "User training needed",
          "Replacement process for lost keys",
        ],
        pricing: "₹4,374-6,123 per key",
        pricingModel: "One-time purchase",
        officialWebsite: "https://www.yubico.com/",
        pricingPage: "https://www.yubico.com/store/",
        setupTime: "1-2 weeks with security team",
        recommendedTimeline: "Within 1 month",
        requiredResources: "Security team for deployment and user training",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "24–48",
        priority: "Medium",
        estimatedCostRange: "₹1,250–3,500 initial investment",
        icon: UserCheck,
        calculateEffort: (users: number | string) => {
          const numUsers = typeof users === 'string' ? parseInt(users) : users
          const baseEffort = 24
          const additionalEffort = users
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 24}`
        },
        calculateTimeline: (users: number | string) => {
          const numUsers = typeof users === 'string' ? parseInt(users) : users
          const days = Math.max(7, Math.ceil(numUsers / 20) + 6)
          return `Within ${days} days`
        },
        calculateCost: (users: number | string) => {
          const numUsers = typeof users === 'string' ? parseInt(users) : users
          const minCost = numUsers * 4374
          const maxCost = numUsers * 6561
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')} initial investment`
        },
      },
    ],
  },
  {
    id: 10,
    category: "Incident Response",
    text: "Does your organization have a documented incident response plan?",
    description: "An incident response plan outlines the steps to take when a security incident occurs.",
    helpText: "This includes identification, containment, eradication, recovery, and lessons learned.",
    icon: AlertTriangle,
    subQuestion: {
      id: "ir-plan-exists",
      text: "Is the incident response plan documented and regularly tested?",
      placeholder: "Yes/No",
      unit: "",
      defaultValue: 0,
      min: 0,
      max: 1,
    },
    recommendations: [
      {
        id: "ir-plan-development",
        tier: "standard",
        name: "Incident Response Plan Development",
        shortDescription: "Create a custom incident response plan",
        description:
          "Develop a comprehensive incident response plan tailored to your organization's specific needs and infrastructure.",
        pros: [
          "Customized to your environment",
          "Addresses specific business requirements",
          "Includes documentation and procedures",
          "Can be developed internally",
        ],
        cons: [
          "Requires significant time investment",
          "Needs regular updates and testing",
          "May require external expertise",
        ],
        pricing: "₹4,37,350-13,12,050 for consulting services",
        pricingModel: "Project-based",
        officialWebsite: "Various consulting firms",
        pricingPage: "Contact for custom quote",
        setupTime: "1-2 months with business and IT teams",
        recommendedTimeline: "Within 3 months",
        requiredResources: "Business continuity manager and IT team",
        organizationSize: "Organizations of all sizes",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "₹4,37,350–13,12,050 for development",
        icon: AlertTriangle,
        calculateEffort: (planExists: number) => {
          // Base effort + additional effort if plan doesn't exist
          const baseEffort = 40
          const additionalEffort = planExists === 0 ? 40 : 0
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (planExists: number) => {
          // Base timeline + additional time if plan doesn't exist
          const baseTimeline = 30
          const additionalTimeline = planExists === 0 ? 30 : 0
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} days`
        },
        calculateCost: (planExists: number) => {
          // Base cost + additional cost if plan doesn't exist
          const baseCost = 5000
          const additionalCost = planExists === 0 ? 5000 : 0
          const maxCost = Math.min(15000, baseCost + additionalCost * 1.5)
          return `₹${baseCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')} for development`
        },
      },
      {
        id: "ir-tabletop-exercise",
        tier: "standard",
        name: "Incident Response Tabletop Exercise",
        shortDescription: "Simulate a security incident",
        description:
          "Conduct a tabletop exercise to simulate a security incident and test your organization's incident response plan.",
        pros: [
          "Identifies gaps in the incident response plan",
          "Improves team communication and coordination",
          "Low-cost way to test the plan",
          "Can be conducted internally",
        ],
        cons: [
          "Requires significant time investment",
          "Needs experienced facilitator",
          "May not simulate real-world conditions",
        ],
        pricing: "₹3,000-10,000 for consulting services",
        pricingModel: "Project-based",
        officialWebsite: "Various consulting firms",
        pricingPage: "Contact for custom quote",
        setupTime: "2-4 weeks planning and execution",
        recommendedTimeline: "Within 2 months",
        requiredResources: "Incident response team and facilitator",
        organizationSize: "Organizations of all sizes",
        effortHours: "24–40",
        priority: "Medium",
        estimatedCostRange: "₹3,000–10,000 for exercise",
        icon: AlertTriangle,
        calculateEffort: (planExists: number) => {
          // Base effort + additional effort if plan doesn't exist
          const baseEffort = 24
          const additionalEffort = planExists === 0 ? 16 : 0
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 16}`
        },
        calculateTimeline: (planExists: number) => {
          // Base timeline + additional time if plan doesn't exist
          const baseTimeline = 14
          const additionalTimeline = planExists === 0 ? 14 : 0
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} days`
        },
        calculateCost: (planExists: number) => {
          const baseCost = 3000
          const additionalCost = planExists === 0 ? 2000 : 0
          const maxCost = Math.min(10000, baseCost + additionalCost * 2)
          return `₹${baseCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')} for exercise`
        },
      },
      {
        id: "managed-ir",
        tier: "premium",
        name: "Managed Incident Response Service",
        shortDescription: "24/7 incident response support",
        description:
          "A managed incident response service provides 24/7 support for incident detection, analysis, containment, and remediation.",
        pros: [
          "Rapid response to security incidents",
          "Expert security analysts",
          "Reduced burden on internal IT staff",
          "Improved security posture",
        ],
        cons: ["Higher cost", "Requires trust in external provider", "Potential data privacy concerns"],
        pricing: "₹10,000-50,000/year",
        pricingModel: "Annual subscription",
        officialWebsite: "Various providers",
        pricingPage: "Contact for custom quote",
        setupTime: "2-4 weeks with security team",
        recommendedTimeline: "Within 2 months",
        requiredResources: "Security team coordination",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "40–80",
        priority: "Medium",
        estimatedCostRange: "₹10,000–50,000/year",
        icon: AlertTriangle,
        calculateEffort: (planExists: number) => {
          // Base effort + additional effort if plan doesn't exist
          const baseEffort = 40
          const additionalEffort = planExists === 0 ? 20 : 0
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (planExists: number) => {
          // Base timeline + additional time if plan doesn't exist
          const baseTimeline = 14
          const additionalTimeline = planExists === 0 ? 14 : 0
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} days`
        },
        calculateCost: (planExists: number) => {
          const baseCost = 10000
          const additionalCost = planExists === 0 ? 5000 : 0
          const maxCost = Math.min(50000, baseCost + additionalCost * 4)
          return `₹${baseCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
        },
      },
    ],
  },
  {
    id: 11,
    category: "Data Loss Prevention",
    text: "Does your organization have data loss prevention (DLP) measures in place?",
    description: "DLP helps prevent sensitive data from leaving the organization's control.",
    helpText: "This includes monitoring, blocking, and alerting on sensitive data transfers.",
    icon: FileText,
    subQuestion: {
      id: "dlp-data-types",
      text: "What types of sensitive data need protection (e.g., PII, financial data)?",
      placeholder: "Enter data types",
      unit: "",
      defaultValue: "PII, Financial Data",
      min: 0,
    },
    recommendations: [
      {
        id: "microsoft-dlp",
        tier: "standard",
        name: "Microsoft Purview DLP",
        shortDescription: "Integrated DLP solution for Microsoft 365",
        description:
          "Microsoft Purview DLP provides integrated data loss prevention capabilities for Microsoft 365 services.",
        pros: [
          "Seamless integration with Microsoft 365",
          "Pre-built sensitive information types",
          "Policy-based enforcement",
          "Reporting and auditing",
        ],
        cons: [
          "Best suited for Microsoft environments",
          "Requires Microsoft 365 E5 license",
          "Complex configuration for advanced scenarios",
        ],
        pricing: "₹437-874 per user/month (with Microsoft 365 E5)",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://www.microsoft.com/en-us/security/business/data-loss-prevention",
        pricingPage: "https://www.microsoft.com/en-us/microsoft-365/enterprise/e5",
        setupTime: "2-4 weeks with IT support",
        recommendedTimeline: "Within 2 months",
        requiredResources: "IT administrator with Microsoft 365 experience",
        organizationSize: "Small to large organizations (10+ employees)",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "₹2,62,410–5,24,820/year",
        icon: FileText,
        calculateEffort: (dataTypes: string[]) => {
          // Base effort + additional effort based on data types
          const baseEffort = 40
          const numDataTypes = dataTypes.length
          const additionalEffort = numDataTypes * 5
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (dataTypes: string[]) => {
          // Base timeline + additional time based on data types
          const baseTimeline = 14
          const numDataTypes = dataTypes.length
          const additionalTimeline = numDataTypes * 2
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} days`
        },
        calculateCost: (dataTypes: string[]) => {
          // Cost based on number of employees and E5 license
          const numEmployees = 50 // Example number of employees
          const minCost = numEmployees * 5 * 12
          const maxCost = numEmployees * 10 * 12
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
        },
      },
      {
        id: "teramind",
        tier: "standard",
        name: "Teramind",
        shortDescription: "User activity monitoring and DLP",
        description:
          "Teramind provides user activity monitoring and data loss prevention with behavior analytics and insider threat detection.",
        pros: [
          "Comprehensive user activity monitoring",
          "Behavior analytics",
          "Insider threat detection",
          "Policy-based enforcement",
        ],
        cons: ["Higher cost solution", "Requires dedicated management", "Potential privacy concerns"],
        pricing: "₹10-25 per user/month",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://www.teramind.co/",
        pricingPage: "https://www.teramind.co/pricing",
        setupTime: "1-2 weeks with IT support",
        recommendedTimeline: "Within 1 month",
        requiredResources: "IT administrator with security experience",
        organizationSize: "Small to large organizations (10+ employees)",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "₹6,000–15,000/year",
        icon: FileText,
        calculateEffort: (dataTypes: string[]) => {
          // Base effort + additional effort based on data types
          const baseEffort = 40
          const numDataTypes = dataTypes.length
          const additionalEffort = numDataTypes * 5
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (dataTypes: string[]) => {
          // Base timeline + additional time based on data types
          const baseTimeline = 14
          const numDataTypes = dataTypes.length
          const additionalTimeline = numDataTypes * 2
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} days`
        },
        calculateCost: (dataTypes: string[]) => {
          // Cost based on number of employees
          const numEmployees = 50 // Example number of employees
          const minCost = numEmployees * 10 * 12
          const maxCost = numEmployees * 25 * 12
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
        },
      },
      {
        id: "digital-guardian",
        tier: "premium",
        name: "Digital Guardian",
        shortDescription: "Enterprise DLP solution",
        description:
          "Digital Guardian provides enterprise-grade data loss prevention with endpoint, network, and cloud protection.",
        pros: [
          "Comprehensive data protection",
          "Endpoint, network, and cloud coverage",
          "Advanced threat protection",
          "Policy-based enforcement",
        ],
        cons: ["Higher cost solution", "Complex implementation", "Requires dedicated security resources"],
        pricing: "Contact for custom quote",
        pricingModel: "Annual subscription",
        officialWebsite: "https://www.digitalguardian.com/",
        pricingPage: "https://www.digitalguardian.com/contact",
        setupTime: "2-4 months with security team",
        recommendedTimeline: "Within 3 months",
        requiredResources: "Dedicated security team",
        organizationSize: "Medium to large organizations (100+ employees)",
        effortHours: "80–160",
        priority: "Medium",
        estimatedCostRange: "₹50,000–150,000/year",
        icon: FileText,
        calculateEffort: (dataTypes: string[]) => {
          // Base effort + additional effort based on data types
          const baseEffort = 80
          const numDataTypes = dataTypes.length
          const additionalEffort = numDataTypes * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 80}`
        },
        calculateTimeline: (dataTypes: string[]) => {
          // Base timeline + additional time based on data types
          const baseTimeline = 30
          const numDataTypes = dataTypes.length
          const additionalTimeline = numDataTypes * 4
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} days`
        },
        calculateCost: (dataTypes: string[]) => {
          // Cost based on complexity and data types
          const baseCost = 50000
          const numDataTypes = dataTypes.length
          const additionalCost = numDataTypes * 5000
          const maxCost = Math.min(150000, baseCost + additionalCost)
          return `₹${baseCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
        },
      },
    ],
  },
  {
    id: 12,
    category: "Data Backup",
    text: "Does your organization have a reliable data backup and recovery solution?",
    description: "Data backup ensures that critical data can be restored in the event of data loss.",
    helpText: "This includes regular backups, offsite storage, and testing of the recovery process.",
    icon: Server,
    subQuestion: {
      id: "backup-data-size",
      text: "What is the approximate size of data to be backed up (in TB)?",
      placeholder: "Enter data size in TB",
      unit: "TB",
      defaultValue: 1,
      min: 0.1,
    },
    recommendations: [
      {
        id: "veeam-backup-cloud",
        tier: "standard",
        name: "Veeam Cloud Connect",
        shortDescription: "Cloud-based backup and disaster recovery",
        description:
          "Veeam Cloud Connect provides cloud-based backup and disaster recovery with seamless integration with Veeam Backup & Replication.",
        pros: [
          "Offsite backup storage",
          "Fast and reliable recovery",
          "Integration with Veeam",
          "Reduced capital expenditure",
        ],
        cons: ["Ongoing operational costs", "Potential bandwidth limitations", "Requires Veeam Backup & Replication"],
        pricing: "₹600–1,200/year",
        pricingModel: "Monthly subscription",
        officialWebsite: "https://www.veeam.com/cloud-backup-disaster-recovery-veeam-cloud-connect.html",
        pricingPage: "Contact for custom quote",
        setupTime: "1-2 weeks with IT support",
        recommendedTimeline: "Within 1 month",
        requiredResources: "IT administrator with Veeam experience",
        organizationSize: "Small to large organizations (25+ employees)",
        effortHours: "24–40",
        priority: "High",
        estimatedCostRange: "₹600–1,200/year",
        icon: Server,
        calculateEffort: (dataSize: number) => {
          // Base effort + additional effort based on data size
          const baseEffort = 24
          const additionalEffort = Math.ceil(dataSize * 2)
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 16}`
        },
        calculateTimeline: (dataSize: number) => {
          // Base timeline + additional time based on data size
          const baseTimeline = 7
          const additionalTimeline = Math.ceil(dataSize / 0.5)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} days`
        },
        calculateCost: (dataSize: number) => {
          // Cost based on data size
          const minCost = dataSize * 50 * 12
          const maxCost = dataSize * 100 * 12
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
        },
      },
      {
        id: "backblaze-b2",
        tier: "standard",
        name: "Backblaze B2 Cloud Storage",
        shortDescription: "Affordable cloud storage for backups",
        description: "Backblaze B2 Cloud Storage provides affordable cloud storage for backups and archiving.",
        pros: ["Low-cost storage", "Scalable storage", "Easy to use", "Pay-as-you-go pricing"],
        cons: ["Requires integration with backup software", "Potential bandwidth costs", "No built-in backup features"],
        pricing: "₹60–1,200/year",
        pricingModel: "Pay-as-you-go",
        officialWebsite: "https://www.backblaze.com/b2/cloud-storage.html",
        pricingPage: "https://www.backblaze.com/b2/cloud-storage-pricing.html",
        setupTime: "1-2 days with IT support",
        recommendedTimeline: "Within 1 week",
        requiredResources: "IT administrator with cloud experience",
        organizationSize: "Organizations of all sizes",
        effortHours: "16–24",
        priority: "High",
        estimatedCostRange: "₹60–1,200/year",
        icon: Server,
        calculateEffort: (dataSize: number) => {
          // Base effort + additional effort based on data size
          const baseEffort = 16
          const additionalEffort = Math.ceil(dataSize * 1)
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 8}`
        },
        calculateTimeline: (dataSize: number) => {
          // Base timeline + additional time based on data size
          const baseTimeline = 3
          const additionalTimeline = Math.ceil(dataSize / 1)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} days`
        },
        calculateCost: (dataSize: number) => {
          // Cost based on data size
          const minCost = dataSize * 1000 * 0.005 * 12
          const maxCost = dataSize * 1000 * 0.01 * 12 // Assuming some egress costs
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
        },
      },
      {
        id: "aws-backup",
        tier: "premium",
        name: "AWS Backup",
        shortDescription: "Centralized backup service for AWS",
        description:
          "AWS Backup provides a centralized backup service for AWS services, including EC2, EBS, RDS, and DynamoDB.",
        pros: [
          "Centralized backup management",
          "Automated backups",
          "Integration with AWS services",
          "Compliance reporting",
        ],
        cons: ["Best suited for AWS environments", "Requires AWS expertise", "Potential cost complexity"],
        pricing: "Pay-as-you-go",
        pricingModel: "Pay-as-you-go",
        officialWebsite: "https://aws.amazon.com/backup/",
        pricingPage: "https://aws.amazon.com/backup/pricing/",
        setupTime: "2-4 weeks with cloud team",
        recommendedTimeline: "Within 2 months",
        requiredResources: "Cloud engineer with AWS experience",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "40–80",
        priority: "Medium",
        estimatedCostRange: "₹1,000–10,000/year",
        icon: Server,
        calculateEffort: (dataSize: number) => {
          // Base effort + additional effort based on data size
          const baseEffort = 40
          const additionalEffort = Math.ceil(dataSize * 3)
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (dataSize: number) => {
          // Base timeline + additional time based on data size
          const baseTimeline = 14
          const additionalTimeline = Math.ceil(dataSize / 0.25)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} days`
        },
        calculateCost: (dataSize) => {
          // Cost based on data size and AWS service usage
          const minCost = dataSize * 1000 * 0.02 * 12 // Assuming some storage costs
          const maxCost = dataSize * 1000 * 0.1 * 12 // Assuming some egress and service costs
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
        },
      },
    ],
  },
  {
    id: 13,
    category: "Compliance",
    text: "Does your organization adhere to relevant industry compliance standards (e.g., HIPAA, PCI DSS, GDPR)?",
    description: "Compliance ensures that your organization meets legal and regulatory requirements.",
    helpText: "This includes implementing security controls, conducting audits, and maintaining documentation.",
    icon: Building,
    subQuestion: {
      id: "compliance-standards",
      text: "Which compliance standards does your organization need to adhere to?",
      placeholder: "Enter compliance standards",
      unit: "",
      defaultValue: "HIPAA, PCI DSS",
      min: 0,
    },
    recommendations: [
      {
        id: "hipaa-compliance",
        tier: "standard",
        name: "HIPAA Compliance Assessment",
        shortDescription: "Assess HIPAA compliance",
        description:
          "Conduct a HIPAA compliance assessment to identify gaps in your organization's HIPAA compliance program.",
        pros: [
          "Identifies areas for improvement",
          "Helps meet HIPAA requirements",
          "Reduces risk of penalties",
          "Improves patient privacy",
        ],
        cons: ["Requires expertise in HIPAA regulations", "Can be time-consuming", "May require external consultants"],
        pricing: "₹5,000-20,000 for assessment",
        pricingModel: "Project-based",
        officialWebsite: "Various consulting firms",
        pricingPage: "Contact for custom quote",
        setupTime: "2-4 weeks with compliance team",
        recommendedTimeline: "Within 2 months",
        requiredResources: "Compliance officer and IT team",
        organizationSize: "Healthcare organizations",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "₹5,000–20,000 for assessment",
        icon: Building,
        calculateEffort: (standards) => {
          // Base effort + additional effort based on number of standards
          const baseEffort = 40
          const numStandards = standards.split(",").length
          const additionalEffort = numStandards * 10
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (standards) => {
          // Base timeline + additional time based on number of standards
          const baseTimeline = 14
          const numStandards = standards.split(",").length
          const additionalTimeline = numStandards * 3
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} days`
        },
        calculateCost: (standards) => {
          // Cost based on complexity and number of standards
          const baseCost = 5000
          const numStandards = standards.split(",").length
          const additionalCost = numStandards * 2000
          const maxCost = Math.min(20000, baseCost + additionalCost)
          return `₹${baseCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')} for assessment`
        },
      },
      {
        id: "pci-dss-compliance",
        tier: "standard",
        name: "PCI DSS Compliance Assessment",
        shortDescription: "Assess PCI DSS compliance",
        description:
          "Conduct a PCI DSS compliance assessment to ensure that your organization meets the requirements for handling credit card data.",
        pros: [
          "Meets PCI DSS requirements",
          "Reduces risk of data breaches",
          "Avoids penalties",
          "Improves customer trust",
        ],
        cons: [
          "Requires expertise in PCI DSS standards",
          "Can be complex and time-consuming",
          "May require external Qualified Security Assessor (QSA)",
        ],
        pricing: "₹8,74,700-87,47,000 for assessment",
        pricingModel: "Project-based",
        officialWebsite: "Various Qualified Security Assessors (QSAs)",
        pricingPage: "Contact for custom quote",
        setupTime: "2-6 months with compliance team",
        recommendedTimeline: "Within 6 months",
        requiredResources: "Compliance officer, IT team, and QSA (if required)",
        organizationSize: "Organizations that handle credit card data",
        effortHours: "80–160",
        priority: "High",
        estimatedCostRange: "₹8,74,700–87,47,000 for assessment",
        icon: Building,
        calculateEffort: (standards) => {
          // Base effort + additional effort based on number of standards
          const baseEffort = 80
          const numStandards = standards.split(",").length
          const additionalEffort = numStandards * 20
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 80}`
        },
        calculateTimeline: (standards) => {
          // Base timeline + additional time based on number of standards
          const baseTimeline = 30
          const numStandards = standards.split(",").length
          const additionalTimeline = numStandards * 7
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} days`
        },
        calculateCost: (standards) => {
          // Cost based on complexity and number of standards
          const baseCost = 874700 // 10000 USD in INR
          const numStandards = standards.split(",").length
          const additionalCost = numStandards * 874700 // 10000 USD in INR
          const maxCost = Math.min(8747000, baseCost + additionalCost) // 100000 USD in INR
          return `₹${baseCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')} for assessment`
        },
      },
      {
        id: "gdpr-compliance",
        tier: "premium",
        name: "GDPR Compliance Assessment",
        shortDescription: "Assess GDPR compliance",
        description:
          "Conduct a GDPR compliance assessment to ensure that your organization meets the requirements for protecting personal data of EU citizens.",
        pros: [
          "Meets GDPR requirements",
          "Reduces risk of penalties",
          "Improves data privacy",
          "Enhances customer trust",
        ],
        cons: [
          "Requires expertise in GDPR regulations",
          "Can be complex and time-consuming",
          "May require external Data Protection Officer (DPO)",
        ],
        pricing: "₹10,000-100,000 for assessment",
        pricingModel: "Project-based",
        officialWebsite: "Various consulting firms",
        pricingPage: "Contact for custom quote",
        setupTime: "2-6 months with compliance team",
        recommendedTimeline: "Within 6 months",
        requiredResources: "Compliance officer, IT team, and DPO (if required)",
        organizationSize: "Organizations that process personal data of EU citizens",
        effortHours: "160–320",
        priority: "Medium",
        estimatedCostRange: "₹10,000–100,000 for assessment",
        icon: Building,
        calculateEffort: (standards) => {
          // Base effort + additional effort based on number of standards
          const baseEffort = 160
          const numStandards = standards.split(",").length
          const additionalEffort = numStandards * 40
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 160}`
        },
        calculateTimeline: (standards) => {
          // Base timeline + additional time based on number of standards
          const baseTimeline = 60
          const numStandards = standards.split(",").length
          const additionalTimeline = numStandards * 14
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} days`
        },
        calculateCost: (standards) => {
          // Cost based on complexity and number of standards
          const baseCost = 10000
          const numStandards = standards.split(",").length
          const additionalCost = numStandards * 10000
          const maxCost = Math.min(100000, baseCost + additionalCost)
          return `₹${baseCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')} for assessment`
        },
      },
    ],
  },
  {
    id: 14,
    category: "Data Governance",
    text: "Does your organization have a data governance policy in place?",
    description: "Data governance ensures that data is managed effectively and securely.",
    helpText: "This includes data classification, data retention, and data access controls.",
    icon: BarChart,
    subQuestion: {
      id: "data-governance-policy",
      text: "Is there a documented data governance policy?",
      placeholder: "Yes/No",
      unit: "",
      defaultValue: 0,
      min: 0,
      max: 1,
    },
    recommendations: [
      {
        id: "data-governance-framework",
        tier: "standard",
        name: "Data Governance Framework Development",
        shortDescription: "Develop a data governance framework",
        description: "Develop a data governance framework to ensure that data is managed effectively and securely.",
        pros: [
          "Improves data quality",
          "Enhances data security",
          "Meets compliance requirements",
          "Supports business objectives",
        ],
        cons: [
          "Requires significant time investment",
          "Needs executive sponsorship",
          "May require external consultants",
        ],
        pricing: "₹8,74,700-43,73,500 for framework development",
        pricingModel: "Project-based",
        officialWebsite: "Various consulting firms",
        pricingPage: "Contact for custom quote",
        setupTime: "3-6 months with data governance team",
        recommendedTimeline: "Within 6 months",
        requiredResources: "Data governance team and executive sponsor",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "160–320",
        priority: "High",
        estimatedCostRange: "₹8,74,700–43,73,500 for framework development",
        icon: BarChart,
        calculateEffort: (policyExists) => {
          // Base effort + additional effort if policy doesn't exist
          const baseEffort = 160
          const additionalEffort = policyExists === 0 ? 80 : 0
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 160}`
        },
        calculateTimeline: (policyExists) => {
          // Base timeline + additional time if policy doesn't exist
          const baseTimeline = 90
          const additionalTimeline = policyExists === 0 ? 45 : 0
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} days`
        },
        calculateCost: (policyExists) => {
          // Cost based on complexity and policy existence
          const baseCost = 874700 // 10000 USD in INR
          const additionalCost = policyExists === 0 ? 874700 : 0 // 10000 USD in INR
          const maxCost = Math.min(4373500, baseCost + additionalCost * 3) // 50000 USD in INR
          return `₹${baseCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')} for implementation`
        },
      },
      {
        id: "data-classification",
        tier: "standard",
        name: "Data Classification Tool",
        shortDescription: "Automate data classification",
        description:
          "Implement a data classification tool to automate the process of classifying data based on sensitivity.",
        pros: [
          "Automates data classification",
          "Improves data security",
          "Meets compliance requirements",
          "Reduces manual effort",
        ],
        cons: ["Requires initial configuration", "May require ongoing maintenance", "Potential false positives"],
        pricing: "₹5,000-20,000/year",
        pricingModel: "Annual subscription",
        officialWebsite: "Various providers",
        pricingPage: "Contact for custom quote",
        setupTime: "2-4 weeks with IT team",
        recommendedTimeline: "Within 2 months",
        requiredResources: "IT administrator with security experience",
        organizationSize: "Organizations of all sizes",
        effortHours: "40–80",
        priority: "High",
        estimatedCostRange: "₹5,000–20,000/year",
        icon: BarChart,
        calculateEffort: (policyExists) => {
          // Base effort + additional effort if policy doesn't exist
          const baseEffort = 40
          const additionalEffort = policyExists === 0 ? 20 : 0
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 40}`
        },
        calculateTimeline: (policyExists) => {
          // Base timeline + additional time if policy doesn't exist
          const baseTimeline = 14
          const additionalTimeline = policyExists === 0 ? 7 : 0
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} days`
        },
        calculateCost: (policyExists) => {
          // Cost based on complexity and policy existence
          const baseCost = 5000
          const additionalCost = policyExists === 0 ? 2000 : 0
          const maxCost = Math.min(20000, baseCost + additionalCost * 3)
          return `₹${baseCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
        },
      },
      {
        id: "data-retention",
        tier: "premium",
        name: "Data Retention Policy Implementation",
        shortDescription: "Implement a data retention policy",
        description:
          "Implement a data retention policy to ensure that data is retained for the appropriate amount of time.",
        pros: [
          "Meets compliance requirements",
          "Reduces storage costs",
          "Improves data security",
          "Reduces legal risk",
        ],
        cons: ["Requires careful planning", "Needs ongoing maintenance", "Potential data loss"],
        pricing: "₹10,000-50,000 for implementation",
        pricingModel: "Project-based",
        officialWebsite: "Various consulting firms",
        pricingPage: "Contact for custom quote",
        setupTime: "3-6 months with legal and IT teams",
        recommendedTimeline: "Within 6 months",
        requiredResources: "Legal team, IT team, and data governance team",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "160–320",
        priority: "Medium",
        estimatedCostRange: "₹10,000–50,000 for implementation",
        icon: BarChart,
        calculateEffort: (policyExists) => {
          // Base effort + additional effort if policy doesn't exist
          const baseEffort = 160
          const additionalEffort = policyExists === 0 ? 80 : 0
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 160}`
        },
        calculateTimeline: (policyExists) => {
          // Base timeline + additional time if policy doesn't exist
          const baseTimeline = 90
          const additionalTimeline = policyExists === 0 ? 45 : 0
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} days`
        },
        calculateCost: (policyExists) => {
          // Cost based on complexity and policy existence
          const baseCost = 10000
          const additionalCost = policyExists === 0 ? 10000 : 0
          const maxCost = Math.min(50000, baseCost + additionalCost * 3)
          return `₹${baseCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')} for implementation`
        },
      },
    ],
  },
  {
    id: 15,
    category: "Remote Access",
    text: "Does your organization have a secure remote access solution in place?",
    description: "Secure remote access allows employees to access company resources from outside the office.",
    helpText: "This includes VPNs, multi-factor authentication, and endpoint security.",
    icon: Network,
    subQuestion: {
      id: "remote-access-users",
      text: "How many users need remote access?",
      placeholder: "Enter number of users",
      unit: "users",
      defaultValue: 25,
      min: 1,
    },
    recommendations: [
      {
        id: "vpn-solution",
        tier: "standard",
        name: "Virtual Private Network (VPN)",
        shortDescription: "Secure remote access solution",
        description:
          "A Virtual Private Network (VPN) provides secure remote access to company resources by creating an encrypted connection.",
        pros: ["Secure remote access", "Encryption of data in transit", "Relatively easy to deploy", "Cost-effective"],
        cons: [
          "Can impact network performance",
          "Requires configuration and maintenance",
          "Potential security vulnerabilities",
        ],
        pricing: "₹1,500–4,500/year",
        pricingModel: "Monthly subscription",
        officialWebsite: "Various providers",
        pricingPage: "Contact for custom quote",
        setupTime: "1-2 weeks with IT support",
        recommendedTimeline: "Within 1 month",
        requiredResources: "IT administrator with networking experience",
        organizationSize: "Organizations of all sizes",
        effortHours: "24–40",
        priority: "High",
        estimatedCostRange: "₹1,500–4,500/year",
        icon: Network,
        calculateEffort: (users: number | string) => {
          const numUsers = typeof users === 'string' ? parseInt(users) : users
          const baseEffort = 4
          const additionalEffort = Math.ceil(numUsers * 0.1)
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 4}`
        },
        calculateTimeline: (users: number | string) => {
          const numUsers = typeof users === 'string' ? parseInt(users) : users
          const baseTimeline = 7
          const additionalTimeline = Math.ceil(numUsers / 10)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} days`
        },
        calculateCost: (users: number | string) => {
          // Cost based on number of users
          const minCost = users * 5 * 12
          const maxCost = users * 15 * 12
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
        },
      },
      {
        id: "rdp-gateway",
        tier: "standard",
        name: "Remote Desktop Gateway",
        shortDescription: "Secure remote desktop access",
        description:
          "Remote Desktop Gateway provides secure remote desktop access to Windows servers and workstations.",
        pros: [
          "Secure remote desktop access",
          "Centralized management",
          "Integration with Active Directory",
          "Cost-effective",
        ],
        cons: [
          "Limited to Windows environments",
          "Requires configuration and maintenance",
          "Potential security vulnerabilities",
        ],
        pricing: "Included with Windows Server license",
        pricingModel: "Included with OS licenses",
        officialWebsite:
          "https://docs.microsoft.com/en-us/windows-server/remote/remote-desktop-services/rds-deploy-infrastructure",
        pricingPage: "https://www.microsoft.com/en-us/windows-server/pricing",
        setupTime: "1-2 weeks with IT support",
        recommendedTimeline: "Within 1 month",
        requiredResources: "IT administrator with Windows Server experience",
        organizationSize: "Organizations that use Windows Server",
        effortHours: "24–40",
        priority: "High",
        estimatedCostRange: "₹0–2,000 for additional licenses",
        icon: Network,
        calculateEffort: (users: number | string) => {
          const numUsers = typeof users === 'string' ? parseInt(users) : users
          const baseEffort = 4
          const additionalEffort = Math.ceil(numUsers * 0.1)
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 4}`
        },
        calculateTimeline: (users: number | string) => {
          const numUsers = typeof users === 'string' ? parseInt(users) : users
          const baseTimeline = 7
          const additionalTimeline = Math.ceil(numUsers / 10)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} days`
        },
        calculateCost: (users: number | string) => {
          // Cost based on number of users
          const additionalLicenses = Math.ceil(numUsers / 5)
          const minCost = 0
          const maxCost = additionalLicenses * 1000
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')} for additional licenses`
        },
      },
      {
        id: "zero-trust-network-access",
        tier: "premium",
        name: "Zero Trust Network Access (ZTNA)",
        shortDescription: "Secure remote access with zero trust",
        description:
          "Zero Trust Network Access (ZTNA) provides secure remote access with zero trust principles, including identity verification, device posture assessment, and microsegmentation.",
        pros: ["Strong security", "Granular access control", "Improved user experience", "Reduced attack surface"],
        cons: ["Higher cost", "Complex implementation", "Requires dedicated security resources"],
        pricing: "₹12,000–30,000/year",
        pricingModel: "Monthly subscription",
        officialWebsite: "Various providers",
        pricingPage: "Contact for custom quote",
        setupTime: "2-4 months with security team",
        recommendedTimeline: "Within 3 months",
        requiredResources: "Security team with zero trust experience",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "80–160",
        priority: "Medium",
        estimatedCostRange: "₹12,000–30,000/year",
        icon: Network,
        calculateEffort: (users: number | string) => {
          const numUsers = typeof users === 'string' ? parseInt(users) : users
          const baseEffort = 80
          const additionalEffort = Math.ceil(numUsers * 1)
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 80}`
        },
        calculateTimeline: (users: number | string) => {
          const numUsers = typeof users === 'string' ? parseInt(users) : users
          const baseTimeline = 30
          const additionalTimeline = Math.ceil(numUsers / 5)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} days`
        },
        calculateCost: (users: number | string) => {
          // Cost based on number of users
          const minCost = users * 20 * 12
          const maxCost = users * 50 * 12
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
        },
      },
    ],
  },
  {
    id: 16,
    category: "Mobile Device Security",
    text: "Does your organization have a mobile device security policy in place?",
    description: "Mobile device security protects company data on mobile devices.",
    helpText: "This includes password protection, encryption, and remote wipe capabilities.",
    icon: type,
    subQuestion: {
      id: "mobile-devices-number",
      text: "How many mobile devices need to be secured?",
      placeholder: "Enter number of devices",
      unit: "devices",
      defaultValue: 25,
      min: 1,
    },
    recommendations: [
      {
        id: "mobile-device-management",
        tier: "standard",
        name: "Mobile Device Management (MDM)",
        shortDescription: "Manage and secure mobile devices",
        description: "Mobile Device Management (MDM) provides centralized management and security for mobile devices.",
        pros: ["Centralized management", "Policy enforcement", "Remote wipe capabilities", "App management"],
        cons: ["Subscription cost per device", "Requires configuration and maintenance", "Potential privacy concerns"],
        pricing: "₹900–3,000/year",
        pricingModel: "Monthly subscription",
        officialWebsite: "Various providers",
        pricingPage: "Contact for custom quote",
        setupTime: "1-2 weeks with IT support",
        recommendedTimeline: "Within 1 month",
        requiredResources: "IT administrator with mobile device experience",
        organizationSize: "Organizations of all sizes",
        effortHours: "24–40",
        priority: "High",
        estimatedCostRange: "₹900–3,000/year",
        icon: type,
        calculateEffort: (devices: number | string) => {
          const numDevices = typeof devices === 'string' ? parseInt(devices) : devices
          const baseEffort = 4
          const additionalEffort = Math.ceil(numDevices * 0.1)
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 4}`
        },
        calculateTimeline: (devices: number | string) => {
          const numDevices = typeof devices === 'string' ? parseInt(devices) : devices
          const baseTimeline = 7
          const additionalTimeline = Math.ceil(numDevices / 10)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} days`
        },
        calculateCost: (devices: number | string) => {
          // Cost based on number of devices
          const minCost = devices * 3 * 12
          const maxCost = devices * 10 * 12
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
        },
      },
      {
        id: "mobile-application-management",
        tier: "standard",
        name: "Mobile Application Management (MAM)",
        shortDescription: "Secure mobile applications",
        description:
          "Mobile Application Management (MAM) provides security for mobile applications without managing the entire device.",
        pros: [
          "Secure mobile applications",
          "Policy enforcement",
          "App whitelisting/blacklisting",
          "Reduced privacy concerns",
        ],
        cons: ["Limited device management", "Requires compatible applications", "Subscription cost per user"],
        pricing: "₹600–1,500/year",
        pricingModel: "Monthly subscription",
        officialWebsite: "Various providers",
        pricingPage: "Contact for custom quote",
        setupTime: "1-2 weeks with IT support",
        recommendedTimeline: "Within 1 month",
        requiredResources: "IT administrator with mobile device experience",
        organizationSize: "Organizations of all sizes",
        effortHours: "24–40",
        priority: "High",
        estimatedCostRange: "₹600–1,500/year",
        icon: type,
        calculateEffort: (devices: number | string) => {
          const numDevices = typeof devices === 'string' ? parseInt(devices) : devices
          const baseEffort = 4
          const additionalEffort = Math.ceil(numDevices * 0.1)
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 4}`
        },
        calculateTimeline: (devices: number | string) => {
          const numDevices = typeof devices === 'string' ? parseInt(devices) : devices
          const baseTimeline = 7
          const additionalTimeline = Math.ceil(numDevices / 10)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} days`
        },
        calculateCost: (devices: number | string) => {
          // Cost based on number of devices
          const minCost = devices * 2 * 12
          const maxCost = devices * 5 * 12
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
        },
      },
      {
        id: "containerization",
        tier: "premium",
        name: "Containerization",
        shortDescription: "Secure mobile applications with containerization",
        description:
          "Containerization provides a secure container for mobile applications, separating company data from personal data.",
        pros: ["Strong security", "Data separation", "Policy enforcement", "Reduced privacy concerns"],
        cons: ["Higher cost", "Requires compatible applications", "Complex implementation"],
        pricing: "₹3,000–9,000/year",
        pricingModel: "Monthly subscription",
        officialWebsite: "Various providers",
        pricingPage: "Contact for custom quote",
        setupTime: "2-4 months with security team",
        recommendedTimeline: "Within 3 months",
        requiredResources: "Security team with mobile device experience",
        organizationSize: "Medium to large organizations (50+ employees)",
        effortHours: "80–160",
        priority: "Medium",
        estimatedCostRange: "₹3,000–9,000/year",
        icon: type,
        calculateEffort: (devices: number | string) => {
          const numDevices = typeof devices === 'string' ? parseInt(devices) : devices
          const baseEffort = 80
          const additionalEffort = Math.ceil(numDevices * 1)
          const totalEffort = baseEffort + additionalEffort
          return `${totalEffort}–${totalEffort + 80}`
        },
        calculateTimeline: (devices: number | string) => {
          const numDevices = typeof devices === 'string' ? parseInt(devices) : devices
          const baseTimeline = 30
          const additionalTimeline = Math.ceil(numDevices / 5)
          const totalTimeline = baseTimeline + additionalTimeline
          return `Within ${totalTimeline} days`
        },
        calculateCost: (devices: number | string) => {
          // Cost based on number of devices
          const minCost = devices * 5 * 12
          const maxCost = devices * 15 * 12
          return `₹${minCost.toLocaleString('en-IN')}–${maxCost.toLocaleString('en-IN')}/year`
        },
      },
    ],
  },
  {
    id: "network-count",
    text: "How many networks need to be segmented?",
    options: ["Enter number of networks"],
    defaultValue: 1,
    min: 1,
    recommendations: [],
    placeholder: "Enter number of networks",
    unit: "networks"
  },
  {
    id: "data-size",
    text: "What is the total size of data to be backed up?",
    options: ["Enter data size"],
    defaultValue: 100,
    min: 1,
    recommendations: [],
    placeholder: "Enter data size",
    unit: "GB"
  },
]

