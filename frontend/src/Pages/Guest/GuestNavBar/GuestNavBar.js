import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';

export default function GuestNavBar(){
    return <div>
    <Navbar SecondLinkText='Sara' FirstLinkText='Courses' ThirdLinkText='' FourthLinkText='Signup'  
    ButtonLinkText='Login' 
    LogoLinkTo='/adham' SecondLinkTo='/Sara' FirstLinkTo='/meow' ThirdLinkTo='/signup' FourthLinkTo='/signup' 
    ButtonLinkTo='/login'/>
    </div>
}