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
        <h1 className='CourseDetailsAdmin_h1'>Title: {Course.Title}</h1>
        <h1 className='CourseDetailsAdmin_h1'>Views: {Course.Views}</h1>
        <h1 className='CourseDetailsAdmin_h1'>Subject: {Course.Subject}</h1>
        <h1 className='CourseDetailsAdmin_h1'>Instructor: {Course.InstructorUserName}</h1>
        <h1 className='CourseDetailsAdmin_h1'>Price: {Course.Price}</h1>
        <h1 className='CourseDetailsAdmin_h1'> Promotion State: {Course.PromotionState}</h1>
        <h1 className='CourseDetailsAdmin_h1'>PromotedPrice: {Course.PromotedPrice}</h1>
        <h1 className='CourseDetailsAdmin_h1'> Promotion Percentage: {Course.PromotionPercentage}</h1>
        <h1 className='CourseDetailsAdmin_h1'>Promotion Start Date: {Course.PromotionStartDate}</h1>
        <h1 className='CourseDetailsAdmin_h1'> Promotion End Date: {Course.PromotionEndDate}</h1>

        
    </div>
  )
}

export default OneCourseDetails


//${props.CourseID}