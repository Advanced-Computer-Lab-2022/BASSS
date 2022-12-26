import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Admin.css';

const OneCourseDetails = (props) => {

    const [Course , setCourse] = useState([])
    const Coursehandler = (sara)=>{setCourse(sara)}
    useEffect(()=>{Coursehandler(Course)});

    useEffect(()=>{GetCourse()});

    const GetCourse = async(req,res)=>{

        await axios.get(`http://localhost:9000/course/courseDetails/${props.CourseID}`).then(
            (res) => {
                const result = res.data
                Coursehandler(result)
             })
    }

  return (
    <div className='Admin_OneCourseDetails_Div'>
        <h1 className='CourseDetailsAdmin_h1'>Title: {props.Course.Title}</h1>
        <h1 className='CourseDetailsAdmin_h1'>Views: {props.Course.Views}</h1>
        <h1 className='CourseDetailsAdmin_h1'>Subject: {props.Course.Subject}</h1>
        <h1 className='CourseDetailsAdmin_h1'>Instructor: {props.Course.InstructorUserName}</h1>
        <h1 className='CourseDetailsAdmin_h1'>Price: {props.Course.Price}</h1>
        <h1 className='CourseDetailsAdmin_h1'> Promotion State: {props.Course.PromotionState}</h1>
        <h1 className='CourseDetailsAdmin_h1'>PromotedPrice: {props.Course.PromotedPrice}</h1>
        <h1 className='CourseDetailsAdmin_h1'> Promotion Percentage: {props.Course.PromotionPercentage}</h1>
        <h1 className='CourseDetailsAdmin_h1'>Promotion Start Date: {props.Course.PromotionStartDate}</h1>
        <h1 className='CourseDetailsAdmin_h1'> Promotion End Date: {props.Course.PromotionEndDate}</h1>

        
    </div>
  )
}

export default OneCourseDetails


//${props.CourseID}