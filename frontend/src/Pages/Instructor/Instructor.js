import '../../App.css'
//import SelectCountry from '../../components/SelectCountry/SelectCountry';
import { Link } from 'react-router-dom'
import './Instructor.css'
import Courses from '../../components/Courses/Courses';
function Instructor(){
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
        <Courses/>
        </div>
        </>
    )
}
export default Instructor;
