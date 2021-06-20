import React, { useEffect, useState } from 'react';
import { userdata } from '../Type/quiz_type';
import { QuestionCard } from '../Components/Question_Card';
import  {getQuizDetails} from  '../Services/quiz_service'
import {QuizType} from '../Type/quiz_type'
import Resultpage from './Result_Page'
import { Spinner } from 'react-bootstrap';

const  SubmitForms:React.FC<userdata>=({username,selectoption,selectquestion})=> {

  let [quiz, setQuiz] = useState<QuizType[]>([])
  let [currentstate,setcurrent] = useState(0)
  let [score,setscore] = useState(0)
  let [showResult,setShowResult] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const questions: QuizType[] = await getQuizDetails(selectquestion, 'easy');
      setQuiz(questions)
    }
    fetchData();
  }, [selectquestion])
  console.log("Quiz :",quiz)

  const handleSubmit  = (e:React.FormEvent<EventTarget>,userans:string) =>{
    e.preventDefault();
    
    const currentans:QuizType = quiz[currentstate]

    console.log("correct answer : ",currentans.answer,"User Selection :",userans )

    if(userans === currentans.answer){
     setscore (++score)
     console.log(score)
    }
    
    if(currentstate !== quiz.length-1){
    setcurrent(++currentstate)
    }
    else{
      setShowResult(true)  
    }
  }


  if(showResult){
    console.log(username)
    return(   
        <>
        <Resultpage username={username} score={score} quizlength={quiz.length}  />
        </>   
    )
  }




  if(!quiz.length){
    return(
     <div style={{textAlign:'center',marginTop:'20%'}}>
      <Spinner animation="grow" variant="primary" />
  <Spinner animation="grow" variant="secondary" />
  <Spinner animation="grow" variant="success" />
  <Spinner animation="grow" variant="danger" />
  <Spinner animation="grow" variant="warning" />
     </div>
    )
  }
  else{

  return (
    <div className="App">
      <QuestionCard
      question = {quiz[currentstate].question}
      options = {quiz[currentstate].option}
      answer = {quiz[currentstate].answer}
      callback = {handleSubmit}
      questionno = {currentstate}
      score = {score}
    />
     
     
    </div>
  );
}

}
export default SubmitForms;
