import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';

export default function AdminNavBar(){
    return <div>
    <Navbar SecondLinkText='My Courses' FirstLinkText='Home' ThirdLinkText='View Courses' FourthLinkText=''  
    ButtonLinkText='Logout' 
    LogoLinkTo='/Instructor' SecondLinkTo='/instructor/MyCourses' FirstLinkTo='/instructor' ThirdLinkTo='/Courses' FourthLinkTo='' 
    ButtonLinkTo='/'/>
    </div>
}