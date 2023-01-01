import '../../App.css'
import { Link } from 'react-router-dom'
//import './Writenotes.css'
import jsPDF from 'jspdf'
const { useState, useEffect } = require("react");
function Writenotes(){

    
    var [choice,setchoice] = useState([]);
    const changehandler =  async(e)=>{
        setchoice(e.target.value);
     }

    const clickhandler1 = ()=>{
        var doc = new jsPDF ('landscape','px','a4','false')
        doc.text(160,100,choice)
        doc.setFont('Helvertica','bold')
        doc.save('notes.pdf')
       }
    return(
        <div>
            <input placeholder='write notes' onChange={changehandler} value={choice} className='writenotesbox'/>
            <button onClick={clickhandler1}>Download notes as pdf</button>
            
        </div>
    )
}
export default Writenotes;