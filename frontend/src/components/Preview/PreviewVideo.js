import React from 'react'
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed'
import IndividualTraineeNavBar from '../../Pages/IndividualTrainee/IndividualTraineeNavBar/IndividualTraineeNavBar';
import CorporateTraineeNavBar from '../../Pages/CorporateTrainee/CorporateTraineeNavBar/CorporateTraineeNavBar';
import { useLocation } from 'react-router-dom';
import '../../components/Login/Login.css'
import { Button } from '../../GeneralCss';
import GuestNavBar from '../../Pages/Guest/GuestNavBar/GuestNavBar';

const PreviewVideo = (props) => {
    const location = useLocation();
    var ind =false;
    var corp = false;
    var Guest = false;
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
    else if (mySubString === 'individualtrainee')
    {
      ind=true;
    }
  return (
    <div className='ViewPreview_sara_mainDiv'>
        {/* {ind&&<IndividualTraineeNavBar/>}
        {corp&&<CorporateTraineeNavBar/>}
        {Guest&&<GuestNavBar/>} */}
        <div className='videoPre_adham'>
      <YoutubeEmbed embedId={props.VLink}/>
        </div>
        <div className='Sara_ViewPreviewVideo_DoneButtonDiv'>
          <Button font = '35' onClick={props.Previewhandler}>Done</Button>
        </div>
    </div>
  )
}

export default PreviewVideo
//location.state[0]