import '../../App.css'
import { Link } from 'react-router-dom'
import './IndividualTrainee.css'
import Courses from '../../components/Courses/Courses';
import { useState } from 'react';
import axios from 'axios';

function IndividualTrainee(){

    return(
        <>
        <div className='IndividualTrainee-body'>
        <Link to ="/IndividualTrainee/SelectCountry">
        <button className='selectcountrybtn'> select your country</button>
        </Link>

        <Courses Link = "/individualtrainee/CourseDetails" />
        
        </div>
        </>
    )
}
export default IndividualTrainee;