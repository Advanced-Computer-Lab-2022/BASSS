import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import './EditmyInfo.css'
const { useState, useEffect } = require("react");
function EditmyInfo() {
    const [mini,setmini] = useState([]);
    const [mail,setmail] = useState([]);
    const [pass,setpass] = useState([]);
    const [message,setmessage] = useState('');

    const getminibio =  async () => {
        
        await axios.get(`http://localhost:9000/instructor/myInfo/first/${choice}`).then(
            (res) => { 
                const minibio = res.data
                setmini(minibio)
            }
             );
        }
        const getemail =  async () => {
        
            await axios.get(`http://localhost:9000/instructor/myInfo/second/${choice2}`).then(
                (res) => { 
                    const email = res.data
                    setmail(email)
                }
                 );
            }
            const getpassword =  async () => {
        
                await axios.get(`http://localhost:9000/instructor/myInfo/third/${choice4}/${choice3}`).then(
                    (res) => { 
                        const password = res.data.message
                        setmessage(password)
                    }
                     );
                }
    var [choice,setchoice] = useState([]);
    var [choice2,setchoice2] = useState('');
    var [choice3,setchoice3] = useState([]);
    var [choice4,setchoice4] = useState([]);
    const changehandler =  async(e)=>{
        setchoice(e.target.value);
     }
     const changehandler2 = async (e)=>{
        setchoice2(e.target.value);                         
     }
     const changehandler3 =  async(e)=>{
        setchoice3(e.target.value);  
     }
     const changehandler4 =  async(e)=>{
        setchoice4(e.target.value);  
     }
     
     const clickhandler1 = ()=>{
        alert('updated')
     getminibio()
     }
    const clickhandler2 = ()=>{
        alert('updated')
        getemail()
     }
    const clickhandler3 = ()=>{
       // alert('updated')
        getpassword()
     }

  return (
    <div className='infobody'> 


<div className='shift1'> 

<button className='info-btn1'onClick={clickhandler1}>submit</button>
<input className='info-textbox1' placeholder='new minibio' onChange={changehandler} value={choice}/>

</div>

<div className='shift2'> 
<button className='info-btn2' onClick={clickhandler2}>submit</button>
<input className='info-textbox2' placeholder='new email' onChange={changehandler2} value={choice2} />
</div>


<div className='shift3'> 
<button className='info-btn3' onClick={clickhandler3}>submit</button>
<input type="password" className='info-textbox3' placeholder='old password' onChange={changehandler4} value={choice4}/>
<input type="password" className='info-textbox3' placeholder='new password' onChange={changehandler3} value={choice3}/>
<label>{message}</label>
</div>

<div className='shift4'> 
<Link to ="/instructor">
<button className='info-btn4'>Return to All Courses</button>
</Link>
</div>

    </div>
  )
}

export default EditmyInfo