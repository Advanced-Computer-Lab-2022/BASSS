import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';

export default function AdminNavBar(){
    return <div>
    <Navbar SecondLinkText='Sara' FirstLinkText='meow' ThirdLinkText='jojo' FourthLinkText='koky'  
    ButtonLinkText='Logout' 
    LogoLinkTo='/Instructor' SecondLinkTo='/Sara' FirstLinkTo='/meow' ThirdLinkTo='/jojo' FourthLinkTo='/koky' 
    ButtonLinkTo='/'/>
    </div>
}