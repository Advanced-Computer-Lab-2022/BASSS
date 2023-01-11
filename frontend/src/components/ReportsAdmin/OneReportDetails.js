import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../Pages/Admin/Admin.css'
import { HeadersDiv } from '../../GeneralCss';

const OneReportDetails = (props) => {

    const AcceptReqHandler = async(req,res)=>{
      await axios.get(`http://localhost:9000/admin/ResolveReport/${props.ReportID}`).then(
          (res) => {
              const result = res.data
           })
  }

  const RejecttReqHandler = async(req,res)=>{
    await axios.get(`http://localhost:9000/admin/PendingReport/${props.ReportID}`).then(
        (res) => {
            const result = res.data
         })
}


const AcceptRefundHandler = async(req,res)=>{
  await axios.get(`http://localhost:9000/admin/acceptRefundReq/${props.Refund._id}`).then(
      (res) => {
          const result = res.data
       })
}

const RejecttRefundHandler = async(req,res)=>{
await axios.get(`http://localhost:9000/admin/rejectRefundReq/${props.Refund._id}`).then(
    (res) => {
        const result = res.data
     })
}

  return (<div>

    {props.Type && props.Type === 'Refund' && <div className='Admin_OneCoReqDetails_Div'>
        <br></br>
        <HeadersDiv fontLabel='30' fontValue='28' label='Reporter:' value={props.Refund.Reporter} /> <br></br>
        <HeadersDiv fontLabel='25' fontValue='22' label='CourseID: ' value={props.Refund.CourseID} /> <br></br>
        <HeadersDiv fontLabel = '25' label = 'Course Title : ' fontValue = '22' value = {props.Refund.CourseTitle}/>
        <br></br><br></br>
          {props.Refund.Status === 'Unseen' &&
          <div className='Admin_OneCoReqDetails_btn_Div'>
            <button className='Admin_OneCoReqDetailsAccept_btn' onClick={AcceptRefundHandler}>Accept</button>
            <br></br>
            <button className='Admin_OneCoReqDetailsReject_btn' onClick={RejecttRefundHandler}>Reject</button>
          </div>}
      </div>}



      {props.Type && props.Type !== 'Refund' && props.Report1.Type === 'Financial' && <div className='Admin_OneReportDetails_Div'>
        <br></br>
        <HeadersDiv fontLabel='30' fontValue='28' label='Reporter:' value={props.Report1.Reporter} /> <br></br>
        <HeadersDiv fontLabel='25' fontValue='22' label='CourseID: ' value={props.Report1.CourseID} /> <br></br>
        <HeadersDiv fontLabel='25' fontValue='22' label='Course Title:' value={props.Report1.CourseTitle} /> <br></br>
        {props.Report1.FollowUps && props.Report1.FollowUps.length>0 && props.Report1.FollowUps.map((Report) => <HeadersDiv fontLabel='25' fontValue='22' label='Follow Ups:' value={Report.Message}/>)}
        <br></br><br></br>
          {props.Report1.Status !== 'Resolved' &&
          <div className='Admin_OneFinancialDetails_btn_Div'>
            <button className='Admin_OneFinancialDetailsAccept_btn' onClick={AcceptReqHandler}>Resolved</button>
            <br></br>
            {props.Report1.Status !== 'Pending' && <button className='Admin_OneFinancialDetailsReject_btn' onClick={RejecttReqHandler}>Pending</button>}
          </div>}
      </div>}
      {props.Report1 && props.Report1.Type !== 'Financial' && <div className='Admin_OneReportDetails_Div'>
        <br></br>
        <HeadersDiv fontLabel='35' fontValue='32' label='Reporter:' value={props.Report1.Reporter} /> <br></br>
        <HeadersDiv fontLabel='25' fontValue='22' label='CourseID: ' value={props.Report1.CourseID} /> <br></br>
        <HeadersDiv fontLabel='25' fontValue='22' label='Course Title:' value={props.Report1.CourseTitle} /> <br></br>
        {props.Report1.FollowUps && props.Report1.FollowUps.length>0 && props.Report1.FollowUps.map((Report) => <HeadersDiv fontLabel='25' fontValue='22' label='Follow Ups:' value={Report.Message}/>)}
        <br></br>
          {props.Report1.Status !== 'Resolved' &&
          <div className='Admin_OneReportDetails_btn_Div'>
            <button className='Admin_OneReportDetailsAccept_btn' onClick={AcceptReqHandler}>Resolved</button>
            <br></br>
            <button className='Admin_OneReportDetailsReject_btn' onClick={RejecttReqHandler}>Pending</button>
          </div>}
      </div>}
    </div>
  )
}

export default OneReportDetails


//${props.CourseID}