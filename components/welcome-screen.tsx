"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Building, FileText, CheckCircle, ClockIcon } from "lucide-react"

interface WelcomeScreenProps {
  onStart: () => void
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <Card className="w-full shadow-lg border-t-4 border-t-blue-600">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Shield className="h-12 w-12 text-blue-600" />
          </div>
        </div>
        <CardTitle className="text-3xl font-bold text-slate-800">ISO 27001 Compliance Assessment</CardTitle>
        <CardDescription className="text-lg mt-2">Enterprise-grade assessment tool for organizations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6 text-slate-600">
          <p className="text-center">
            This assessment will help your organization identify areas where you need to improve to meet ISO 27001
            requirements and enhance your information security posture.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <Building className="h-6 w-6 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-slate-800">For Organizations</h3>
                <p className="text-sm mt-1">
                  Tailored for startups and enterprises seeking to improve their security compliance
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-slate-800">Enterprise Solutions</h3>
                <p className="text-sm mt-1">
                  Recommendations for enterprise-grade tools and services with pricing estimates
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <ClockIcon className="h-6 w-6 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-slate-800">Implementation Guidance</h3>
                <p className="text-sm mt-1">Detailed effort estimates and timelines for each recommendation</p>
              </div>
            </div>

            <div className="flex gap-3">
              <FileText className="h-6 w-6 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-slate-800">Comprehensive Reporting</h3>
                <p className="text-sm mt-1">Export detailed compliance reports organized by security categories</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center pb-8">
        <Button size="lg" className="px-8 py-6 text-lg" onClick={onStart}>
          Start Assessment
        </Button>
      </CardFooter>
    </Card>
  )
}

