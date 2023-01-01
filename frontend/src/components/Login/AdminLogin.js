import axios from 'axios';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import  Cookies from 'universal-cookie';

import './Login.css';

const AdminLogin = () => {
    const cookies = new Cookies();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);
    const [error,setError] = useState('')
    var type = ''

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }

    const getUsername = (event) => {
        setUsername(event.target.value)
    }

    const getPassword =  (event) => {
        setPassword(event.target.value)
    }

    const navigate = useNavigate();

    const getAdmin = async (e) => {
        e.preventDefault()
        const user = {
            username: username,
            pass: password
        }
        try{
            await axios.post("http://localhost:9000/adminLogin", user, {withCredentials: false}).then(
                (res)=> {
                    cookies.set('token', res.data.token, {path: '/'})
                    localStorage.setItem('type', res.data.type)
                    navigate('/Admin')
                } 
            )
        }
        catch (error) {
            setError(error.response.data)
        }
    }

    

    return(
            
        
        <div class="admin_login-box">
            <br></br>
            <label className='soha_login_h1'>Admin Panel</label>
            <br/>
            <form className='soha_login_form' onSubmit={getAdmin}>
                <div class="user-box">
                <input className="soha_login_input" type="text" onChange={getUsername} value={username} required="true"></input>
                <label className='soha_login_label'>Username</label>
                </div>
                <br/><br/>
                <div class="user-box">
                <input className="soha_login_input" type={passwordShown ? "text" : "password"} onChange={getPassword} value={password} required="true"></input>
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