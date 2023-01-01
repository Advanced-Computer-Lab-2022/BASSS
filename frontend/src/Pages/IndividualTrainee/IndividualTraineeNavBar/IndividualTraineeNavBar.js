import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';

export default function IndividualTraineeNavBar(){
    return <div>
    <Navbar  FirstLinkText=' ' SecondLinkText='Home' ThirdLinkText='My Reports' FourthLinkText='My Info'  
    ButtonLinkText='Logout' 
    LogoLink='/'  FirstLinkTo='/' SecondLinkTo='/IndividualTrainee' ThirdLinkTo='/individualTrainee/myReports' FourthLinkTo='/IndividualTrainee/myInfo' 
    ButtonLinkTo='/logout'/>
    </div>
}

