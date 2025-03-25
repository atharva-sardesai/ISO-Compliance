import type { Answer } from "@/components/compliance-assessment"
import type { Question } from "@/lib/questions-data"
import { cn } from "@/lib/utils"
import { CheckCircle2, Circle, AlertCircle } from "lucide-react"

interface QuestionNavigatorProps {
  questions: Question[]
  answers: Answer[]
  currentQuestionIndex: number
  onNavigate: (index: number) => void
}

export function QuestionNavigator({ questions, answers, currentQuestionIndex, onNavigate }: QuestionNavigatorProps) {
  // Group questions by category
  const questionsByCategory = questions.reduce(
    (acc, question, index) => {
      if (!acc[question.category]) {
        acc[question.category] = []
      }
      acc[question.category].push({ question, index })
      return acc
    },
    {} as Record<string, Array<{ question: Question; index: number }>>,
  )

  return (
    <div className="w-64 bg-slate-50 border-l h-full overflow-y-auto p-4 space-y-6">
      <div className="text-sm font-medium text-slate-900">Assessment Progress</div>
      
      {Object.entries(questionsByCategory).map(([category, items]) => (
        <div key={category} className="space-y-2">
          <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">{category}</div>
          
          <div className="space-y-1">
            {items.map(({ question, index }) => {
              const answer = answers[index]
              const isAnswered = answer !== undefined
              const isCurrent = index === currentQuestionIndex
              
              return (
                <button
                  key={question.id}
                  onClick={() => onNavigate(index)}
                  className={cn(
                    "w-full text-left px-2 py-1.5 rounded text-sm flex items-center gap-2 transition-colors",
                    isCurrent && "bg-blue-100 text-blue-900",
                    !isCurrent && "hover:bg-slate-100",
                    "group"
                  )}
                >
                  <div className="flex-shrink-0">
                    {isAnswered ? (
                      answer.compliant ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-amber-500" />
                      )
                    ) : (
                      <Circle className="h-4 w-4 text-slate-300 group-hover:text-slate-400" />
                    )}
                  </div>
                  <div className="truncate flex-1">
                    {question.text.length > 50 ? `${question.text.slice(0, 50)}...` : question.text}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
} 