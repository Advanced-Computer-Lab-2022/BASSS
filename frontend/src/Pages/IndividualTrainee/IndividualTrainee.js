import '../../App.css'
import { Link } from 'react-router-dom'
import './IndividualTrainee.css'
import IndividualTraineeNavBar from '../IndividualTrainee/IndividualTraineeNavBar/IndividualTraineeNavBar'
import Courses from '../../components/Courses/Courses';

function IndividualTrainee(){
    return(
        <>
        <IndividualTraineeNavBar/>
        <div className='IndividualTrainee-body'>
        <Link to ="/IndividualTrainee/SelectCountry">
        <button className='selectcountrybtn'> select your country</button>
        </Link>
        <Courses Link = "/individualtrainee/CourseDetails" />
        </div>
        </>
    )
}
export default IndividualTrainee;