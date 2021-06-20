export type QuestionType  = {
    category: string
    correct_answer: string
    difficult: string
    incorrect_answers: string[]
    question: string
    type: string
    
}

export type QuizType = {
    question : string
    answer : string
    option : string[]
    currentans : string
}

export type questionPropsType = {
    question: string
    option: string[]
    answer : string
   
}

export type userdata = {
    username :string
    selectoption:string
    selectquestion:number

}