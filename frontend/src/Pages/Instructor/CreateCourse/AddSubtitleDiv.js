import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './CreateCourse.css'
import { ButtonBlue } from '../../../GeneralCss';


const AddSubtitleDiv = (props) => {
    const Title = props.Title
    const InstructorName = props.InstructorName

    const [Exercise , setExercise] = useState('')
    const Exercisehandler = (sara)=>{setExercise(sara)}


    const [SubtitleHours , setSubtitleHours] = useState([])
    const subtitleHourshandler = (event)=>{setSubtitleHours(event.target.value)}
    
    const [videolink , setvideolink] = useState([])
    const videolinkhandler = (event)=>{setvideolink(event.target.value)}
    
    const [VideoDescription , setVideoDescription] = useState([])
    const videoDescriptionhandler = (event)=>{setVideoDescription(event.target.value)}
    
    const [Question , setQuestion] = useState([])
    const questionhandler = (event)=>{setQuestion(event.target.value)}
    
    const [MaxGrade , setMaxGrade] = useState([])
    const maxGradehandler = (event)=>{setMaxGrade(event.target.value)}
    
    const [CorrectAnswer , setCorrectAnswer] = useState([])
    const correctAnswerhandler = (event)=>{setCorrectAnswer(event.target.value)}
    
    const [Choice4 , setChoice4] = useState([])
    const Choice4handler = (event)=>{setChoice4(event.target.value)}
    
    const [Choice3 , setChoice3] = useState([])
    const Choice3handler = (event)=>{setChoice3(event.target.value)}
    
    const [Choice2 , setChoice2] = useState([])
    const Choice2handler = (event)=>{setChoice2(event.target.value)}
    
    const [Choice1 , setChoice1] = useState([])
    const choice1handler = (event)=>{setChoice1(event.target.value)}

    


    const Add = () =>{
        //return false                      InstructorName1,ThisSubtitleNumber,Question1,Choice11,Choice21,Choice31,Choice41,MaxGrade1,CorrectAnswer1
        props.CreateExcerciseProp('sara saad keda kedaa',props.DivID,Question,Choice1,Choice2,Choice3,Choice4,MaxGrade,CorrectAnswer,SubtitleHours,videolink,VideoDescription)
        // props.CreateExcercise()
        //props.createSubtitleProp(SubtitleHours,videolink,VideoDescription,props.DivID)
        // props.createSubtitle()
        //Exercisehandler(Ex._id)
        //const Sub = props.createSubtitleProp(111,20,'VideoLink','ShortVideoDescription',{Exercise},props.DivID)

    }
    

  return (
        <div className='OneSubtitleDiv' id= {props.DivID} > {/* This div will be repeated with each + button click*/}
        <h1 className='ZeftcssDiv'>Subtitle Number : {props.DivID}</h1>
        {/* <h1 className='createcourse_courseinputs_h1'>{SubtitleHours},{videolink},{VideoDescription},{Question},{MaxGrade},{Choice1},{Choice2},{Choice3},{Choice4},{CorrectAnswer}</h1> */}

            <input type='number' placeholder='Subtitle Hours' className='createcourse_courseinputs' name="SubtitleHours" onChange={subtitleHourshandler}></input>
            <input type='url'  placeholder='video link' className='createcourse_courseinputs' name="videolink" onChange={videolinkhandler}></input>
            <input type='text' placeholder='Short Video Description' className='createcourse_courseinputs' name="VideoDescription" onChange={videoDescriptionhandler}></input>

            <div className='createcourse_excercise_div'>    
                <h1 className='createcourse_courseinputs_h1'>Excercise:</h1>

                <input type='text' placeholder='Question' className='createcourse_courseinputs' name="Question" onChange={questionhandler}></input>
                <input type='number' placeholder='Max Grade' className='createcourse_courseinputs' name="MaxGrade" onChange={maxGradehandler}></input>
                <input type='text' placeholder='Correct Answer' className='createcourse_courseinputs' name="CorrectAnswer" onChange={correctAnswerhandler}></input>

                <div className='createcourse_choices_div'>
                    <input type='text' placeholder='Choice #1' className='createcourse_courseinputs' name="Choice1" onChange={choice1handler}></input>
                    <input type='text' placeholder='Choice #2' className='createcourse_courseinputs' name="Choice2" onChange={Choice2handler}></input>
                    <input type='text' placeholder='Choice #3' className='createcourse_courseinputs' name="Choice3" onChange={Choice3handler}></input>
                    <input type='text' placeholder='Choice #4' className='createcourse_courseinputs' name="Choice4" onChange={Choice4handler}></input>
                </div>
                <div>
                    <ButtonBlue onClick={Add}>Create Subtitle</ButtonBlue>
                    {/* <button onClick={Add}>Create</button> */}
             {/* {props.CreateButton && props.GetExcercise() && <h1>Aywaa ana hena ahoo</h1>} */}
             </div>
            </div>

        </div>
  )
}

export default AddSubtitleDiv