import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';

export default function InstructorNavBar(){
    return <div>
    <Navbar  FirstLinkText='My Courses ' SecondLinkText='Create Course' 
    ThirdLinkText='Select Country' FourthLinkText='My Profile'  
    ButtonLinkText='Logout' 

    LogoLink='/'  FirstLinkTo='/instructor/MyCourses' SecondLinkTo='/instructor/CreateCourse'
    ThirdLinkTo='/instructor/SelectCountry' FourthLinkTo='/instructor/myInfo' 
    ButtonLinkTo='/'/>
    </div>
}

