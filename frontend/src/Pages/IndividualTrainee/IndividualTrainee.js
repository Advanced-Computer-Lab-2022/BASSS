import '../../App.css'
import { Link } from 'react-router-dom'
import './IndividualTrainee.css'
import IndividualTraineeNavBar from '../IndividualTrainee/IndividualTraineeNavBar/IndividualTraineeNavBar'
import Courses from '../../components/Courses/Courses';
import IndividualCourses from '../../components/Courses/IndividualCourses';
import { useState } from 'react';
import axios from 'axios';

function IndividualTrainee(){

    return(
        <>
        <IndividualTraineeNavBar/>
        <div className='IndividualTrainee-body'>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <Link to ="/IndividualTrainee/SelectCountry">
        <button className='selectcountrybtnindividual'> select your country</button>
        </Link>

        <Courses Link = "/individualtrainee/CourseDetails" />
        <br></br><br></br><br></br><br></br><br></br><br></br>
        
        <IndividualCourses Link = "/individualtrainee/myCourseDetails"/>
        <br></br><br></br><br></br><br></br><br></br><br></br>

        </div>
        </>
    )
}
export default IndividualTrainee;