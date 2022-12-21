import axios from 'axios';
import { useState} from 'react';
import  Cookies from 'universal-cookie';

import './Login.css';

const AdminLogin = () => {
    const cookies = new Cookies();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);
    const [error,setError] = useState(null)

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }

    const getUsername = (event) => {
        setUsername(event.target.value)
    }

    const getPassword =  (event) => {
        setPassword(event.targetvalue)
    }

    const getAdmin = async () => {
        const user = {
            username: username,
            pass: password
        }
        alert("here")
        await axios.post("http://localhost:9000/admin/login", user).then(
            (res)=> {
                cookies.set('token', res.data.token, {path: '/'})
                localStorage.setItem('type', 'admin')
                window.href('/Admin')
            } 
        ).catch(error => {
            setError(error.message)
        })
    }

    return(
            
        
        <div class="admin_login-box">
            {/* <div className='admin_login-key'>
                <i class="fa fa-key" aria-hidden="false"></i>
            </div> */}
            <br></br>
            <label className='soha_login_h1'>Admin Panel</label>
            <br/>
            <form className='soha_login_form' onSubmit={getAdmin}>
                <div class="user-box">
                <input className="soha_login_input" type="text" onChange={getUsername} required="true"></input>
                <label className='soha_login_label'>Username</label>
                </div>
                <br/><br/>
                <div class="user-box">
                <input className="soha_login_input" type="password" onChange={getPassword} required="true"></input>
                <i class={passwordShown ? "fa fa-eye-slash" : "fa fa-eye"} onClick={togglePassword}></i>
                <label className='soha_login_label'>Password</label>
                </div>
                <a className='soha_forgot_password' href='/editPass'>Forgot Your Password?</a>
               
                <button className='soha_login_a'>Login</button>
                {error && <label className='soha_required'>{error} </label>}

                <br/>
            </form>
        </div>
    )

}

export default AdminLogin