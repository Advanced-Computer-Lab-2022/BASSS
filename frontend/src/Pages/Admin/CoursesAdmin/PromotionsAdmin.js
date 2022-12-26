import React, { useState } from 'react';
import axios from 'axios';
import '../Admin.css';

const PromotionsAdmin = (props) => {

    const [DummyVariable , setDummyVariable] = useState('')
    const DummyVariablehandler = ()=>{setDummyVariable(DummyVariable)}

    const [PromotionPercentage , setPromotionPercentage] = useState()
    const PromotionPercentagehandler = (event)=>{setPromotionPercentage(event.target.value)}

    const [PromotionEndTime , setPromotionEndTime] = useState()
    const PromotionEndTimehandler = (event)=>{setPromotionEndTime(event.target.value)}

    const [PromotionStartTime , setPromotionStartTime] = useState()
    const PromotionStartTimehandler = (event)=>{setPromotionStartTime(event.target.value)}
    
    const [PromotionStartDate , setPromotionStartDate] = useState()
    const PromotionStartDatehandler = (event)=>{setPromotionStartDate(event.target.value)}

    const [PromotionEndDate , setPromotionEndDate] = useState()
    const PromotionEndDatehandler = (event)=>{setPromotionEndDate(event.target.value)}

    const SubmitPromotionHandler = () =>{
        props.PromotionDivhandler(false)
        SubmitPromotion()
    }

    const cancelPromotionHandler = () =>{
        props.PromotionDivhandler(false)
    }

    const SubmitPromotion = async(req,res)=>{
        var SelectedCourses = [1,2,3]
        SelectedCourses = props.SelectedCourses
        //props.SelectedCourses
        for(let i = 0 ; i < SelectedCourses.length ; i++){
            var CourseID = SelectedCourses[i]
            await axios.get(`http://localhost:9000/admin/SetPromotion/${CourseID}/${PromotionPercentage}/${PromotionStartTime}/${PromotionEndTime}/${PromotionStartDate}/${PromotionEndDate}`).then(
                (res) => {
                    const result = res.data
                    DummyVariablehandler(result)
                })
        }
    }
//PromotionDivhandler
  return (
    <div className='Admin_Promotion_Div'>
        <input type='number' placeholder='Promotion Percentage' className='Admin_Promotion_inputs' name="PromotionPercentage" onChange={PromotionPercentagehandler}></input> 
        <input type='number' placeholder='Promotion Start Time' className='Admin_Promotion_inputs' name="PromotionStartTime" onChange={PromotionStartTimehandler}></input> 
        <input type='number' placeholder='Promotion End Time ' className='Admin_Promotion_inputs' name="PromotionEndTime" onChange={PromotionEndTimehandler}></input> 
        <input type='date' placeholder='Promotion Start Date' className='Admin_Promotion_inputs' name="PromotionStartDate" onChange={PromotionStartDatehandler}></input> 
        <input type='date' placeholder='Promotion End Date' className='Admin_Promotion_inputs' name="PromotionEndDate" onChange={PromotionEndDatehandler}></input> 
        <button className='Admin_SubmitPromtion_btn'onClick={SubmitPromotionHandler}> Submit </button>
        <button className='Admin_SubmitPromtion_btn' onClick={cancelPromotionHandler}> Cancel </button>
    </div>
  )
}

export default PromotionsAdmin


//${props.CourseID}

/*
results.map((result) => (
            <tr 
              onClick={() => {if(!corporate){window.location.href= `/instructor/courseDetails?courseId=${result._id}`} }}
            >
                <td>{result.Title}</td>
                <td>{result.Subject}</td>
                <td>{result.InstructorUserName}</td>
            </tr>
        ))
*/