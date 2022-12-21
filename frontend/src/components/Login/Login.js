import axios from 'axios';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import  Cookies from 'universal-cookie';
import './Login.css';
const Login = () => {
    const cookies = new Cookies();
    // const [type, setType] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);
    const [reqPass, setReqPass] = useState(false);
    const [reqUsername, setReqUsername] = useState(false)
    const [error,setError] = useState(null)
    var type = ''

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };

    const getUsername = (event) => {
        setUsername(event.target.value)
    }

    const getPassword =  (event) => {
        setPassword(event.target.value)
    }

    const getType = async (e) => {
        e.preventDefault()
        if(!password) {
            setReqPass(!reqPass);
        }
        if(!username) {
            setReqUsername(!reqUsername);
        }
        else{
            const user = {
                username: username,
                pass: password
            }
            await axios.post("http://localhost:9000/login", user).then(
                (res)=> {
                    type = res.data.type
                    // setType(res.data.type)
                    location()
                    cookies.set('token', res.data.token, {path: '/'})
                    localStorage.setItem('type', res.data.type)
                } 
            ).catch( error => {
                setError(error.message)
            })
         }
    }
    const navigate = useNavigate();
    const location = () => {
        switch(type){
            case "Individual Trainee":
                navigate("/IndividualTrainee")
                // window.location.href = '/IndividualTrainee'
                break;
            case "corporate trainee": 
                navigate("/CorporateTrainee")
                // window.location.href = '/CorporateTrainee'
                break;
            case "instructor":
                navigate("/instructor")
                // window.location.href = '/instructor'
                break;
        }
    }

    return(
            
        
        <div class="login-box">
            <label className='soha_login_h1'>BASSS Academy</label>
            
            <label className='soha_login_h2'>Sign in to your account</label>
            <br/>
            <form className='soha_login_form' onSubmit={getType}>
                <div class="user-box">
                <input className="soha_login_input" type="text" onChange={getUsername} value={username} required="true"></input>
                <label className='soha_login_label'>Username</label>
                {reqUsername && <label className='soha_required'>Username required </label>}
                </div>
                <br/>
                <div class="user-box">
                <input className="soha_login_input" type={passwordShown ? "text" : "password"} onChange={getPassword} value={password} required="true"></input>
                <i class={passwordShown ? "fa fa-eye-slash" : "fa fa-eye"} onClick={togglePassword}></i>
                <label className='soha_login_label'>Password</label>
                {reqPass && <label className='soha_required'>Password required </label>}
                </div>
                <a className='soha_forgot_password' href='/editPass'>Forgot Your Password?</a>
                <button className='soha_login_a'>Login</button>
                {error && <label className='soha_required'>{error} </label>}
                <br/><br/>
                <label className='soha_signup'>Don't Have an account? </label>
                <a className='soha_forgot_password' href='/signup'>Sign Up Instead</a>

            </form>
        </div>
    )

}

export default Login