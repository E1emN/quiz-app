export interface Category {
    id: number,
    name: string
};

export interface Form {
    number: string,
    category: string,
    difficulty: string,
    type: string
}

export interface Quiz {
    categoty: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    options: string[],
    question: string,
    type: string,
    length: number
};

export interface ApiResponce {
    response_code: number, 
    results: Quiz[]
};

export interface Result {
    questionNumber: number,
    question: string,
    currentAnswer: string,
    userAnswer: string,
    isCurrect: boolean
};