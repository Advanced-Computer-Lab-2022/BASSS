import '../../App.css'
import { Link } from 'react-router-dom'
import './CorporateTrainee.css'
import Search from '../../components/Search/Search';
function CorporateTrainee(){
    return(
        <>
        <div className='CorporateTrainee-body'>
        <Link to ="/CorporateTrainee/SelectCountry">
        <button className='instructor_selectcountrybtn'> select your country</button>
        </Link>
        <Search Type='corporate'/>
        </div>
        </>
    )
}
export default CorporateTrainee;