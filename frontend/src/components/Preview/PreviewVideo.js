import React from 'react'
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed'
import IndividualTraineeNavBar from '../../Pages/IndividualTrainee/IndividualTraineeNavBar/IndividualTraineeNavBar';
import CorporateTraineeNavBar from '../../Pages/CorporateTrainee/CorporateTraineeNavBar/CorporateTraineeNavBar';
import { useLocation } from 'react-router-dom';

function PreviewVideo() {
    const location = useLocation();
    var ind =false;
    var corp = false;
    const totalpath = window.location.pathname;
    var mySubString = totalpath.substring(
      totalpath.indexOf("/") + 1, 
      totalpath.lastIndexOf("/")
    )
    if(mySubString==='corporatetrainee')
    {
      corp = true;
    }   
    else if (mySubString === 'individualtrainee')
    {
      ind=true;
    }
  return (
    <div className='General_Body'>
        {ind&&<IndividualTraineeNavBar/>}
        {corp&&<CorporateTraineeNavBar/>}
        <div className='videoPre_adham'>
      <YoutubeEmbed embedId={location.state[0]}/>
        </div>
    </div>
  )
}

export default PreviewVideo
