import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../Pages/Admin/Admin.css'
import MultipleReportsDiv from './MultipleReportsDiv';

const TechnicalReports = (props) =>{
    
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




    return <div className='Admin_AllReports_InnerDiv'>
        <MultipleReportsDiv  Reports = {props.Reports}/>
    </div>
}

export default TechnicalReports

// CourseID = {props.CourseID}