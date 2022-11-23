import '../../App.css'
import { Link } from 'react-router-dom'
import './CorporateTrainee.css'
function CorporateTrainee(){
    return(
        <>
        <div className='CorporateTrainee-body'>
        <Link to ="/CorporateTrainee/SelectCountry">
        <button className='selectcountrybtn'> select your country</button>
        </Link>
        </div>
        </>
    )
}
export default CorporateTrainee;