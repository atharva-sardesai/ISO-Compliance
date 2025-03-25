"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "@/components/ui/chart"

interface ComplianceChartProps {
  compliantPercentage: number
  nonCompliantPercentage: number
}

export function ComplianceChart({ compliantPercentage, nonCompliantPercentage }: ComplianceChartProps) {
  const data = [
    { name: "Compliant", value: compliantPercentage },
    { name: "Non-Compliant", value: nonCompliantPercentage },
  ]

  const COLORS = ["#22c55e", "#f59e0b"]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

