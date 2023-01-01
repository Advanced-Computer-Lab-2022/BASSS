import '../../App.css'
import axios from 'axios';

//import SelectCountry from '../../components/SelectCountry/SelectCountry';
import { Link } from 'react-router-dom'
//import './Downloadcert.css'


function sendcertbymail(){

    const clickhandler1 = async ()=>{
       alert('chek your mail')
        await axios.get(`http://localhost:9000/individualtrainee/sendcertificate`).then(
            (res) => { 
                
            }
             );
       }
    return(
        <div>
            <button onClick={clickhandler1}>Send Certificate by Mail</button>
            
        </div>
    )
}
export default sendcertbymail;