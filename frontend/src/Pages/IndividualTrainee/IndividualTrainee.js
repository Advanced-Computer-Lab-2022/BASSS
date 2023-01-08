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
import TraineeProfile from '../../components/Profiles/TraineeProfile';

function IndividualTrainee(){
    const [profile,setProfile] = useState(false);

    const profileHandler = () => {
        setProfile(!profile)
    }

    return(
        <>
        <div className='IndividualTrainee-body'>
        <IndividualTraineeNavBar profileHandler={profileHandler}/>
        {profile && <TraineeProfile Who='individualtrainee'/>}


        {!profile && 
         <div>
            
        <IndividualCourses Link = "/individualtrainee/myCourseDetails"/>
        </div>}

        </div>
        </>
    )
}
export default IndividualTrainee;