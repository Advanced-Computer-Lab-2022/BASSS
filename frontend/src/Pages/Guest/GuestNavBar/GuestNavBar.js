import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';

const GuestNavBar = (props) =>{
    return <div>
    <Navbar type = 'Guest' handleLogin = {props.handleLogin} handleSignup = {props.handleSignup}
    SecondLinkText='Sara' FirstLinkText='Courses' ThirdLinkText='Login' FourthLinkText='Signup'  
    ButtonLinkText='Login' 
    LogoLinkTo='/adham' SecondLinkTo='/Sara' FirstLinkTo='/meow'   
    ButtonLinkTo='/login'/>
    </div>
}

export default GuestNavBar;