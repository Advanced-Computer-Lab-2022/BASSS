import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';

export default function InstructorNavBar(){
    return <div>
    <Navbar  FirstLinkText='Home' SecondLinkText='My Courses' 
    ThirdLinkText='Select Country' FourthLinkText='My Profile'  
    ButtonLinkText='Logout' 

    LogoLink='/'  FirstLinkTo='/instructor' SecondLinkTo='/instructor/MyCourses'
    ThirdLinkTo='/instructor/SelectCountry' FourthLinkTo='/instructor/myInfo' 
    ButtonLinkTo='/logout'/>
    </div>
}

