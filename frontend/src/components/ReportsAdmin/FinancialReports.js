import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../Pages/Admin/Admin.css'
import MultipleReportsDiv from './MultipleReportsDiv';

const FinancialReports = (props) =>{
    
    const [CoReq , setCoReq] = useState('')
    const CoReqhandler = (sara)=>{setCoReq(sara)}
    useEffect(()=>{CoReqhandler(CoReq)});

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


    //SelectedCourseshandlerProp={props.SelectedCourseshandlerProp} SelectedCoursesProp={props.SelectedCoursesProp}

    const ClickedDivs = () =>{
        Clickedhandler(true)

    }


    const UnClickedDivs = () =>{
        Clickedhandler(false)

    }




    return <div className='Admin_FinancialReports_MainDiv'>
                <div className='Admin_RefundReq_Div'>
                    <br></br>
                    <h1 className='h1_Admin_Courses'>Refund Requests</h1>
                    <br></br>    
                    <div className='Admin_ReportsPage_RefundReqHeader_btnDiv'>
                        <button className='Admin_RefundReqSelect_btn' >Accept All</button>
                        <button className='Admin_RefundReqSelect_btn' >Reject All</button>
                    </div>
                    <div>
                        {/* <MultipleReportsDiv RefundRequests = {props.RefundRequests} Type = 'Refund'/> */}
                    </div>
                </div>

                <div className='Admin_FinancialReports_Div'>
                    <br></br>
                    <div className='Admin_FinancialReports_Div_Header'>
                        <br></br>
                        <h1 className='h1_Admin_FinancialReports_Header'>Financial Reports</h1>
                        <br></br>
                    </div>
                        <br></br>
                    <div className='Admin_FinancialReports_InnerDiv'>
                        <MultipleReportsDiv Reports = {props.Reports} Type = 'Financial'/>
                    </div>
                </div>

                    <br></br> 

                </div>
}

export default FinancialReports

// CourseID = {props.CourseID}