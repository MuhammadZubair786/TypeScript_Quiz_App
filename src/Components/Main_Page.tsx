import React, { useState } from 'react'
import './data.css'
import img1 from '../assets/quiz.png'
import img2 from '../assets/mil1.png'
import q1 from '../assets/q1.png'
import { Button } from 'react-bootstrap';
import SubmitForms from '../Components/Submit_Form'

const Main_Page = () => {

    let [name, setname] = useState('')

    let [selectedOption, setselectedOption] = useState('')

    let [selectedquestion, setselectedquestion] = useState(0)

    let [submitform, setsubmit] = useState(false)

    const ChangeSelectValue = (e: any) => {
        setselectedOption(e.target.value);
    }

    const selectedquestionChange = (e: any) => {
        setselectedquestion(e.target.value)
    }

    const getdata = () => {
        if (name === "") {
            alert("Plz Enter Your Name")
        }
        else if (selectedOption === '') {
            alert("Select Difficult Level")
        }
        else if (selectedquestion === 0) {
            alert("Select Questions")
        }

        else {
            setsubmit(true)
        }
    }

    if (submitform) {
        return (
            <div>
                <SubmitForms username={name} selectoption={selectedOption} selectquestion={selectedquestion} />
            </div>
        )
    }

    return (
        <div className="container">
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
               <div className="col col-lg-12 col-md-12 col-sm-12 col-12" style={{textAlign:'center'}}>
                   <img src={q1} width="200px" style={{marginLeft:'10%'}} alt="Quiz Logo"/>
               </div>
           </div>

            <form >

                <div className="row" style={{ textAlign: 'center' }} >
                    <div className="col col-lg-3 col-md-1 col-sm-3 col-3" >

                    </div>
                    <div className="col col-lg-6 col-md-10 col-sm-12 col-12" style={{ paddingTop: '30px', backgroundColor: '#3248EC ',boxShadow:'20px 20px 20px white ' }}>
                        <div className="row">
                            <div className="col col-lg-12 col-md-12 col-sm-12 col-12" style={{ borderBottom: '0px solid grey', backgroundColor: '#3248EC ' }}>
                                <label  style={{color:'white'}}><b>Enter Your Name&emsp;&emsp;:&emsp;&emsp;</b></label>
                                <input type="text" required value={name} onChange={(e) => setname(e.target.value)} style={{ border: '1px solid grey', height: '40px', width: '300px' }} />

                            </div>



                        </div>

                    </div>
                    <div className="col col-lg-3 col-md-3 col-sm-3 col-3">

                    </div>
                </div>

                <div className="row" style={{ textAlign: 'center' }}>
                    <div className="col col-lg-3 col-md-1 col-sm-12 col-12"></div>
                    <div className="col col-lg-6 col-md-10 col-sm-12 col-12" style={{ borderBottom: '0px solid grey', backgroundColor: '#3248EC ',boxShadow:'20px 20px 20px white ' }}>
                        <div className="row">
                            <div className="col col-lg-12 col-md-12 col-sm-12 col-12" style={{ paddingTop: '20px', }}>

                                <label  style={{color:'white'}}><b>Select Level &nbsp;&nbsp;&emsp;&emsp;&emsp;:&emsp;&emsp;</b></label>
                                <select name="Difficult" style={{ width: '300px', height: '40px', marginRight: '-20px' }}
                                    value={selectedOption}
                                    onChange={ChangeSelectValue}
                                >


                                    <optgroup label="Select Level"></optgroup>
                                    <option value=""></option>
                                    <option value="easy">Easy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Difficult">Difficult</option>

                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-1 col-sm-12 col-12"></div>
                </div>

                <div className="row" style={{ textAlign: 'center' }}>
                    <div className="col col-lg-3 col-md-1 col-sm-12 col-12"></div>
                    <div className="col col-lg-6 col-md-10 col-sm-12 col-12" style={{ borderBottom: '0px solid grey', backgroundColor: '#3248EC ',boxShadow:'20px 20px 20px white ' }}>
                        <div className="row">
                            <div className="col col-lg-12 col-md-12 col-sm-12 col-12" style={{ paddingTop: '20px', }}>

                                <label  style={{color:'white'}}><b>Select Question &emsp;&emsp;&emsp;:&emsp;&emsp;</b></label>
                                <select name="Amount" style={{ width: '300px', height: '40px' }}
                                    placeholder="Select"
                                    value={selectedquestion}
                                    onChange={selectedquestionChange}

                                >

                                    <optgroup label="Select Question"></optgroup>
                                    <option value=""></option>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>

                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col col-lg-3 col-md-1 col-sm-12 col-12"></div>

                </div>
                <div className="row">
                    <div className="col col-lg-3 col-md-1 col-sm-12 col-12"></div>
                    <div className="col col-lg-6 col-md-10 col-sm-12 col-12" style={{
                        textAlign: 'center', paddingTop: '20px',
                        paddingBottom: '40px'
                        , backgroundColor: '#3248EC '
                        ,boxShadow:'20px 20px 20px white '
                        
                    }} >
                        <Button type="button" variant="success"
                            onClick={() => { getdata() }}

                            style={{
                                background: "linear-gradient(45deg,blue,white,blue)",
                                color: 'black',
                                width: '200px',
                                border: '2px solid red', borderRadius: '10px'
                            }}>
                            <b >Submit</b></Button>

                    </div>
                    <div className="col col-lg-3 col-md-3 col-sm-3 col-3"></div>
                </div>


            </form>

        </div>
    )

}

export default Main_Page;