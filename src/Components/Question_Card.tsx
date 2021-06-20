import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import './data.css'
import img1 from '../assets/quiz.png'
import img2 from '../assets/mil1.png'


type QuestionType = {
    question: string
    options: string[]
    answer: string
    callback: (e: React.FormEvent<EventTarget>, ans: string) => void
    questionno: any
    score: any
}

export const QuestionCard: React.FC<QuestionType> = ({ question, options, answer, callback, questionno, score }) => {
    // console.log(question,options,answer)

    let [selectedAns, setSelectedAns] = useState("");
   
    const handleSelection = (ev: any) => {

        setSelectedAns(ev.target.value);

    }

    return (
        <>

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
                <div className="row" >
                    <div className="col-lg-2"></div>
                    <div className="col col-lg-8" >
                        <div style={{ width: '150px', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }}>
                            <b style={{ border: '4px solid white', borderRadius: '20px', backgroundColor: 'white', paddingLeft: '10px', paddingRight: '10px' }}>Score : {score}</b>
                        </div>
                        <br />   <b style={{ border: '4px solid white', borderRadius: '20px', backgroundColor: 'white  ', marginTop: '40px' }}>Question No : {questionno + 1}</b>


                        <br />

                        <h3 style={{ border: '4px solid white', color: 'white', borderRadius: '20px', backgroundColor: '#4C44EC  ', paddingLeft: '20px' }}>{question}</h3>

                    </div>
                    <div className="col-lg-2"></div>

                </div>


                <form onSubmit={(e) => callback(e, selectedAns)} style={{ paddingBottom: '40px' }}>
                    {

                        options.map((opt: string, ind: number) => {
                            return (

                                <div key={ind} style={{ width: '65%', marginLeft: 'auto', marginRight: 'auto' }}>

                                    <div >
                                        <div className="row">
                                            <div className="col-lg-3" style={{ textAlign: 'right', marginTop: '10px', display: 'inline' }}>
                                                {/* <b style={{backgroundColor:'white',fontSize:'25px',border:'2px solid #4C44EC',borderRadius:'10px'}}>&nbsp;{++ind}&nbsp;</b> */}
                                            </div>
                                            <div className="col-lg-5" style={{ backgroundColor: '#4C44EC', color: 'white', display: 'inline', marginLeft: '-15px', paddingTop: '10px', border: '1px solid red', marginTop: '3px', borderRadius: '10px' }}>
                                                <div className="radio" style={{ display: 'inline' }} > <label className="radio"  >

                                                    <input
                                                        type="radio"
                                                        name="opt"
                                                        required
                                                        value={opt}
                                                        checked={selectedAns === opt}
                                                        onChange={handleSelection}

                                                    />
                                                    <b className="opt"> {opt}</b>
                                                </label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                </div>

                            )
                        })
                    }

                    <div className="row">
                        <div className="col col-lg-4">

                        </div>
                        <div className="col-lg-6" style={{ marginTop: '20px' }}>
                            <Button type="submit" variant="success" style={{ background: "linear-gradient(45deg,white,pink,white)", color: 'black', width: '30%', margin: '20px 10%', border: '2px solid red', borderRadius: '10px' }}>
                                <b>Submit</b></Button>
                            {/* <input type="submit" style={{display:'block',width:'100%'}}/> */}
                        </div>
                        <div className="col col-lg-4">

                        </div>

                    </div>


                </form>
            </div>
        </>


    )

}