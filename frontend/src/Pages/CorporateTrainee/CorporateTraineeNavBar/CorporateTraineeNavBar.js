import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';

export default function CorporateTraineeNavBar(){
    return <div>
    <Navbar SecondLinkText='Courses' FirstLinkText=' ' ThirdLinkText='Reports' FourthLinkText='Add User'  
    ButtonLinkText='Logout' 
    LogoLink='/' SecondLinkTo='/CoursesAdmin' FirstLinkTo='/AdminProfile' ThirdLinkTo='/AdminReports' FourthLinkTo='/AdminAddUsers' 
    ButtonLinkTo='/'/>
    </div>
}

