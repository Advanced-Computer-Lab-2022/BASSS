import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';

export default function GuestNavBar(){
    return <div>
    <Navbar SecondLinkText='Sara' FirstLinkText='meow' ThirdLinkText='jojo' FourthLinkText='koky'  
    ButtonLinkText='Logout' 
    LogoLinkTo='/adham' SecondLinkTo='/Sara' FirstLinkTo='/meow' ThirdLinkTo='/jojo' FourthLinkTo='/koky' 
    ButtonLinkTo='/signUp'/>
    </div>
}