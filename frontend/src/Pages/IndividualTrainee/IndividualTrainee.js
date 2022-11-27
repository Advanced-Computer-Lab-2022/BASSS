import '../../App.css'
import { Link } from 'react-router-dom'
import './IndividualTrainee.css'
import Search from '../../components/Search/Search';

function IndividualTrainee(){
    return(
        <>
        <div className='IndividualTrainee-body'>
        <Link to ="/IndividualTrainee/SelectCountry">
        <button className='selectcountrybtn'> select your country</button>
        </Link>

        <Search Type='indvidual'/>
        </div>
        </>
    )
}
export default IndividualTrainee;