import React, { useEffect, useState } from 'react';
import axios from 'axios';

//import NavBarGeneric from '../../NavBarComponent/NavBarGeneric';
import OneCourseDetails from '../CoursesAdmin/OneCourseDetails'
import '../Admin.css';

const CourseDetilsDivAdmin = (props) =>{

    var CourseID = props.CourseID

    const [AllCoursesArray , setAllCoursesArray] = useState([])
    const AllCoursesArrayhandler = (sara)=>{setAllCoursesArray(sara)}
    useEffect(()=>{AllCoursesArrayhandler(AllCoursesArray)});

    const [OneCourseDiv , setOneCourseDiv] = useState(false)
    const OneCourseDivhandler = ()=>{setOneCourseDiv(!OneCourseDiv)}
    //useEffect(()=>{OneCourseDivhandler(OneCourseDiv)});
    
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    useEffect(()=>{GetAllCourses()});

    const GetAllCourses = async(req,res)=>{

        await axios.get(`http://localhost:9000/course/`).then(
            (res) => {
                const result = res.data
                AllCoursesArrayhandler(result)
             })
    }

    const GetCourse = async(req,res)=>{

        await axios.get(`http://localhost:9000/course/`).then(
            (res) => {
                const result = res.data
                AllCoursesArrayhandler(result)
             })
    }


    return <div className='Admin_OneCourse_Div' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <h1>CourseDetilsDivAdmin</h1>
        {isHovering && <OneCourseDetails CourseID = {props.CourseID}/>}
        
    </div>
}

export default CourseDetilsDivAdmin

// CourseID = {props.CourseID}