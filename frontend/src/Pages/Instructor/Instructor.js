import '../../App.css'
//import SelectCountry from '../../components/SelectCountry/SelectCountry';
import { Link } from 'react-router-dom'
import './Instructor.css'
import Courses from '../../components/Courses/Courses';
import editmyInfo from '../../components/EditmyInfo/EditmyInfo';
//import app from '../../../../backend/App.js';

function Instructor(){

    const clickhandler1 = ()=>{
       
       }

    
    return(
        <>
        <div className='Instructor-body'>
        <Link to ="/instructor/SelectCountry">
        <button> select your country</button>
        </Link>
        <Link to ="/instructor/MyCourses">
            <button>
                View My Courses</button>
            </Link>
        {/* <SelectCountry/> */}
        <Link to ="/instructor/myInfo">
        <button> edit my info</button>
        </Link>
        
        
       
        <Courses Link="/instructor/courseDetails"/>
        
        </div>
        </>
    )
}
export default Instructor;
