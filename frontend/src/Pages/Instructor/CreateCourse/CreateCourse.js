import React, { useState } from 'react';
import './CreateCourse.css'
import InstructorNavBar from '../InstructorNavBar/InstructorNavBar'
import axios from 'axios';
import MultipleSubtitleDivs from './MultipleSubtitlesDivs';

/*
    createCourseOnClick => 
        1-create course with em

*/

function CreateCourse() {
    const InstructorName = "sara saad"
    const SubtitleNumber = "1"
    var Subtitles


    const [SubtitleNum , setSubtitleNum] = useState(1)
    const SubtitleNumhandler = (event)=>{setSubtitleNum(SubtitleNum+1)}

    const [Exercise , setExercise] = useState([])
    const Exercisehandler = (event)=>{setExercise(event.target.value)}

    const [CourseID , setCourseID] = useState([])
    const CourseIDhandler = (event)=>{setCourseID(event.target.value)}

    const [Title , setTitle] = useState([])
    const courseTitlehandler = (event)=>{setTitle(event.target.value)}
    
    const [Subject , setSubject] = useState([])
    const courseSubjecthandler = (event)=>{setSubject(event.target.value)}
    
    const [TotalHours, setTotalHours] = useState([])
    const totalHourshandler = (event)=>{setTotalHours(event.target.value)}
    
    const [Price , setPrice] = useState([])
    const coursePricehandler = (event)=>{setPrice(event.target.value)}
    
    const [VideoPreviewLink , setVideoPreviewLink] = useState([])
    const videoPreviewLinkhandler = (event)=>{setVideoPreviewLink(event.target.value)}
    
    const [shortSummary , setshortSummary] = useState([])
    const summaryhandler = (event)=>{setshortSummary(event.target.value)}
    
    const [CertificateTemplate , setCertificateTemplate] = useState([])
    const certificateTemplatehandler = (event)=>{setCertificateTemplate(event.target.value)}
            
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

    const [CreateButton,setCreateButton] = useState(false)
    const handleCreateButton = () => { setCreateButton(true)} 
    

    const CreateExcerciseProp = (Title,InstructorName,SubtitleNumber,Question,Choice1,Choice2,Choice3,Choice4,MaxGrade,CorrectAnswer)=>{
        courseTitlehandler(Title) 
        SubtitleNumhandler(SubtitleNumber)
        questionhandler(Question)
        choice1handler(Choice1)
        Choice2handler(Choice2)
        Choice3handler(Choice3)
        Choice4handler(Choice4)
        maxGradehandler(MaxGrade)
        correctAnswerhandler(CorrectAnswer)
        Exercisehandler(CreateExcercise())
    }

    const CreateExcercise = async(req,res)=>{
        const Ex = (await axios.get(`http://localhost:9000/course/createExcercise/${Title}/${InstructorName}/${SubtitleNumber}/${Question}/${Choice1}/${Choice2}/${Choice3}/${Choice4}/${MaxGrade}/${CorrectAnswer}`).res.data)
        return Ex._id
    }


     const createSubtitleProp = (CourseID,SubtitleHours,VideoLink,ShortVideoDescription,Exercise,subtitleNumber)=>{
        CourseIDhandler(CourseID) 
        subtitleHourshandler(SubtitleHours)
        videolinkhandler(VideoLink)
        videoDescriptionhandler(ShortVideoDescription)
        Exercisehandler(Exercise)
        Choice3handler(subtitleNumber)

        createSubtitle()
    }
     const createSubtitle = async(req,res)=>{
        const CourseID = ''
        const VideoLink = ''
        const ShortVideoDescription = ''
        const Exercise = ''
        const subtitleNumber = ''
        return (await axios.get(`http://localhost:9000/course/createSubtitle/${CourseID}/${TotalHours}/${VideoLink}/${ShortVideoDescription}/${Exercise}/${subtitleNumber}`))
     }

     const GetExcercise = async(req,res)=>{
        return (await axios.get(`http://localhost:9000/course/getExcercise/${Title}/${InstructorName}/${SubtitleNumber}/${Question}`))
     }
    
    const AddCourse = async(req,res)=>{
        return (await axios.get(`http://localhost:9000/course/createCourse/${InstructorName}/${Title}/${Subject}/${TotalHours}/${Price}/${VideoPreviewLink}/${shortSummary}/${CertificateTemplate}/${Subtitles}`))
     }
     
     const FillSubtitlesArray = async(req,res)=>{
        Subtitles = new Array(SubtitleNum) 

        for(let i=0; i < SubtitleNum; i++ ){
            CreateExcercise()
            var ExcerciseID = (await GetExcercise().data._id)
            Subtitles[SubtitleNum][0] = SubtitleHours
            Subtitles[SubtitleNum][1] = videolink
            Subtitles[SubtitleNum][2] = VideoDescription
            Subtitles[SubtitleNum][3] = ExcerciseID
        }
        return Subtitles
     }

     const CreateCoursehandler = async(req,res)=>{
        CreateExcercise()
        // Subtitles = (await FillSubtitlesArray())
        // await(AddCourse())
    }

  
    return (
    <div>
        <InstructorNavBar/>
        <div className='createcourse_body'>
        <h1 className='createcourse_courseinputs_h1'> {Title},{Subject},{TotalHours},{Price},{VideoPreviewLink},{shortSummary},{CertificateTemplate}</h1>
            <div className='AllSubtitlesDiv'>
                <input type='text' placeholder='Course Title' className='createcourse_courseinputs' name="CourseTitle" onChange={courseTitlehandler}></input> 
                <input type='text' placeholder='Course Subject' className='createcourse_courseinputs' name="CourseSubject" onChange={courseSubjecthandler}></input> 
                <input type='number' placeholder='Total Hours' className='createcourse_courseinputs' name="TotalHours" onChange={totalHourshandler}></input> 
                <input type='number' placeholder='Course Price' className='createcourse_courseinputs' name="CoursePrice" onChange={coursePricehandler}></input> 
                <input type='url' placeholder='Video Preview Link' className='createcourse_courseinputs' name="VideoPreviewLink" onChange={videoPreviewLinkhandler}></input> 
                <input type='text' placeholder='short summary' className='createcourse_courseinputs' name="summary" onChange={summaryhandler}></input> 
                <input type='text' placeholder='Certificate Template' className='createcourse_courseinputs' name="CertificateTemplate" onChange={certificateTemplatehandler}></input> 
            </div>      
           
            <div className='createcourse_allSubtitles_div'>
                <h1 className='createcourse_courseinputs_h1'>{SubtitleHours},{videolink},{VideoDescription},{Question},{MaxGrade},{Choice1},{Choice2},{Choice3},{Choice4},{CorrectAnswer}</h1>
                <div>
                    <h1 className='createcourse_courseinputs_h1'>Subtitles:</h1> <button onClick={SubtitleNumhandler}>+</button>
                </div>

                <div><MultipleSubtitleDivs createSubtitleProp = {createSubtitleProp} CreateExcerciseProp = {CreateExcerciseProp} SubtitlesNum = {SubtitleNum} CreateButton = {CreateButton} Title={Title} InstructorName={InstructorName}/></div>
            <br></br>
            </div>
            <button className='CreateCourse_btn' onClick={handleCreateButton}>Create Course</button> {/*CreateCoursehandler*/}
        </div>
    </div>
  )
}

export default CreateCourse


     /*
        FillSubtitlesArray{
        subtitles=[],
            for(int i=0 ; #ofSubtitleDivs ; i++ ){
                ExcerciseID = (create excercise => retrun ExcerciseID)
                //get excercise subtitle# => return subtitle#
                subtitles[subtitle#][0] = (Hours)
                subtitles[subtitle#][1] = (Link)
                subtitles[subtitle#][2] = (Description)
                subtitles[subtitle#][3] = (ExcerciseID) 
            }
        return subtitles;
        }

        createCourse(with values + (FillSubtitlesArray));
    */
  