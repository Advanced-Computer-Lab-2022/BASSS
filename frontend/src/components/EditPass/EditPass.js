import React from 'react'
import axios from 'axios';
import './EditPass.css'
const { useState, useEffect } = require("react");
function EditPass(props) {
    const type = props.Type;
    const [pass,setpass] = useState('');
    const totalpath = window.location.pathname;
    var mysubstring = totalpath.substring(totalpath.indexOf("/")+1 , totalpath.lastIndexOf("/"))
      //alert(mysubstring)
            const getpassword =  async () => {
        
                await axios.get(`http://localhost:9000/${type}/myInfo/pass/${choice2}/${choice}`).then(
                    (res) => { 
                        const password = res.data.message
                       
                        setpass(password)
                        // alert(pass)

                    }
                     );
                }
              //  alert(pass)
    var [choice,setchoice] = useState([]);
    var [choice2,setchoice2] = useState([]);
    var [message,setmessage] = useState([]);
    const changehandler =  async(e)=>{
        setchoice(e.target.value);
     }
     const changehandler2 =  async(e)=>{
      setchoice2(e.target.value);
   }
   
     
     const clickhandler1 = ()=>{
       getpassword()
     }
    

  return (
    <div className='infobody'> 


<div> 

<button className='info-btn1'onClick={clickhandler1}>submit</button>
<input className='info-textbox1' placeholder='old password' onChange={changehandler2} value={choice2}/>
<input className='info-textbox1' placeholder='new password' onChange={changehandler} value={choice}/>
<label>{pass}</label>

</div>


    </div>
  )
}

export default EditPass