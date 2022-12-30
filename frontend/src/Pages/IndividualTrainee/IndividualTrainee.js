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
import Downloadcert from '../../components/Downloadcert/Downloadcert';
import Writenotes from '../../components/Writenotes/Writenotes';

function IndividualTrainee(){

    return(
        <>
        {/* <IndividualTraineeNavBar/> */}
        <div className='IndividualTrainee-body'>
            {/*
        <Search Type='indvidual'/>


        <Link to ="/IndividualTrainee/myInfo">
        <button> edit my info</button>
        </Link>


        <br></br><br></br><br></br><br></br><br></br><br></br>

        <Link to ="/IndividualTrainee/SelectCountry">
        <button className='selectcountrybtnindividual'> select your country</button>
        </Link>


        <Writenotes/>


        {/* <Forgetpass Type="individualTrainee"/> 

        <Downloadcert/>
        

        --------------  all  courses done ----------------------
        <Link to ="/AllCourses">
        <button >View AllCourses </button>
        </Link>
        --------------------------------------------------------

        <br></br>
        <Link to ="/mostViewd">
        <button >View our most popular Courses </button>
        </Link>

        <Link to ="/individualTrainee/myReports">
        <button >View My Reports </button>
        </Link>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        
    */}
        <IndividualCourses Link = "/individualtrainee/myCourseDetails"/>
        <br></br><br></br><br></br><br></br><br></br><br></br>

        </div>
        </>
    )
}
export default IndividualTrainee;