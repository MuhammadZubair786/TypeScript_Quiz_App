import React from 'react';
import './App.css';

// import { QuestionCard } from './Components/Question_Card';
// import  {getQuizDetails} from  './Services/quiz_service'

// import {QuizType} from './Type/quiz_type'

import Main_Page from './Components/Main_Page'
function App() {

  // let [quiz, setQuiz] = useState<QuizType[]>([])
  // let [currentstate,setcurrent] = useState(0)
  // let [score,setscore] = useState(0)
  // let [showResult,setShowResult] = useState(false)

  // useEffect(() => {
  //   async function fetchData() {
  //     // const questions: QuizType[] = await getQuizDetails(5, 'easy');
  //     // setQuiz(questions)
  //   }
  //   fetchData();
  // }, []);
  // console.log("Quiz :",quiz)

  // const handleSubmit  = (e:React.FormEvent<EventTarget>,userans:string) =>{
  //   e.preventDefault();
  //   // console.log(userans)

  //   const currentans:QuizType = quiz[currentstate]

  //   console.log("correct answer : ",currentans.answer,"User Selection :",userans )

  //   if(userans == currentans.answer){
  //    setscore (++score)
  //    console.log(score)
  //   }
    
  //   if(currentstate !== quiz.length-1){
  //   setcurrent(++currentstate)
  //   }
  //   else{
  //     setShowResult(true)
  //     // alert("Your Final Score Is "+score+"Out Of "+quiz.length)
  //     // console.log(score)
  //     // setcurrent(0)
  //     // setscore(0)
    
  //   }
  // }


  // if(showResult){
  //   return(
  //     <div>
  //       <Main_Page/>
  //     {/* <h3>Result</h3>
  //     <p>"Your Final Score Is ${score}"Out Of "{quiz.length}</p> */}
  //     </div>
  //   )
  // }




  // if(!quiz.length){
  //   return(
  //     <h1>Loading.....</h1>
  //   )
  // }
  // else{

  return (
    <div className="App">
    
      {/* <QuestionCard
      question = {quiz[currentstate].question}
      options = {quiz[currentstate].option}
      answer = {quiz[currentstate].answer}
      callback = {handleSubmit}
      questionno = {currentstate}
      score = {score}
     

      /> */}
      <Main_Page />
     
    </div>
  );
}

// }
export default App;
