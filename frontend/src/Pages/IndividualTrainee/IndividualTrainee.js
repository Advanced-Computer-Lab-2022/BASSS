import '../../App.css'
import { Link } from 'react-router-dom'
import './IndividualTrainee.css'
import IndividualTraineeNavBar from '../IndividualTrainee/IndividualTraineeNavBar/IndividualTraineeNavBar'
function IndividualTrainee(){
    return(
        <>
        <IndividualTraineeNavBar/>
        <div className='IndividualTrainee-body'>
        <Link to ="/IndividualTrainee/SelectCountry">
        <button className='selectcountrybtn'> select your country</button>
        </Link>
        </div>
        </>
    )
}
export default IndividualTrainee;