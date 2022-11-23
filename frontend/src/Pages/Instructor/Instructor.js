import '../../App.css'
//import SelectCountry from '../../components/SelectCountry/SelectCountry';
import { Link } from 'react-router-dom'
import './Instructor.css'
function Instructor(){
    return(
        <>
        <div className='Instructor-body'>
        <Link to ="/instructor/SelectCountry">
        <button className='selectcountrybtn'> select your country</button>
        </Link>
        </div>
        </>
    )
}
export default Instructor;
