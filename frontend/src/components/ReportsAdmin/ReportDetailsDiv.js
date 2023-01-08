import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../../Pages/Admin/Admin.css'
import OneReportDetails from './OneReportDetails';
import { HeadersDiv } from '../../GeneralCss';

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
    //SelectedCourseshandlerProp={props.SelectedCourseshandlerProp} SelectedCoursesProp={props.SelectedCoursesProp}

    const ClickedDivs = () =>{
        Clickedhandler(true)

    }


    const UnClickedDivs = () =>{
        Clickedhandler(false)

    }

    const getReport = async(req,res)=>{
        if(props.ReportID !== 'Null'){
        await axios.get(`http://localhost:9000/admin/getReportID/${props.ReportID}`).then(
            (res) => {
                const result = res.data
                Reporthandler(result)
             })
        }
    }


    return <div>
        {props.Type !== 'Refund' && !Clicked && Report.Status === 'Unseen' && <div className='Admin_OneReport_Div_Unseen'   onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h1 className='CourseDetailsAdmin_h1'>Status: {Report.Status}</h1>
            <h1 className='CourseDetailsAdmin_h1'>Course Title: {Report.CourseTitle}</h1>
            {isHovering && <OneReportDetails ReportID = {props.ReportID} Report1 = {Report} Type = 's'/>}
        </div>}

        {props.Type !== 'Refund' && !Clicked && Report.Status !== 'Unseen' &&<div className='Admin_OneReport_Div'  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h1 className='CourseDetailsAdmin_h1'>Status: {Report.Status}</h1>
            <h1 className='CourseDetailsAdmin_h1'>Course Title: {Report.CourseTitle}</h1>
            {isHovering && <OneReportDetails ReportID = {props.ReportID} Report1 = {Report} Type = 's'/>}
        </div>}




        {props.Type === 'Refund' && Clicked &&<div className='Admin_OneReport_Div_Clicked' onClick={UnClickedDivs}  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h1 className='CourseDetailsAdmin_h1'>Reporter: {props.Refund.Reporter}</h1>
            <h1 className='CourseDetailsAdmin_h1'>Status: {props.Refund.Status}</h1>
            {isHovering && <OneReportDetails Type = 'Refund' Refund = {props.Refund}/>} 
        </div>}

        {props.Type === 'Refund' && !Clicked && props.Refund.Status === 'Unseen' && <div className='Admin_OneCoReq_Div_Unseen'   onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <HeadersDiv fontLabel = '30' label = 'Reporter : ' fontValue = '28' value = {props.Refund.Reporter}/>
        <HeadersDiv fontLabel = '30' label = 'Status :' fontValue = '28' value = {props.Refund.Status}/>
            {isHovering && <OneReportDetails Type = 'Refund' Refund = {props.Refund}/>}
        </div>}

        {props.Type === 'Refund' && !Clicked && props.Refund.Status !== 'Unseen' &&<div className='Admin_OneCoReq_Div'  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <HeadersDiv fontLabel = '30' label = 'Reporter' fontValue = '28' value = {props.Refund.Reporter}/>
        <HeadersDiv fontLabel = '30' label = 'Status :' fontValue = '28' value = {props.Refund.Status}/>
            {isHovering && <OneReportDetails Type = 'Refund' Refund = {props.Refund}/>}
        </div>}

        {props.Type === 'Refund' && Clicked &&<div className='Admin_OneReport_Div_Clicked' onClick={UnClickedDivs}  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <HeadersDiv fontLabel = '30' label = 'Reporter : ' fontValue = '28' value = {props.Refund.Reporter}/>
            <HeadersDiv fontLabel = '30' label = 'Status :' fontValue = '28' value = {props.Refund.Status}/>
            {isHovering && <OneReportDetails Type = 'Refund' Refund = {props.Refund}/>}
        </div>}
    </div>
}

export default ReportDetailsDiv

// CourseID = {props.CourseID}