import React from 'react';
//import NavBarGeneric from '../../../components/NavBarComponent/NavBarGeneric';
import Navbar from '../../../components/Navbar/Navbar';

export default function AdminNavBar(){
    return <div>
    <Navbar B2ndLinkTo = '/sara'
  B2ndLinkText = 'Sara Saad'
  B3rdLinkTo = '/sara'
  B3rdLinkText = 'Sara Saad' B1stLinkTo = '/sara' B1stLinkText = 'Sara Saad' SecondLinkText='Courses' FirstLinkText='' ThirdLinkText='Reports' FourthLinkText='Add User'  
    ButtonLinkText='Logout' 
    LogoLink='/Admin' SecondLinkTo='/CoursesAdmin'  ThirdLinkTo='/AdminReports' FourthLinkTo='/AdminAddUsers' 
    ButtonLinkTo='/logout'/>
    </div>
}

//FirstLinkTo='/AdminProfile'

//FifthLinkTo='/CoursesAdmin' , FifthLinkText='Courses'