import React from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './Courses.css';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Link, useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
const { useState, useEffect } = require("react");

 function IndividualCourses(props) {
   const location = useLocation();
    const [mycourses,setmycourses] = useState([]);
    const individualUsername = 'kkkkk'
    const getmycourses = async()=>{
        await axios.get(`http://localhost:9000/individualTrainee/individualCourses/${individualUsername}`).then(
            (res) => { 
                const result = res.data
                setmycourses(result)
                // alert(mycourses)
            }
             );
    }
    const deleteCourse = async (e)=>{
      const id = e.target.getAttribute("id")
      alert('PS: to unroll , your course Progress must be less than 50 % ! ')
      confirmAlert({
        title: 'Confirm to unroll',
        message: 'Are you sure ?',
        buttons: [
          {
            label: 'Yes',
            onClick: async () => {      
            await axios.get(`http://localhost:9000/individualTrainee/unroll_from_course/${individualUsername}/${id}`)
            }
          },
          {
            label: 'No',
            //onClick: () => alert('Click No')
          }
        ]
      });


    }

    getmycourses()
    const navigate = useNavigate()
    const adham = 50;
   return (
     <div>
      <h1 className='indtracou-adham'>MY COURSES</h1>
      <br></br><br></br>
      <br></br><br></br>
      {mycourses.map((mycourse)=>(
        <div className='MyCourses-adham'>
                  <h2 className='h1-adham'>Course Progress </h2>
                  <ProgressBar bgcolor="blue" progress={`${mycourse[1]}`}  height={20}/>
                  <br></br><br></br>
                <h1 className='h1-adham'>Course Title : {mycourse[0].Title}</h1>
                <h1  className='h1-adham'>Course Total Hours : {mycourse[0].TotalHours}</h1>
                <h1  className='h1-adham'>Course Price : {mycourse[0].Price}</h1>
                <h1  className='h1-adham'>Course Rating : {mycourse[0].Rating.rate}</h1>
                <br></br><br></br>
                <h2 className='h1-adham'>in this Course you will learn : {mycourse[0].ShortSummary}</h2>
                <br></br><br></br>
                  <button className='opencourse-adham' onClick={()=> navigate(props.Link, {state:[mycourse[0]._id,mycourse[0].InstructorUserName]} )}>Open Course</button>
                  <br></br><br></br>
                  <button className='opencourse-adham' onClick={deleteCourse} id={mycourse[0]._id}> UNROLL !</button>                
            </div>
      ))}

     </div>
   )
 }
 
 export default IndividualCourses
//  <TableCell align="center">{course.Title}</TableCell>
//  <TableCell align="center">{course.TotalHours}</TableCell>
//  <TableCell align="center">{course.Rating.rate}</TableCell>
//  <TableCell align="center">{course.Price}</TableCell>