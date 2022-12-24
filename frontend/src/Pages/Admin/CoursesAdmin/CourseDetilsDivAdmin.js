import React, { useEffect, useState } from 'react';
import axios from 'axios';

//import NavBarGeneric from '../../NavBarComponent/NavBarGeneric';
import OneCourseDetails from '../CoursesAdmin/OneCourseDetails'
import '../Admin.css';

const CourseDetilsDivAdmin = (props) =>{

    const [AllCoursesArray , setAllCoursesArray] = useState([])
    const AllCoursesArrayhandler = (sara)=>{setAllCoursesArray(sara)}
    useEffect(()=>{AllCoursesArrayhandler(AllCoursesArray)});

    const [OneCourseDiv , setOneCourseDiv] = useState(false)
    const OneCourseDivhandler = ()=>{setOneCourseDiv(!OneCourseDiv)}
    //useEffect(()=>{OneCourseDivhandler(OneCourseDiv)});
    
    const [Course , setCourse] = useState('')
    const Coursehandler = (sara)=>{setCourse(sara)}
    useEffect(()=>{Coursehandler(Course)});

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

    useEffect(()=>{GetCourse()});

    //SelectedCourseshandlerProp={props.SelectedCourseshandlerProp} SelectedCoursesProp={props.SelectedCoursesProp}

    const ClickedDivs = () =>{
        Clickedhandler(true)
        console.log(Clicked)
            var SelectedCourses1 = props.SelectedCoursesProp.concat(props.CourseID)
            //alert(SelectedCourses1)
            props.SelectedCourseshandlerProp(SelectedCourses1)
            //alert('Array:')
            alert(props.SelectedCoursesProp)
    }


    const UnClickedDivs = () =>{
        Clickedhandler(false)
        console.log(Clicked)
        for(let i = 0 ; i < props.SelectedCoursesProp.length ; i++){
            if(props.CourseID === props.SelectedCoursesProp[i]){
                alert(props.SelectedCoursesProp)
                props.SelectedCoursesProp.splice(i,1)
                //alert(SelectedCourses2)
                props.SelectedCourseshandlerProp(props.SelectedCoursesProp)
                //alert('Array:')
                alert(props.SelectedCoursesProp)
                return 
            }
        }

    }

    const GetCourse = async(req,res)=>{

        await axios.get(`http://localhost:9000/course/courseDetails/${props.CourseID}`).then(
            (res) => {
                const result = res.data
                Coursehandler(result)
                //alert(props.CourseID)
             })
    }


    return <div>
        {!Clicked &&<div className='Admin_OneCourse_Div' onClick={ClickedDivs} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className='Admin_OneCourse_Image'></div>
            <h1 className='CourseDetailsAdmin_h1'>Course Title : {Course.Title}</h1>
            <h1 className='CourseDetailsAdmin_h1'>Course Title : {Course.Subject}</h1>
            <h1 className='CourseDetailsAdmin_h1'>Promotion State : {Course.PromotionState}</h1>
            <h1 className='CourseDetailsAdmin_h1'>Course Views : {Course.Views}</h1>
            {isHovering && <OneCourseDetails CourseID = {props.CourseID}/>}
            
        </div>}
        {Clicked &&<div className='Admin_OneCourse_Div_Clicked' onClick={UnClickedDivs} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className='Admin_OneCourse_Image'></div>
            <h1 className='CourseDetailsAdmin_h1'>Course Title : {Course.Title}</h1>
            <h1 className='CourseDetailsAdmin_h1'>Course Title : {Course.Subject}</h1>
            <h1 className='CourseDetailsAdmin_h1'>Promotion State : {Course.PromotionState}</h1>
            <h1 className='CourseDetailsAdmin_h1'>Course Views : {Course.Views}</h1>
            {isHovering && <OneCourseDetails CourseID = {props.CourseID}/>}
            
        </div>}
    </div>
}

export default CourseDetilsDivAdmin

// CourseID = {props.CourseID}