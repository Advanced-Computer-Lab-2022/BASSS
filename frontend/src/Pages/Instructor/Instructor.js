import '../../App.css'
import SelectCountry from '../../components/SelectCountry/SelectCountry';
import { Link } from 'react-router-dom'
import './Instructor.css'
function Instructor(){
    return(
        <>
        <div className='Instructor-body'>
        <Link to ="/instructor/SelectCountry">
        <button> select your country</button>
        </Link>
        {/* <SelectCountry/> */}
        </div>
        </>
    )
}
export default Instructor;