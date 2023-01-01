import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';

export default function IndividualTraineeNavBar(){
    return <div>
    <Navbar  FirstLinkText=' ' SecondLinkText='Courses' ThirdLinkText='My courses' FourthLinkText='My Profile'  
    ButtonLinkText='Logout' 
    LogoLink='/'  FirstLinkTo='/AdminProfile' SecondLinkTo='/CoursesAdmin' ThirdLinkTo='' FourthLinkTo='/individualProfile' 
    ButtonLinkTo='/logout'/>
    </div>
}

