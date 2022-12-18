import axios from 'axios';
import './Courses.css';
// import Reac from 'react';

import { Link, Navigate, useNavigate } from 'react-router-dom';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed';


  const { useState, useEffect } = require("react");
  
  const MostViewd = () => { 
    const [mostViewd,setmostViewd] = useState([]);
    const mostviewd = async ()=>{
        await axios.get(`http://localhost:9000/course/allcourses/mostviewd`).then(
            (res) => { 
                const most = res.data
                setmostViewd(most);
            }
             );
    }
    mostviewd()

    return(

        <div className='CoursesBody-adham' >

      {mostViewd.map((course) => (
        <div className='AllCourses-adham'>
            <h1 className='h1-adham'>Course Title : {course.Title}</h1>
            <h1  className='h1-adham'>Course Total Hours : {course.TotalHours}</h1>
            <h1  className='h1-adham'>Course Price : {course.Price}</h1>
            <h1  className='h1-adham'>Course Rating : {course.Rating.rate}</h1>
            <br></br><br></br>
            <h2 className='h1-adham'>in this Course you will learn : {course.ShortSummary}</h2>
            <br></br><br></br>
            <h3 className='h3-adham'>Course video Preview</h3>
            <br></br><br></br>
            <YoutubeEmbed embedId={course.VideoPreviewLink}/>
            <br></br><br></br>
            <button className='register-now-adham'>REGISTER NOW </button>
            <br></br><br></br>
        </div>

      )
      
      )}
        </div>   
    )
}

export default MostViewd;
// onClick={() => navigate(props.Link, {state:[course._id,course.InstructorUserName]} )}
