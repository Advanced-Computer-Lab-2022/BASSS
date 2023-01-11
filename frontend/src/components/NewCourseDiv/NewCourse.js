import React, { useState } from 'react'

import './NewCourse.css';
import star from '../../images/star.png'
import { useEffect } from '../../../node_modules/react/cjs/react.development';
import Exercise from '../Exercise/Exercise';
import { useNavigate } from '../../../node_modules/react-router/dist';
import axios from 'axios';

function NewCourse(props) {
  const navigate = useNavigate();
    var direction = "" ;
     if(props.Trainee){
      direction = '/individualtrainee/myCourseDetails'
    }
    else if(props.Instructor){
        direction='/instructor/CourseDetails'
    }
    
    const[showData,setShowData]=useState(false);
    const[showDataSub,setShowDataSub]=useState(false);
    const[showDataExe,setShowDataExe]=useState(false);
    const[exercises,setExercises] = useState([]);
    const [subs,setSubtitles]= useState([])
    const fares = [26,1,3.67,0.81,0.95];
    const currency = ['LE','$','UAE','£','€'];
     const [chosenCountry,setChosenCountry] = useState(0);
        useEffect(()=>{
      setChosenCountry(props.country);  
    },[props.country]);
    
    
    const NoOfStars = (starNumber) => {
      var array=[];
      for(var i=0;i<starNumber;i++){
        array=array.concat([0])
      }
      return array
    }
    const getExercises = async(req,res)=>{
       
      await axios.get(`http://localhost:9000/course/getExercisesByCourseID/${props.course._id}`).then(
          (res) => {
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

  return (
    <div>
    <div className={showData?"NewCourse_Details":"NewCourse"} onMouseEnter={()=>setShowData(true)}  onMouseLeave={()=>setShowData(false)}
    // onClick={()=>navigate(direction,{state:[props.course._id,props.course.InstructorUserName]})}
    >
        {/* <button style={{background : "rgb(3, 48, 76)",color:'white', borderRadius: '2rem', border: 'none', padding: '0.3rem', cursor: 'pointer',zIndex:'1'}}
         onClick={() => navigate('/pay',{state:[Math.floor(props.course.Price*fares[chosenCountry])-( Math.floor(props.course.Price*fares[chosenCountry]) *(props.course.PromotionPercentage/100)),props.course.Title,props.course._id, currency[chosenCountry]]})}>
         Enroll</button> */}

        <div className="NewCourse_Data_Top">
          {props.course.PromotionPercentage>0
          ?
          <div style={{display:'flex',flexDirection:'Column'}}>
          <h2 className="NewCourse_PriceBefore">{ Math.floor(props.course.Price*fares[chosenCountry])} {currency[chosenCountry]}</h2>
          <h2>{  Math.floor(props.course.Price*fares[chosenCountry])-( Math.floor(props.course.Price*fares[chosenCountry]) *(props.course.PromotionPercentage/100))} {currency[chosenCountry]}</h2> 
          <div className='NewCourse_Promotion'>
          <h3 >   {props.course.PromotionPercentage} %</h3>
            </div>
            </div>

          :
          <h2>{Math.floor(props.course.Price*fares[chosenCountry])} {currency[chosenCountry]}</h2> 
          }
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
            <button className="NewCourse_Subtitles" onClick={()=> navigate('/individualtrainee/PreviewVideo' ,{state:[props.course.VideoPreviewLink]})} >Preview Video !</button>
            </>
          }

        </div>

       {
         showDataSub && <div className={"NewCourseSubtitles_data"}>
          <h1 style={{alignItems:'center'}}> Subtitles </h1>
          <div style={{display:'flex',flexDirection:'Column',padding:'1rem'}}>
              {subs && subs.map((sub,i)=>
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
              {exercises && exercises.map((sub,i)=><h2>Exercise {i}</h2>)}
            </div>
            
      </div>
      }
    </div>
    {props.Trainee && 
      <button className='NewCourseEnrollBtn'
        onClick={() => navigate('/pay',{state:[Math.floor(props.course.Price*fares[chosenCountry])-( Math.floor(props.course.Price*fares[chosenCountry]) *(props.course.PromotionPercentage/100)),props.course.Title,props.course._id, currency[chosenCountry]]})}
        disabled={props.My}
      >
        {(props.My)? "Already Enrolled" : "Enroll"}
      </button>}
    </div>

  )
}

export default NewCourse
