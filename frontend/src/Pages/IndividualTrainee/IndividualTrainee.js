import '../../App.css'
import { Link } from 'react-router-dom'
import './IndividualTrainee.css'
import Search from '../../components/Search/Search';
import Navbar from '../../components/Navbar/Navbar';
import IndividualTraineeNavBar from '../IndividualTrainee/IndividualTraineeNavBar/IndividualTraineeNavBar'
import Courses from '../../components/Courses/Courses';
import IndividualCourses from '../../components/Courses/IndividualCourses';
import { useState } from 'react';
import axios from 'axios';
import Forgetpass from '../../components/Forgetpass/Forgetpass';

function IndividualTrainee(){

    return(
        <>
        <IndividualTraineeNavBar/>
        <div className='IndividualTrainee-body'>
        <Search Type='indvidual'/>
        <Link to ="/IndividualTrainee/myInfo">
        <button> edit my info</button>
        </Link>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <Link to ="/IndividualTrainee/SelectCountry">
        <button className='selectcountrybtnindividual'> select your country</button>
        </Link>
        <Forgetpass Type="individualTrainee"/>

        {/* <Courses Link = "/individualtrainee/CourseDetails" /> */}
        <br></br><br></br><br></br><br></br><br></br><br></br>
        
        <IndividualCourses Link = "/individualtrainee/myCourseDetails"/>
        <br></br><br></br><br></br><br></br><br></br><br></br>

        </div>
        </>
    )
}
export default IndividualTrainee;