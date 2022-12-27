import React from 'react'
import axios from 'axios';
//import './EditPass.css'
const { useState, useEffect } = require("react");
function EditnewPass(props) {
    const type = props.Type;
    const [pass,setpass] = useState('');
      //alert(mysubstring)
            const getpassword =  async () => {
        
                await axios.get(`http://localhost:9000/${type}/myInfo/pass/${choice}`).then(
                    (res) => { 
                        const password = res.data.message
                       
                        setpass(password)
                        // alert(pass)

                    }
                     );
                }
              //  alert(pass)
    var [choice,setchoice] = useState([]);
    var [message,setmessage] = useState([]);
    const changehandler =  async(e)=>{
        setchoice(e.target.value);
     }
    
   
     
     const clickhandler1 = ()=>{
       getpassword()
     }
    

  return (
    <div className='infobody'> 


<div> 

<button className='info-btn1'onClick={clickhandler1}>submit</button>

<input className='info-textbox1' placeholder='new password' onChange={changehandler} value={choice}/>
<label>{pass}</label>

</div>


    </div>
  )
}

export default EditnewPass