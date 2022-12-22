import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CourseDetilsDivAdmin from '../CoursesAdmin/CourseDetilsDivAdmin'
import AdminNavBar from '../AdminNavBar/AdminNavBar';
import '../Admin.css';
import MultipleCoursesDiv from '../CoursesAdmin/MultipleCoursesDiv'

export default function CoursesAdmin(){


    const [AllCoursesArray , setAllCoursesArray] = useState([])
    const AllCoursesArrayhandler = (sara)=>{setAllCoursesArray(sara)}
    useEffect(()=>{AllCoursesArrayhandler(AllCoursesArray)});

    useEffect(()=>{GetCourses()});

    const GetCourses = async(req,res)=>{

        await axios.get(`http://localhost:9000/course/`).then(
            (res) => {
                const result = res.data
                AllCoursesArrayhandler(result)
             })
    }

    // GetCourses();

    return <div className='Admin_Body'>
        <div>
            <AdminNavBar/>
        </div>

        <br></br>

        <div className='Admin_CoursesPage_CoursesDiv'>
        
            <br></br>
            
            <div className='Admin_CorporateCourses_Div'>
                <br></br>
                <h1 className='h1_Admin_Courses'>Corporate Courses</h1>
                <br></br>    
            </div>
            
            <br></br>

            <div className='Admin_AllCourses_Div'>
                <br></br>
                <h1 className='h1_Admin_Courses'>All Courses</h1>
                <br></br>
                <MultipleCoursesDiv AllCoursesArrayProp={AllCoursesArray}/>
            </div>
        </div>
    </div>
}
//AllCoursesArrayProp={AllCoursesArray}