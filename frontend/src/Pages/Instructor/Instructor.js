import '../../App.css'
import SelectCountry from '../../components/SelectCountry/SelectCountry';
import { Link } from 'react-router-dom'
import './Instructor.css'
import Search from '../../components/Search/Search';
import Courses from '../../components/Courses/Courses';
import MyCourses from '../../components/MyCourses/MyCourses';
function Instructor(){
    return(
        <>
        <div className='Instructor-body'>
        {/* <Link to ="/instructor/SelectCountry">
        <button> select your country</button>
        </Link> */}
        
        
        <Search/>
        <Courses/>
        </div>
        </>
    )
}
export default Instructor;