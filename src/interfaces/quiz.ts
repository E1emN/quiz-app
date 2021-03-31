export interface IQuiz {
    categoty: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    options: string[],
    question: string,
    type: string,
    length: number
}