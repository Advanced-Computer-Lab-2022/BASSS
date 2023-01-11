import React, { useState } from 'react'

import './NewCourse.css';
import star from '../../images/star.png'
import { useEffect } from '../../../node_modules/react/cjs/react.development';
import Exercise from '../Exercise/Exercise';
import { useNavigate } from '../../../node_modules/react-router/dist';
import axios from 'axios';
import { borderRadius } from '@mui/system';

function NewCourse(props) {
  const navigate = useNavigate();
    var direction = "" ;
     if(props.Trainee){
      direction = '/individualtrainee/myCourseDetails'
    }
    else if(props.Instructor){
        direction='/Instructor/Courses'
    }
    
    const[showData,setShowData]=useState(false);
    const[showDataSub,setShowDataSub]=useState(false);
    const[showDataExe,setShowDataExe]=useState(false);
    const[exercises,setExercises] = useState([]);
    const [subs, setSubtitles] = useState([])
    const fares = [26,1,3.67,0.81,0.95];
    const currency = ['LE','$','UAE','£','€'];
     const [chosenCountry,setChosenCountry] = useState(0);
        useEffect(()=>{
      setChosenCountry(props.country);  
    },[props.country]);
    
    const request = async() =>{
      // axios./createCoReq/:Reporter/:CourseID
      try{
        await axios.get(`http://localhost:9000/admin/createCoReq/sarasaad2001/${props.course._id}`).then(
          (res) => {
              window.alert("Request Sent")
  
          })
      }
      catch(error){
        window.alert(error.response.data)
      }

    }
    const NoOfStars = (starNumber) => {
      var array=[];
      for(var i=0;i<starNumber;i++){
        array=array.concat([0])
      }
      return array
    }
    const getExercises = async(req,res)=>{
       
      await axios.get(`http://localhost:9000/course/getExercisesByCourseID/${props.cid}`).then(
          (res) => {
              const result = res.data
              setSubtitles(res.data.subtitles1);

              setExercises(res.data.Ex1);
              

          })
 
}
  useEffect(()=>{
    async function GetExercises() {
      await getExercises();
    }
     GetExercises();
  },[showDataExe,showDataSub])

  const style = {
    background : "transparent"

  }

  return (
    /* onClick={()=>navigate(direction,{state:[props.course._id,props.course.InstructorUserName]})} */
    <div>
    <div className={showData?"NewCourse_Details":"NewCourse"} onMouseEnter={()=>setShowData(true)}  onMouseLeave={()=>setShowData(false)}
    // onClick={()=>navigate(direction,{state:[props.course._id,props.course.InstructorUserName]})}
    >
        <div className="NewCourse_Data_Top">

          <div className='Rating'>
          {NoOfStars(props.course.Rating.rate).map((num)=> <img className="starImg" src={star} alt="."/>)}
          </div>
          <div>
            <h2>{props.course.TotalHours} Hours</h2>

          </div>
        </div>
      
      <div className="NewCourse_Title">
      <h1>{props.course.Title}</h1>
      </div>

        <div className="NewCourse_Data_Bottom">
          {showData &&
            <>
            <button className="NewCourse_Subtitles"  onMouseEnter={()=>setShowDataSub(true)}  onMouseLeave={()=>setShowDataSub(false)}>Subtitles</button>
            <button className="NewCourse_Subtitles"  onMouseEnter={()=>setShowDataExe(true)}  onMouseLeave={()=>setShowDataExe(false)}>Exercises</button>
            <button className="NewCourse_Subtitles" onClick={()=> navigate('/corporatetrainee/PreviewVideo',{state:[props.course.VideoPreviewLink]} )} >Preview Video !</button>
            </>
          }

        </div>
       {
         showDataSub && <div className={"NewCourseSubtitles_data"}>
          <h1 style={{alignItems:'center'}}> Subtitles </h1>
          <div style={{display:'flex',flexDirection:'Column',padding:'1rem'}}>
              {subs && subs.map((sub)=>
                <div>

                <h2>Subtitle {sub.SubtitleNumber}</h2>
                <h2>Subtitle Hours : {sub.SubtitleHours}</h2>
                <br/>
                </div>
              )}
            </div>
      </div>
        }
        {
       showDataExe&&<div className={"NewCourseExercises_data"}>
          <h1 style={{alignItems:'center'}}> Exercises </h1>
          <div style={{display:'flex',flexDirection:'Column',padding:'1rem'}}>
              {exercises && exercises.map((sub,i)=>
                <h2>Exercise {i}</h2>
              )}
            </div>
            
      </div>
      }
    </div>
    <button className='NewCourseEnrollBtn' onClick={request} disabled={props.My} >
        {(props.My)? "Already Enrolled" : "Request Access"}
    </button>

    </div>
  )
}

export default NewCourse