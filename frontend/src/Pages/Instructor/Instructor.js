import '../../App.css'
import SelectCountry from '../../components/SelectCountry/SelectCountry';
import { Link } from 'react-router-dom'
import './Instructor.css'
import Courses from '../../components/Courses/Courses';
import editmyInfo from '../../components/EditmyInfo/EditmyInfo';
import Forgetpass from '../../components/Forgetpass/Forgetpass';
import Search from '../../components/Search/Search';
import MyCourses from '../../components/MyCourses/MyCourses';
import InstructorNavBar from './InstructorNavBar/InstructorNavBar';
import ViewRating from '../../components/ViewRating/ViewRating';
import { useState } from 'react';
import InstructorProfile from '../../components/Profiles/InstructorProfile';
import Login from '../../components/Login/Login';

function Instructor(){
    const [profile,setProfile] =useState(false);

    const profileHandler = () => {
        setProfile(!profile)
    }
    
    return(
        <>
        <div className='Instructor-body'>
        <InstructorNavBar FirstLinkTo='/instProfile'/>
        </div>
        </>
    )
}
export default Instructor;