import React from 'react'
import axios from 'axios';
import './EditPass.css'
const { useState, useEffect } = require("react");
function EditPass() {
    
    const [pass,setpass] = useState([]);
    const totalpath = window.location.pathname;
    var mysubstring = totalpath.substring(totalpath.indexOf("/")+1 , totalpath.lastIndexOf("/"))
      alert(mysubstring)
            const getpassword =  async () => {
        
                await axios.get(`http://localhost:9000/${mysubstring}/myInfo/pass/${choice}`).then(
                    (res) => { 
                        const password = res.data
                        setpass(password)
                    }
                     );
                }
    var [choice,setchoice] = useState([]);

    const changehandler =  async(e)=>{
        setchoice(e.target.value);
     }
   
     
     const clickhandler1 = ()=>{
        alert('updated')
     getpassword()
     }
    

  return (
    <div className='infobody'> 


<div> 

<button className='info-btn1'onClick={clickhandler1}>submit</button>
<input className='info-textbox1' placeholder='new password' onChange={changehandler} value={choice}/>

</div>


    </div>
  )
}

export default EditPass