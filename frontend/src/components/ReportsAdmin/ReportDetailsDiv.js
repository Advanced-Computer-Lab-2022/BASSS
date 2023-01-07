import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../../Pages/Admin/Admin.css'
import OneReportDetails from './OneReportDetails';

const ReportDetailsDiv = (props) =>{
    
    const [Report , setReport] = useState([])
    const Reporthandler = (sara)=>{setReport(sara)}
    useEffect(()=>{Reporthandler(Report)});

    const [Refund , setRefund] = useState([])
    const Refundhandler = (sara)=>{
        setRefund(sara)
    }
    useEffect(()=>{Refundhandler(Refund)});

    // const [SelectedCourses , setSelectedCourses] = useState([])
    // const SelectedCourseshandler = (sara)=>{setSelectedCourses(sara)}
    // useEffect(()=>{ SelectedCourseshandler(SelectedCourses)},[SelectedCourses]);


    const [Clicked , setClicked] = useState(false)
    const Clickedhandler = (sara)=>{setClicked(sara)}
    

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    useEffect(()=>{getReport()});
    useEffect(()=>{getRefund()});

    //SelectedCourseshandlerProp={props.SelectedCourseshandlerProp} SelectedCoursesProp={props.SelectedCoursesProp}

    const ClickedDivs = () =>{
        Clickedhandler(true)

    }


    const UnClickedDivs = () =>{
        Clickedhandler(false)

    }

    const getReport = async(req,res)=>{

        await axios.get(`http://localhost:9000/admin/getReportID/${props.ReportID}`).then(
            (res) => {
                const result = res.data
                Reporthandler(result)
             })
    }

    const getRefund = async(req,res)=>{

        await axios.get(`http://localhost:9000/admin/getRefundReqByID/63b2432f6995d4590d7e07fd`).then(
            (res) => {
                const result = res.data
                Refundhandler(result)
             })
    }


    return <div>
        {props.Type !== 'Refund' && !Clicked && Report.Status === 'Unseen' && <div className='Admin_OneReport_Div_Unseen'  onClick={ClickedDivs} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h1 className='CourseDetailsAdmin_h1'>Status: {Report.Status}</h1>
            <h1 className='CourseDetailsAdmin_h1'>Course Title: {Report.CourseTitle}</h1>
            {isHovering && <OneReportDetails ReportID = {props.ReportID} Report1 = {Report} Refund = {props.Refund}/>}
        </div>}

        {props.Type !== 'Refund' && !Clicked && Report.Status !== 'Unseen' &&<div className='Admin_OneReport_Div' onClick={ClickedDivs} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h1 className='CourseDetailsAdmin_h1'>Status: {Report.Status}</h1>
            <h1 className='CourseDetailsAdmin_h1'>Course Title: {Report.CourseTitle}</h1>
            {isHovering && <OneReportDetails ReportID = {props.ReportID} Report1 = {Report} Refund = {props.Refund}/>}
        </div>}




        {props.Type === 'Refund' && Clicked &&<div className='Admin_OneReport_Div_Clicked' onClick={UnClickedDivs}  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h1 className='CourseDetailsAdmin_h1'>CourseID: {Refund.R}</h1>
            {/* <h1 className='CourseDetailsAdmin_h1'>Course Title: {Refund.R.Status}</h1> */}
            {/* {isHovering && <OneReportDetails ReportID = {props.Refund} Report1 = {Report} Refund = {props.Refund}/>} */}
        </div>}

        {props.Type === 'Refund' && !Clicked && Report.Status === 'Unseen' && <div className='Admin_OneReport_Div_Unseen'  onClick={ClickedDivs} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h1 className='CourseDetailsAdmin_h1'>CourseID: {Refund.R}</h1>
            {/* <h1 className='CourseDetailsAdmin_h1'>Course Title: {Refund.R.Status}</h1> */}
            {/* {isHovering && <OneReportDetails ReportID = {props.Refund} Report1 = {Report} Refund = {props.Refund}/>} */}
        </div>}

        {props.Type === 'Refund' && !Clicked && Report.Status !== 'Unseen' &&<div className='Admin_OneReport_Div' onClick={ClickedDivs} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h1 className='CourseDetailsAdmin_h1'>CourseID: {Refund.R}</h1>
            {/* <h1 className='CourseDetailsAdmin_h1'>Course Title: {Refund.R.Status}</h1> */}
            {/* {isHovering && <OneReportDetails ReportID = {props.Refund} Report1 = {Report} Refund = {props.Refund}/>} */}
        </div>}

        {props.Type === 'Refund' && Clicked &&<div className='Admin_OneReport_Div_Clicked' onClick={UnClickedDivs}  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h1 className='CourseDetailsAdmin_h1'>CourseID: {Refund.R}</h1>
            {/* <h1 className='CourseDetailsAdmin_h1'>Course Title: {Refund.R.Status}</h1> */}
            {/* {isHovering && <OneReportDetails ReportID = {props.Refund} Report1 = {Report} Refund = {props.Refund}/>} */}
        </div>}
    </div>
}

export default ReportDetailsDiv

// CourseID = {props.CourseID}