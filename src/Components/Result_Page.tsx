import React, { useState } from 'react'
import './data.css'
import img1 from '../assets/quiz.png'
import img2 from '../assets/mil1.png'
import {Button} from 'react-bootstrap'
import App from '../App'

type result = {
    username: string
    score: number
    quizlength: number
}

const Resultpage: React.FC<result> = ({ username, score, quizlength }) => {
   
    const [home,sethome] = useState(false)

    const Restart=()=>{
        sethome(true)
    }

    if(home){
        return (
            <App />
        )
    }
   
    return (

        <div className="container" style={{ marginTop: "30px", opacity: 0.9, clear: 'both' }} >
           <div className="row">
                <div className="col col-lg-1 col-md-1 col-sm-1 col-1" >
                    <img src={img1} id="alice" width='150px' alt="Img1" />
                </div>
                <div className="col col-lg-8 col-md-10  col-sm-10 col-10" style={{textAlign:'center',paddingTop:'30px'}} >
                    <img src={img2} id="data" width='200px' alt="Img2" />
                </div>
                <div className="col col-lg-1 col-md-1  col-sm-1 col-1" >
                    <img src={img1} id="alice" width='150px' alt="Img3" />
                </div>
            </div>
        
        <div className="row">
            <div className="col col-lg-3 col-md-0 col-0 col-sm-0"></div>
            <div className="col col-lg-6 col-md-12 col-sm-12 col-12" style={{backgroundColor:'#1D15CB',boxShadow:'10px 20px 10px white',textAlign:'center',marginTop:'60px',paddingTop:'20px',color:'white',borderRadius:'40px'}}>
            <h3 style={{fontSize:'30px',fontFamily:'sans-serif'}}>Result</h3>
            <p style={{fontSize:'25px',fontFamily:'sans-serif'}}>Your Final Score Is {score} Out Of {quizlength}</p>

            </div>
            <div className="col col-lg-3 col-md-0 col-sm-0 col-0"></div>
        </div>

        <div className="row">
            <div className="col col-lg-3 ">

            </div>
            <div className="col col-lg-6 col-md-12 col-sm-12 col-12" style={{textAlign:'center'}}>
            <Button type="button" variant="success" style={{ background: "linear-gradient(45deg,white,pink,white)", color: 'black', width: '30%', margin: '20px 10%', border: '2px solid red', borderRadius: '10px' }}
            onClick={()=>{Restart()}}
            >
                                <b>Restart</b></Button>
               

            </div>
            <div className="col col-lg-3">

            </div>
        </div>
        </div>
    )
}

export default Resultpage