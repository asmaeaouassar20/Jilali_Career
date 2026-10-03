export interface QuestionQuiz {
    indexBadge: string,
    difficulty: string,
    answer: string,
    question: string
}

export interface QuestionQuizWithOptions{
    indexBadge: string,
    difficulty: string,
    question: string,
    options: string[],
    correctAnswerIndex: number
}