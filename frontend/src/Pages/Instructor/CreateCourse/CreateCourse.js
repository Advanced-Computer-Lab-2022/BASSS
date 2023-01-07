import React, { useEffect, useState } from 'react';
import './CreateCourse.css'
import InstructorNavBar from '../InstructorNavBar/InstructorNavBar'
import axios from 'axios';
import MultipleSubtitleDivs from './MultipleSubtitlesDivs';
import { Button, ButtonBlue } from '../../../GeneralCss';
import { Link } from 'react-router-dom';
import InstructorProfile from '../../../components/Profiles/InstructorProfile';

/*
    createCourseOnClick => 
        1-create course with em

*/

function CreateCourse() {
    //const InstructorName = "sara saad"
    //const SubtitleNumber = "1"
    //var SubtitlesArray = [] 
    const Title1 = 'ya salam'


    const [SubtitlesArray , setSubtitlesArray] = useState([])
    const SubtitlesArrayhandler = (sara)=>{setSubtitlesArray(sara)}
    useEffect(()=>{SubtitlesArrayhandler(SubtitlesArray)});

    const [ThisSubtitleNumber , setThisSubtitleNumber] = useState('')
    const ThisSubtitleNumberhandler = (sara)=>{setThisSubtitleNumber(sara)}
    useEffect(()=>{ThisSubtitleNumberhandler(ThisSubtitleNumber)});

    const [InstructorName , setInstructorName] = useState('sara saad')
    const InstructorNamehandler = (sara)=>{setInstructorName(sara)}
    useEffect(()=>{InstructorNamehandler(InstructorName)});

    const [SubtitleNum , setSubtitleNum] = useState(1)
    const SubtitleNumhandler = (event)=>{setSubtitleNum(SubtitleNum+1)}
    //useEffect(()=>{SubtitleNumhandler(SubtitleNum)})

    const [SubtitleID , setSubtitleID] = useState([])
    const SubtitleIDhandler = (sara)=>{setSubtitleID(sara)}
    useEffect(()=>{SubtitleIDhandler(SubtitleID)});


    const [ExerciseID , setExerciseID] = useState([])
    const ExerciseIDhandler = (sara)=>{setExerciseID(sara)}
    useEffect(()=>{ExerciseIDhandler(ExerciseID)});


    const [Exercise , setExercise] = useState([])
    const Exercisehandler = (sara)=>{setExercise(sara)};
    useEffect(()=>{Exercisehandler(Exercise)});

    const [CourseID , setCourseID] = useState('')
    const CourseIDhandler = (sara)=>{setCourseID(sara)}
    useEffect(()=>{CourseIDhandler(CourseID)})

    const [Title , setTitle] = useState([])
    const courseTitlehandler = (event)=>{setTitle(event.target.value)}
    //useEffect(()=>{courseTitlehandler(Title)})
    
    const [Subject , setSubject] = useState([])
    const courseSubjecthandler = (event)=>{setSubject(event.target.value)}
    //useEffect(()=>{InstructorNamehandler(InstructorName)})
    
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
            
    const [SubtitleHours , setSubtitleHours] = useState()
    const subtitleHourshandler = (sara)=>{setSubtitleHours(sara)}
    useEffect(()=>{subtitleHourshandler(SubtitleHours)})
    
    const [videolink , setvideolink] = useState('')
    const videolinkhandler = (sara)=>{setvideolink(sara)}
    useEffect(()=>{videolinkhandler(videolink)})
    
    const [VideoDescription , setVideoDescription] = useState('')
    const videoDescriptionhandler = (sara)=>{setVideoDescription(sara)}
    useEffect(()=>{videoDescriptionhandler(VideoDescription)})
    
    const [Question , setQuestion] = useState('')
    const questionhandler = (sara)=>{setQuestion(sara)}
    useEffect(()=>{questionhandler(Question)})
    
    const [MaxGrade , setMaxGrade] = useState()
    const maxGradehandler = (sara)=>{setMaxGrade(sara)}
    useEffect(()=>{maxGradehandler(MaxGrade)})
    
    const [CorrectAnswer , setCorrectAnswer] = useState('')
    const correctAnswerhandler = (sara)=>{setCorrectAnswer(sara)}
    useEffect(()=>{correctAnswerhandler(CorrectAnswer)})
    
    const [Choice4 , setChoice4] = useState('')
    const Choice4handler = (sara)=>{setChoice4(sara)}
    useEffect(()=>{Choice4handler(Choice4)})
    
    const [Choice3 , setChoice3] = useState('')
    const Choice3handler = (sara)=>{setChoice3(sara)}
    useEffect(()=>{Choice3handler(Choice3)})
    
    const [Choice2 , setChoice2] = useState('')
    const Choice2handler = (sara)=>{setChoice2(sara)}
    useEffect(()=>{Choice2handler(Choice2)})
    
    const [Choice1 , setChoice1] = useState('')
    const choice1handler = (sara)=>{setChoice1(sara)}
    useEffect(()=>{choice1handler(Choice1)})

    const [CreateButton,setCreateButton] = useState(false)
    const handleCreateButton = () => { setCreateButton(true)} 
    useEffect(()=>{handleCreateButton()})

    function zeft() {//CreateExcerciseProp('sara saad keda kedaa','ya salam et2alet kam mara fe o3"neyet el fanan el 3azeem ehab tawfeeq?','1','2','3','ehab tawfeeq nafso maya3rfsh',100,'ahmed 3oraby')
        //SubtitlesArrayhandler(SubtitlesArray.push('sara'))


        AddCourse()

    //CreateExcercise()
    //createSubtitle()
}

    
{/*Title,InstructorName,SubtitleNumber,Question,Choice1,Choice2,Choice3,Choice4,MaxGrade,CorrectAnswer*/}
const CreateExcerciseProp = (InstructorName1,ThisSubtitleNumber1,Question1,Choice11,Choice21,Choice31,Choice41,MaxGrade1,CorrectAnswer1,SubtitleHours1,VideoLink1,ShortVideoDescription1)=>{
    
        //courseTitlehandler('ya salam') 
        InstructorNamehandler(InstructorName1)
        ThisSubtitleNumberhandler(ThisSubtitleNumber1)
        questionhandler(Question1)
        choice1handler(Choice11)
        Choice2handler(Choice21)
        Choice3handler(Choice31)
        Choice4handler(Choice41)
        maxGradehandler(MaxGrade1)
        correctAnswerhandler(CorrectAnswer1)

        const CreateExcercise1 = async(req,res)=>{

            await axios.get(`http://localhost:9000/course/createExcercise/${Title1}/${InstructorName1}/${ThisSubtitleNumber1}/${Question1}/${Choice11}/${Choice21}/${Choice31}/${Choice41}/${MaxGrade1}/${CorrectAnswer1}`).then(
                (res) => {
                    const Ex1 = res.data
                    createSubtitle1(SubtitleHours1,VideoLink1,ShortVideoDescription1,ThisSubtitleNumber1,Ex1.excercise._id)
                    ExerciseIDhandler(Ex1.excercise._id)
                })
        }
        CreateExcercise1()
        //return true

    }


            //Title1,InstructorName1,SubtitleNumber1,Question1,Choice11,Choice21,Choice31,Choice41,MaxGrade1,CorrectAnswer1 
    const CreateExcercise = async(req,res)=>{

        await axios.get(`http://localhost:9000/course/createExcercise/${Title1}/${InstructorName}/${ThisSubtitleNumber}/${Question}/${Choice1}/${Choice2}/${Choice3}/${Choice4}/${MaxGrade}/${CorrectAnswer}`).then(
            (res) => {
                const Ex1 = res.data
 
                ExerciseIDhandler(Ex1.excercise._id)
            })
    }


     const createSubtitleProp = (SubtitleHours1,VideoLink1,ShortVideoDescription1,ThisSubtitleNumber1)=>{
        //CourseIDhandler(CourseID) 
        subtitleHourshandler(SubtitleHours1)
        videolinkhandler(VideoLink1)
        videoDescriptionhandler(ShortVideoDescription1)
        //Exercisehandler(Exercise)
        ThisSubtitleNumberhandler(ThisSubtitleNumber1)
        const S = () =>{
            createSubtitle1()

        }
                //SubtitlesArrayhandler(SubtitlesArray.push(SubtitleID._id))
         }

    const createSubtitle1 = (SubtitleHours1,VideoLink1,ShortVideoDescription1,ThisSubtitleNumber1,ExerciseID1) =>{ 
        const S = async(req,res)=>{
                    await axios.get(`http://localhost:9000/course/createSubtitle/${SubtitleHours1}/${VideoLink1}/${ShortVideoDescription1}/${ExerciseID1}/${ThisSubtitleNumber1}`).then(
                        (res) => {
                            const Sub = res.data
                            SubtitleIDhandler(Sub.subzeft._id)
                            SubtitlesArray.push(Sub.subzeft._id)
                            SubtitlesArrayhandler(SubtitlesArray)
                            //SubtitleIDhandler(Sub.subzeft._id)
                            alert('Subtitle Created')
            
                        })
                    }
                    S()
        }

    
     const createSubtitle = async(req,res)=>{

        await axios.get(`http://localhost:9000/course/createSubtitle/${SubtitleHours}/${videolink}/${VideoDescription}/${ExerciseID}/${ThisSubtitleNumber}`).then(
            (res) => {
                const Sub = res.data
                SubtitleIDhandler(Sub.subzeft._id)
                SubtitlesArray.push(Sub.subzeft._id)
                SubtitlesArrayhandler(SubtitlesArray)
                //SubtitleIDhandler(Sub.subzeft._id)

            })
            //SubtitlesArrayhandler(SubtitlesArray.push(SubtitleID._id))
     }

     const GetExcercise = async(req,res)=>{
        await axios.get(`http://localhost:9000/course/getExcercise/ya salam/sara saad keda kedaa/2/42`).then(
            (res) => {
                const Ex1 = res.data
                ExerciseIDhandler(Ex1.excercise._id)
                //alert(ExerciseID._id)
            })
            return ExerciseID
         
    }

    const AddId = async(req,res)=>{
        var C = CourseID
        for(let i = 0 ; i<SubtitlesArray.length-1 ; i++){
            var AOfI = SubtitlesArray[i];
            var AOfI2 = SubtitlesArray[i+1];

            await axios.get(`http://localhost:9000/course/getSubtitleAndUpdate/${AOfI}/${C}`).then(
            await axios.get(`http://localhost:9000/course/getSubtitleAndUpdate/${AOfI2}/${C}`))
        }         
    }
    
    const AddCourse = async(req,res)=>{             //${InstructorName}/${Title}/${Subject}/${TotalHours}/${Price}/${VideoPreviewLink}/${shortSummary}/${CertificateTemplate}/${Subtitles}
                  //createCourse/:InstructorName/:Title/:Subject/:TotalHours/:Price/:VideoPreviewLink/:shortSummary/:CertificateTemplate/:Subtitles  
        const Subtitles1 = ['sara']
        const Data={
            InstructorName: InstructorName,
            Title:Title,
            Subject:Subject,
            TotalHours:TotalHours,
            Price:Price,
            VideoPreviewLink:VideoPreviewLink,
            shortSummary:shortSummary,
            CertificateTemplate:CertificateTemplate,
            SubtitlesArray:SubtitlesArray
        }
        //${InstructorName}/${Title}/${Subject}/${TotalHours}/${Price}/${VideoPreviewLink}/${shortSummary}/${CertificateTemplate}/${SubtitlesArray}

        await axios({
            method: 'post',
            url: 'http://localhost:9000/course/createCourse',
            data: Data
          }).then(
            (res) => {
                const C = res.data.courseahoo._id
                CourseIDhandler(C) 
                AddId()
                alert('Course Created')

            })

            return CourseID
     }
     
    //  const FillSubtitlesArray = async(req,res)=>{
    //     //Subtitles = new Array(SubtitleNum) 

    //     for(let i=0; i < SubtitleNum; i++ ){
    //         CreateExcercise()
    //         var ExcerciseID = (await GetExcercise().data._id)
    //         Subtitles[SubtitleNum][0] = SubtitleHours
    //         Subtitles[SubtitleNum][1] = videolink
    //         Subtitles[SubtitleNum][2] = VideoDescription
    //         Subtitles[SubtitleNum][3] = ExcerciseID
    //     }
    //     return Subtitles
    //  }

     const CreateCoursehandler = async(req,res)=>{
        CreateExcercise()
        // Subtitles = (await FillSubtitlesArray())
        // await(AddCourse())
    }
    const [profile,setProfile] =useState(false);


    const profileHandler = () => {
        setProfile(!profile)
    }

  
    return (
    <div>
        <InstructorNavBar profileHandler={profileHandler}/>

<div className='createcourse_body'>
            {profile && <InstructorProfile/>}
        {!profile &&
        <div>
        {/* <h1 className='createcourse_courseinputs_h1'> {Title},{Subject},{TotalHours},{Price},{VideoPreviewLink},{shortSummary},{CertificateTemplate}</h1> */}
        <h1 className='createcourse_courseinputs_h1'>Course Info</h1>
            <div className='AllSubtitlesDiv'>
                <input type='text' placeholder='Course Title' className='createcourse_courseinputs' name="CourseTitle" onChange={courseTitlehandler}></input> 
                <input type='text' placeholder='Course Subject' className='createcourse_courseinputs' name="CourseSubject" onChange={courseSubjecthandler}></input> 
                <input type='number' placeholder='Total Hours' className='createcourse_courseinputs' name="TotalHours" onChange={totalHourshandler}></input> 
                <input type='number' placeholder='Course Price' className='createcourse_courseinputs' name="CoursePrice" onChange={coursePricehandler}></input> 
                <input type='url' placeholder=' /Path example : x51jk1h' className='createcourse_courseinputs' name="VideoPreviewLink" onChange={videoPreviewLinkhandler}></input> 
                <input type='text' placeholder='short summary' className='createcourse_courseinputs' name="summary" onChange={summaryhandler}></input> 
                <input type='text' placeholder='Certificate Template' className='createcourse_courseinputs' name="CertificateTemplate" onChange={certificateTemplatehandler}></input> 
            </div>      
           
            <div className='createcourse_allSubtitles_div'>
                {/* <h1 className='createcourse_courseinputs_h1'>{SubtitleHours},{videolink},{VideoDescription},{Question},{MaxGrade},{Choice1},{Choice2},{Choice3},{Choice4},{CorrectAnswer}</h1> */}
                <div>
                    <h1 className='createcourse_courseinputs_h1'>Subtitles:</h1> <div><ButtonBlue onClick={SubtitleNumhandler}>+</ButtonBlue></div> 
                </div>

                <div><MultipleSubtitleDivs createSubtitle = {createSubtitle} CreateExcercise = {CreateExcercise} GetExcercise = {GetExcercise} createSubtitleProp = {createSubtitleProp} CreateExcerciseProp = {CreateExcerciseProp} SubtitlesNum = {SubtitleNum} CreateButton = {CreateButton} Title={Title} InstructorName={InstructorName}/></div>
            <br></br>
            </div>
            </div>
}
            <Link to='/instructor'><ButtonBlue className='CreateCourse_btn' onClick={AddCourse}>Create Course</ButtonBlue> {/*CreateCoursehandler*/}</Link>
             {/* {<h1 className='createcourse_courseinputs_h1'>hena ahooo,{InstructorName},{ThisSubtitleNumber},{Question},{Choice1},{Choice2},{Choice3},{Choice4},{MaxGrade},{CorrectAnswer}</h1>} */}
        </div>
    </div>
  )
}

export default CreateCourse
//CreateButton && InstructorNamehandler() &&

/*&&
        // Choice2handler('2')&&
        // Choice3handler('3')&&
        // Choice4handler('ehab tawfeeq nafso maya3rfsh')&&
        // maxGradehandler(0)&&
        // correctAnswerhandler('ahmed 3oraby')*/

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
  