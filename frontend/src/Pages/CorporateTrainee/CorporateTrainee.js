import '../../App.css'
import { Link } from 'react-router-dom'
import './CorporateTrainee.css'
import CorporateTraineeNavBar from './CorporateTraineeNavBar/CorporateTraineeNavBar';
import CorporateCourses from '../../components/CorporateCourses/CorporateCourses';
import CorporateTraineeCourse from '../../components/Courses/CorporateTraineeCourses'
function CorporateTrainee(){
    return(
        <>
        <CorporateTraineeNavBar/>
        <div className='CorporateTrainee-body'>
        <Link to ="/CorporateTrainee/SelectCountry">
        <button className='selectcountrybtn'> select your country</button>
        </Link>

        <CorporateCourses/>
        <CorporateTraineeCourse Link="/corporatetrainee/CourseDetails"/>
        </div>
        </>
    )
}
export default CorporateTrainee;