import '../../App.css'
//import SelectCountry from '../../components/SelectCountry/SelectCountry';
import { Link } from 'react-router-dom'
import './Instructor.css'
import InstructorNavBar from './InstructorNavBar/InstructorNavBar'
function Instructor(){
    return(
        <>
        <div>
            <InstructorNavBar/>
            <div className='Instructor-body'>
            <Link to ="/instructor/SelectCountry">
            <button> select your country</button>
            </Link>
            {/* <SelectCountry/> */}
            </div>
        </div>
        </>
    )
}
export default Instructor;
