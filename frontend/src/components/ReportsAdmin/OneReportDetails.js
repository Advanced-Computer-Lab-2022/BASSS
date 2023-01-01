import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../Pages/Admin/Admin.css'
import { HeadersDiv } from '../../GeneralCss';

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


  return (<div>
      {props.Report1.Type === 'Financial' && <div className='Admin_OneReportDetails_Div'>
        <br></br>
        <HeadersDiv fontLabel='30' fontValue='28' label='Reporter:' value={props.Report1.Reporter} /> <br></br>
        <HeadersDiv fontLabel='25' fontValue='22' label='CourseID: ' value={props.Report1.CourseID} /> <br></br>
        <HeadersDiv fontLabel='25' fontValue='22' label='Course Title:' value={props.Report1.CourseTitle} /> <br></br>
        <br></br><br></br>
          {props.Report1.Status !== 'Resolved' &&
          <div className='Admin_OneFinancialDetails_btn_Div'>
            <button className='Admin_OneFinancialDetailsAccept_btn' onClick={AcceptReqHandler}>Resolved</button>
            <br></br>
            <button className='Admin_OneFinancialDetailsReject_btn' onClick={RejecttReqHandler}>Pending</button>
          </div>}
      </div>}
      {props.Report1.Type !== 'Financial' && <div className='Admin_OneReportDetails_Div'>
        <br></br>
        <HeadersDiv fontLabel='35' fontValue='32' label='Reporter:' value={props.Report1.Reporter} /> <br></br>
        <HeadersDiv fontLabel='25' fontValue='22' label='CourseID: ' value={props.Report1.CourseID} /> <br></br>
        <HeadersDiv fontLabel='25' fontValue='22' label='Course Title:' value={props.Report1.CourseTitle} /> <br></br>
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