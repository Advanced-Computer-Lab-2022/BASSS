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
import InstructorNavBar from '../Instructor/InstructorNavBar/InstructorNavBar';

function IndividualTrainee(){
    const [profile,setProfile] = useState(false);

    const profileHandler = () => {
        setProfile(!profile)
    }

    return(
        <>
        <IndividualTraineeNavBar/>
        <div className='IndividualTrainee-body'>

        {/* <Writenotes/> */}

        <IndividualCourses Link = "/individualtrainee/myCourseDetails"/>
        <br></br><br></br><br></br><br></br><br></br><br></br>

        </div>
        </>
    )
}
export default IndividualTrainee;