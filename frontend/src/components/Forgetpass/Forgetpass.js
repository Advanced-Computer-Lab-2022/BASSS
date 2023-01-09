import axios from 'axios';
import React from 'react'
import './Forgetpass.css'
import { useState } from 'react';
import '../Login/Login.css';


const Forgetpass = (props) => {

    const type= props.Type
   
    const forget =  async () => {
        await axios.get(`http://localhost:9000/individualtrainee/forgetpass/${choice}/${choice2}`, {withCredentials: false}).then(
            (res) => { 
                alert('check your mail')
            }
            
                );
    }
    var [choice,setchoice] = useState([]);
    var [choice2,setchoice2] = useState([]);
    var [choice3,setchoice3] = useState([]);

    const clickhandler4 = (e)=>{
        e.preventDefault()
        forget()
        alert('check your mail:) ')
    }
       
    const changehandler =  async(e)=>{
        setchoice(e.target.value);
    }
     
    const changehandler2 =  async(e)=>{
      setchoice2(e.target.value);
    }
    const changehandler3 =  async(e)=>{
        setchoice3(e.target.value);
    }
  

    return(

        // <div className='forget-textbox1'>
        //     <input className='info-textbox1' placeholder='Username' onChange={changehandler} value={choice}/>
        //     <input className='info-textbox1' placeholder='email' onChange={changehandler2} value={choice2}/>
        //     <button  onClick={clickhandler4}> forget password</button>
        // </div>  
        <div class="login-box">
            <i class="fa fa-arrow-left" aria-hidden="true" onClick={props.changeForgot}></i>
            <label className='soha_login_h1'>Forgot password?</label>
            <label className='soha_login_h2'>We'll send reset instructions</label>
            <br/>
            <form className='soha_login_form' onSubmit={clickhandler4}>
                <div class="user-box">
                    <input className="soha_login_input" type="text" onChange={changehandler} value={choice} required="true"></input>
                    <label className='soha_login_label'>Username</label>
                </div>
                <br/>
                <div class="user-box">
                    <input className="soha_login_input" type="email" onChange={changehandler2} value={choice2} required="true"></input>
                    <label className='soha_login_label'>Email</label>
                </div>
                <br/>
                <button className='soha_login_a'>Reset Password</button>

            </form>

        </div>

  
    )
    }
export default Forgetpass;