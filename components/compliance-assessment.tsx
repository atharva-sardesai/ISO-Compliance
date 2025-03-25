"use client"

import { useState } from "react"
import { WelcomeScreen } from "@/components/welcome-screen"
import { QuestionnaireScreen } from "@/components/questionnaire-screen"
import { ResultsScreen } from "@/components/results-screen"
import { questionsData } from "@/lib/questions-data"
import { QuestionNavigator } from "@/components/question-navigator"

export type Answer = {
  questionId: number
  compliant: boolean
  subQuestionValue?: number
  selectedRecommendationId?: string
}

export type AssessmentState = "welcome" | "questionnaire" | "results"

export function ComplianceAssessment() {
  const [currentState, setCurrentState] = useState<AssessmentState>("welcome")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])

  const handleStartAssessment = () => {
    setCurrentState("questionnaire")
  }

  const handleAnswerQuestion = (compliant: boolean) => {
    const newAnswers = [...answers]

    // If we already have an answer for this question, preserve the subQuestionValue and selectedRecommendationId
    const existingAnswer = newAnswers[currentQuestionIndex]

    newAnswers[currentQuestionIndex] = {
      questionId: questionsData[currentQuestionIndex].id,
      compliant,
      subQuestionValue: existingAnswer?.subQuestionValue,
      selectedRecommendationId: existingAnswer?.selectedRecommendationId,
    }

    setAnswers(newAnswers)
  }

  const handleSubQuestionChange = (value: number) => {
    const newAnswers = [...answers]

    // If we don't have an answer yet, create one
    if (!newAnswers[currentQuestionIndex]) {
      newAnswers[currentQuestionIndex] = {
        questionId: questionsData[currentQuestionIndex].id,
        compliant: false,
        subQuestionValue: value,
      }
    } else {
      // Otherwise update the existing answer
      newAnswers[currentQuestionIndex] = {
        ...newAnswers[currentQuestionIndex],
        subQuestionValue: value,
      }
    }

    setAnswers(newAnswers)
  }

  const handleSelectRecommendation = (questionId: number, recommendationId: string) => {
    const newAnswers = [...answers]

    // Find the question index
    const questionIndex = currentQuestionIndex

    // If we don't have an answer yet, create one
    if (!newAnswers[questionIndex]) {
      newAnswers[questionIndex] = {
        questionId,
        compliant: false,
        selectedRecommendationId: recommendationId,
      }
    } else {
      // Otherwise update the existing answer
      newAnswers[questionIndex] = {
        ...newAnswers[questionIndex],
        selectedRecommendationId: recommendationId,
      }
    }

    setAnswers(newAnswers)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setCurrentState("results")
    }
  }

  const handleNavigateToQuestion = (index: number) => {
    setCurrentQuestionIndex(index)
    
    // Initialize answer if it doesn't exist
    const newAnswers = [...answers]
    if (!newAnswers[index]) {
      newAnswers[index] = {
        questionId: questionsData[index].id,
        compliant: false,
      }
      setAnswers(newAnswers)
    }
  }

  const handleRestartAssessment = () => {
    setCurrentState("welcome")
    setCurrentQuestionIndex(0)
    setAnswers([])
  }

  // Calculate compliance percentage for real-time tracking
  const calculateCompliancePercentage = () => {
    if (answers.length === 0) return 0
    const compliantCount = answers.filter((answer) => answer && answer.compliant).length
    return Math.round((compliantCount / answers.length) * 100)
  }

  return (
    <div className="container mx-auto px-0 py-8 max-w-[90rem] h-[calc(100vh-4rem)]">
      {currentState === "welcome" && (
        <div className="px-4">
          <WelcomeScreen onStart={handleStartAssessment} />
        </div>
      )}

      {currentState === "questionnaire" && (
        <div className="flex h-full">
          <div className="flex-1 px-4 overflow-y-auto">
            {answers.length > 0 && (
              <div className="mb-4 bg-white p-3 rounded-lg shadow-sm border flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">Current Compliance Score:</span>
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {calculateCompliancePercentage()}% Compliant
                </span>
              </div>
            )}

            <QuestionnaireScreen
              question={questionsData[currentQuestionIndex]}
              currentIndex={currentQuestionIndex}
              totalQuestions={questionsData.length}
              onAnswer={handleAnswerQuestion}
              onSubQuestionChange={handleSubQuestionChange}
              onSelectRecommendation={handleSelectRecommendation}
              onNext={handleNextQuestion}
              selectedAnswer={answers[currentQuestionIndex]?.compliant}
              subQuestionValue={answers[currentQuestionIndex]?.subQuestionValue}
              selectedRecommendationId={answers[currentQuestionIndex]?.selectedRecommendationId}
              onNavigate={handleNavigateToQuestion}
            />
          </div>
          
          <QuestionNavigator
            questions={questionsData}
            answers={answers}
            currentQuestionIndex={currentQuestionIndex}
            onNavigate={handleNavigateToQuestion}
          />
        </div>
      )}

      {currentState === "results" && (
        <div className="px-4">
          <ResultsScreen answers={answers} questions={questionsData} onRestart={handleRestartAssessment} />
        </div>
      )}
    </div>
  )
}

