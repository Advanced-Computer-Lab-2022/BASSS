import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../Pages/Admin/Admin.css'

const OneCoReqDetails = (props) => {

  const [DummyVariable , setDummyVariable] = useState('')
  const DummyVariablehandler = ()=>{setDummyVariable(DummyVariable)}

  const [CoReq , setCoReq] = useState('')
  const CoReqhandler = (sara)=>{setCoReq(sara)}
  useEffect(()=>{CoReqhandler(CoReq)});

    useEffect(()=>{getCoReq()});

    const AcceptReqHandler = async(req,res)=>{
      await axios.get(`http://localhost:9000/admin/AcceptCoRequest/${props.CoReqID}`).then(
          (res) => {
              const result = res.data
              DummyVariablehandler(result)
           })
  }

  const RejecttReqHandler = async(req,res)=>{
    await axios.get(`http://localhost:9000/admin/RejectCoRequest/${props.CoReqID}`).then(
        (res) => {
            const result = res.data
            DummyVariablehandler(result)
         })
}

    const getCoReq = async(req,res)=>{
      await axios.get(`http://localhost:9000/admin/getCoReqByID/${props.CoReqID}`).then(
          (res) => {
              const result = res.data
              CoReqhandler(result)
           })
  }


  return (
    <div className='Admin_OneCoReqDetails_Div'>
      <br></br>
        <h1 className='Admin_OneCoReqDetails_h1'>Reporter: {props.CoReq.Reporter}</h1>
        <h1 className='Admin_OneCoReqDetails_h1'>Status: {props.CoReq.Status}</h1>
        <h1 className='Admin_OneCoReqDetails_h1'>CourseID: {props.CoReq.CourseID}</h1>
        <h1 className='Admin_OneCoReqDetails_h1'>Course Title: {props.CoReq.CourseTitle}</h1>
        {props.CoReq.Status === 'Unseen' &&
        <div className='Admin_OneCoReqDetails_btn_Div'>
          <button className='Admin_OneCoReqDetailsAccept_btn' onClick={AcceptReqHandler}>Accept</button>
          <button className='Admin_OneCoReqDetailsReject_btn' onClick={RejecttReqHandler}>Reject</button>
        </div>}
    </div>
  )
}

export default OneCoReqDetails


//${props.CourseID}