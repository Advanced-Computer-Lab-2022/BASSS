import '../../App.css'
import { Link } from 'react-router-dom'
import './CorporateTrainee.css'
import Search from '../../components/Search/Search';
import Forgetpass from '../../components/Forgetpass/Forgetpass';
import NavBar from '../../components/Navbar/Navbar';
import CorporateTraineeNavBar from './CorporateTraineeNavBar/CorporateTraineeNavBar';
import CorporateCourses from '../../components/CorporateCourses/CorporateCourses';
import CorporateTraineeCourse from '../../components/Courses/CorporateTraineeCourses';
import { useState } from 'react';
import TraineeProfile from '../../components/Profiles/TraineeProfile';

function CorporateTrainee(){

    const [profile,setProfile] = useState(false);

    const profileHandler = () => {
        setProfile(!profile)
    }


    return(
        <>
        <div className='CorporateTrainee-body'>
        <CorporateTraineeNavBar profileHandler={profileHandler}/>
        {profile && <TraineeProfile Who='corporatetrainee'/>}
        {!profile && <CorporateTraineeCourse Link="/corporatetrainee/myCourseDetails"/>}
        </div>
        </>
    )
}
export default CorporateTrainee;