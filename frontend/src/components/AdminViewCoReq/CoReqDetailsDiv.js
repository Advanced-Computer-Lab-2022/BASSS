import React, { useEffect, useState } from 'react';
import axios from 'axios';

//import NavBarGeneric from '../../NavBarComponent/NavBarGeneric';
import '../../Pages/Admin/Admin.css'
import OneCoReqDetails from './OneCoReqDetails';

const CoReqDetailsDiv = (props) =>{
    
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

    useEffect(()=>{getCoReq()});

    //SelectedCourseshandlerProp={props.SelectedCourseshandlerProp} SelectedCoursesProp={props.SelectedCoursesProp}

    const ClickedDivs = () =>{
        Clickedhandler(true)
        console.log(Clicked)
            var SelectedCourses1 = props.SelectedCoursesProp.concat(props.CourseID)
            props.SelectedCourseshandlerProp(SelectedCourses1)
    }


    const UnClickedDivs = () =>{
        Clickedhandler(false)
        console.log(Clicked)
        for(let i = 0 ; i < props.SelectedCoursesProp.length ; i++){
            if(props.CourseID === props.SelectedCoursesProp[i]){
                props.SelectedCoursesProp.splice(i,1)
                props.SelectedCourseshandlerProp(props.SelectedCoursesProp)
                return 
            }
        }

    }

    const getCoReq = async(req,res)=>{

        await axios.get(`http://localhost:9000/admin/getCoReqByID/${props.CoReqID}`).then(
            (res) => {
                const result = res.data
                CoReqhandler(result)
                //alert(props.CourseID)
             })
    }


    return <div>
        {!Clicked &&<div className='Admin_OneCoReq_Div'  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h1 className='CourseDetailsAdmin_h1'>Status: {CoReq.Status}</h1>
            <h1 className='CourseDetailsAdmin_h1'>CourseID: {CoReq.CourseID}</h1>
            <h1 className='CourseDetailsAdmin_h1'>Course Title: {CoReq.CourseTitle}</h1>
            {isHovering && <OneCoReqDetails CoReqID = {props.CoReqID} CoReq = {CoReq}/>}
            
        </div>}
        {Clicked &&<div className='Admin_OneCoReq_Div_Clicked'  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h1 className='CourseDetailsAdmin_h1'>Status: {CoReq.Status}</h1>
            <h1 className='CourseDetailsAdmin_h1'>CourseID: {CoReq.CourseID}</h1>
            <h1 className='CourseDetailsAdmin_h1'>Course Title: {CoReq.CourseTitle}</h1>
            {isHovering && <OneCoReqDetails CoReqID = {props.CoReqID} CoReq = {CoReq}/>}
            
        </div>}
    </div>
}

export default CoReqDetailsDiv

// CourseID = {props.CourseID}