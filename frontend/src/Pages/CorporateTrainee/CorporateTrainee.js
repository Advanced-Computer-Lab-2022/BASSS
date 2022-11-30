import '../../App.css'
import { Link } from 'react-router-dom'
import './CorporateTrainee.css'
import CorporateCourses from '../../components/CorporateCourses/CorporateCourses';

function CorporateTrainee(){
    return(
        <>
        <div className='CorporateTrainee-body'>
        <Link to ="/CorporateTrainee/SelectCountry">
        <button className='selectcountrybtn'> select your country</button>
        </Link>

        <CorporateCourses/>

        </div>
        </>
    )
}
export default CorporateTrainee;