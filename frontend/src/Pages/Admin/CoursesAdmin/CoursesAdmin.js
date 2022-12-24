import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CourseDetilsDivAdmin from '../CoursesAdmin/CourseDetilsDivAdmin'
import AdminNavBar from '../AdminNavBar/AdminNavBar';
import '../Admin.css';
import MultipleCoursesDiv from '../CoursesAdmin/MultipleCoursesDiv'
import Search from '../../../components/Search/Search';
import SearchAdminAllCourses from '../../../components/SearchAdminAllCourses/SearchAdminAllCourses';

export default function CoursesAdmin(){


    const [AllCoursesArray , setAllCoursesArray] = useState([])
    const AllCoursesArrayhandler = (sara)=>{setAllCoursesArray(sara)}
    useEffect(()=>{AllCoursesArrayhandler(AllCoursesArray)});

    const [SelectedCourses , setSelectedCourses] = useState([])
    const SelectedCourseshandler = (sara)=>{setSelectedCourses(sara)}
    useEffect(()=>{ SelectedCourseshandler(SelectedCourses)},[SelectedCourses]);

    useEffect(()=>{GetCourses()});

    const SetPromotionHandler = () =>{
        alert(SelectedCourses)
    }

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
                <div className='Admin_AllCourses_Div_Header'>
                    <button className='Admin_AddPromtion_btn' onClick={SetPromotionHandler}> Set Promotion</button>
                    <br></br>
                    <h1 className='h1_Admin_AllCourses_Header'>All Courses</h1>
                    <br></br>
                    <div className='Admin_AllCoursesSearch_Div'>
                        <SearchAdminAllCourses/>
                    </div>
                    <br></br>
                    <button className='Admin_AllCoursesFilter_Div'> Filter</button>
                </div>
                <br></br>
                <MultipleCoursesDiv AllCoursesArrayProp={AllCoursesArray} SelectedCourseshandlerProp={SelectedCourseshandler} SelectedCoursesProp={SelectedCourses} />
            </div>
        </div>
    </div>
}
//AllCoursesArrayProp={AllCoursesArray}