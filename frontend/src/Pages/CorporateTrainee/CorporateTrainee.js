import '../../App.css'
import { Link } from 'react-router-dom'
import './CorporateTrainee.css'
import Search from '../../components/Search/Search';
import NavBar from '../../components/Navbar/Navbar';
function CorporateTrainee(){
    return(
        <>
        <div className='CorporateTrainee-body'>
        <NavBar  FirstLinkText='Home' SecondLinkText='My Courses' ThirdLinkText='View Courses' FourthLinkText=''  
        ButtonLinkText='Logout' 
        LogoLinkTo='/Instructor' FirstLinkTo='/CorporateTrainee' SecondLinkTo='/CorporateTrainee/MyCourses' ThirdLinkTo='/Courses' FourthLinkTo='' 
        ButtonLinkTo='/'/>
        <Search Type='corporate'/>
        <Link to ="/CorporateTrainee/SelectCountry">
        <button className='instructor_selectcountrybtn'> select your country</button>
        </Link>
        <Link to ="/CorporateTrainee/myInfo">
        <button> edit my info</button>
        </Link>
        </div>
        </>
    )
}
export default CorporateTrainee;