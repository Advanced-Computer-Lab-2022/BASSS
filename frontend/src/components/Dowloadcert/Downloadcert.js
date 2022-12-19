import '../../App.css'
//import SelectCountry from '../../components/SelectCountry/SelectCountry';
import { Link } from 'react-router-dom'
//import './Downloadcert.css'
import jsPDF from 'jspdf'

function Downloadcert(){

    const clickhandler1 = ()=>{
        var doc = new jsPDF ('landscape','px','a4','false')
        doc.text(160,100,'certificate of completion ')
        doc.text(160,130,'is awarded to: ')
        doc.setFont('Helvertica','bold')
        doc.text(160,160,'Adham Bassel Salama ')
        doc.save('certificate.pdf')
       }
    return(
        <div>
            <button onClick={clickhandler1}>Download Certificate</button>
            
        </div>
    )
}
export default Downloadcert;