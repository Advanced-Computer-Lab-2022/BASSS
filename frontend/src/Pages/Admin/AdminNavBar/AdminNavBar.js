import React from 'react';
//import NavBarGeneric from '../../../components/NavBarComponent/NavBarGeneric';
import Navbar from '../../../components/Navbar/Navbar';

export default function AdminNavBar(){
    return <div>
    <Navbar SecondLinkText='Courses' FirstLinkText='' ThirdLinkText='Reports' FourthLinkText='Add User'  
    ButtonLinkText='Logout' 
    LogoLink='/Admin' SecondLinkTo='/CoursesAdmin'  ThirdLinkTo='/AdminReports' FourthLinkTo='/AdminAddUsers' 
    ButtonLinkTo='/'/>
    </div>
}

//FirstLinkTo='/AdminProfile'

//FifthLinkTo='/CoursesAdmin' , FifthLinkText='Courses'