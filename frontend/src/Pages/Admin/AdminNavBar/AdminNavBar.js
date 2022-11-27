import React from 'react';
//import NavBarGeneric from '../../../components/NavBarComponent/NavBarGeneric';
import Navbar from '../../../components/Navbar/Navbar';

export default function AdminNavBar(){
    return <div>
    <Navbar SecondLinkText='Courses' FirstLinkText='My Profile' ThirdLinkText='Reports' FourthLinkText='Add User'  
    ButtonLinkText='Logout' 
    LogoLink='/Admin' SecondLinkTo='/CoursesAdmin' FirstLinkTo='/AdminProfile' ThirdLinkTo='/AdminReports' FourthLinkTo='/AdminAddUsers' 
    ButtonLinkTo='/'/>
    </div>
}


//FifthLinkTo='/CoursesAdmin' , FifthLinkText='Courses'