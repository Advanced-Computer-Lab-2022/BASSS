import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../Pages/Admin/Admin.css'

const OneReportDetails = (props) => {

  const [CoReq , setCoReq] = useState('')
  const CoReqhandler = (sara)=>{setCoReq(sara)}
  useEffect(()=>{CoReqhandler(CoReq)});


    const AcceptReqHandler = async(req,res)=>{
      await axios.get(`http://localhost:9000/admin/AcceptCoRequest/${props.CoReqID}`).then(
          (res) => {
              const result = res.data
           })
  }

  const RejecttReqHandler = async(req,res)=>{
    await axios.get(`http://localhost:9000/admin/RejectCoRequest/${props.CoReqID}`).then(
        (res) => {
            const result = res.data
         })
}


  return (
    <div className='Admin_OneCoReqDetails_Div'>
      <br></br>
        <h1 className='Admin_OneCoReqDetails_h1'>Reporter: {props.Report1.Reporter}</h1>
        <h1 className='Admin_OneCoReqDetails_h1'>Status: {props.Report1.Status}</h1>
        <h1 className='Admin_OneCoReqDetails_h1'>CourseID: {props.Report1.CourseID}</h1>
        <h1 className='Admin_OneCoReqDetails_h1'>Course Title: {props.Report1.CourseTitle}</h1>
        {props.Report1.Status == 'Unseen' &&
        <div className='Admin_OneCoReqDetails_btn_Div'>
          <button className='Admin_OneCoReqDetails_btn' onClick={AcceptReqHandler}>Accept</button>
          <button className='Admin_OneCoReqDetails_btn' onClick={RejecttReqHandler}>Reject</button>
        </div>}
    </div>
  )
}

export default OneReportDetails


//${props.CourseID}