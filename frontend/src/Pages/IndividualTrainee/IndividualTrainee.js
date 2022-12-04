import '../../App.css'
import { Link } from 'react-router-dom'
import './IndividualTrainee.css'
import Search from '../../components/Search/Search';
import Navbar from '../../components/Navbar/Navbar';
import Courses from '../../components/Courses/Courses';
function IndividualTrainee(){
    return(
        <>
        <div className='IndividualTrainee-body'>
        <Navbar  FirstLinkText='Home' SecondLinkText='My Courses' ThirdLinkText='View Courses' FourthLinkText=''  
        ButtonLinkText='Logout' 
        LogoLinkTo='/Instructor' FirstLinkTo='/IndividualTrainee' SecondLinkTo='/IndividualTrainee0/MyCourses' ThirdLinkTo='/Courses' FourthLinkTo='' 
        ButtonLinkTo='/'/>

        <Search Type='indvidual'/>
        <Link to ="/IndividualTrainee/SelectCountry">
        <button className='instructor_selectcountrybtn'> select your country</button>
        </Link>
        <Link to ="/IndividualTrainee/myInfo">
        <button> edit my info</button>
        </Link>

        <Courses/>

        </div>
        </>
    )
}
export default IndividualTrainee;