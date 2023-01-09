import axios from 'axios';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import  Cookies from 'universal-cookie';
import Forgetpass from '../Forgetpass/Forgetpass';
import FirstLogin from './FirstLogin';
import './Login.css';
const Login = () => {
    const cookies = new Cookies();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);
    const [error,setError] = useState(null)
    const [firstLogin, setFirstLogin] = useState(false)
    const [forgot, setForgot] = useState(false)
    var type = ''

    const changeForgot = () => {
        setForgot(!forgot)
    }

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
        const user = {
            username: username,
            pass: password
        }
        try{
            await axios.post("http://localhost:9000/login", user, {withCredentials: false}).then(
                (res)=> {
                    type = res.data.type
                    cookies.set('token', res.data.token, {path: '/'})
                    localStorage.setItem('type', res.data.type)
                    if(type.toLowerCase() == 'individualtrainee')
                        navigate("/IndividualTrainee")
                    else
                        location()

                } 
            )
        }
        catch (error) {
            setError(error.response.data)
        }
    }

    const changeFirstLoginCorporate = async() => {
        await axios.get("http://localhost:9000/corporateTrainee/changeFirstLogin")
    }

    const changeFirstLoginInst= async() => {
        await axios.get("http://localhost:9000/instructor/changeFirstLogin")
    }

    const changeFirstLoginAdmin= async() => {
        await axios.get("http://localhost:9000/admin/changeFirstLogin")
    }


    const navigate = useNavigate();
    const location = async () => {
        switch(type.toLowerCase()){
            // case "individualtrainee":
            //     navigate("/IndividualTrainee")
            //     break;
            case "corporatetrainee":
                try {
                    await axios.get("http://localhost:9000/corporateTrainee/firstLogin").then(
                        (res) => {
                            if(res.data){
                                setFirstLogin(true)
                                changeFirstLoginCorporate()
                            }
                            else{
                                navigate('/corporateTrainee')
                            }
                        }
                    )
                    
                } catch (error) {
                   setError(error.response.data) 
                }
                break;
            case "instructor":
                try {
                    await axios.get("http://localhost:9000/instructor/firstLogin").then(
                        (res) => {
                            if(res.data){
                                setFirstLogin(true)
                                changeFirstLoginInst()
                            }
                            else{
                                navigate('/instructor')
                            }
                        }
                    )
                    
                } catch (error) {
                   setError(error.response.data) 
                }
                break;
            case "admin":
                try {
                    await axios.get("http://localhost:9000/admin/firstLogin").then(
                        (res) => {
                            if(res.data){
                                setFirstLogin(true)
                                changeFirstLoginAdmin()
                            }
                            else{
                                navigate('/admin')
                            }
                        }
                    )
                    
                } catch (error) {
                   setError(error.response.data) 
                }

                break;
        }
    }

    return(
            
        <div className='Login_bodySara'>
            {!firstLogin && !forgot &&
                <div class="login-box">
                    <label className='soha_login_h1'>BASSS Academy</label>
                    
                    <label className='soha_login_h2'>Sign in to your account</label>
                    <br/>
                    <form className='soha_login_form' onSubmit={getType}>
                        <div class="user-box">
                            <input className="soha_login_input" type="text" onChange={getUsername} value={username} required="true"></input>
                            <label className='soha_login_label'>Username</label>
                        </div>
                        <br/>
                        <div class="user-box">
                            <input className="soha_login_input" type={passwordShown ? "text" : "password"} onChange={getPassword} value={password} required="true"></input>
                            <i class={passwordShown ? "fa fa-eye-slash" : "fa fa-eye"} onClick={togglePassword}></i>
                            <label className='soha_login_label'>Password</label>
                        </div>
                        <a className='soha_forgot_password' onClick={changeForgot}>Forgot Your Password?</a>
                        <button className='soha_login_a'>Login</button>
                        {error && <label className='soha_required'>{error} </label>}
                        <br/>
                        <label className='soha_signup'>Don't Have an account? </label>
                        <a className='soha_forgot_password' href='/signup'>Sign Up Instead</a>

                    </form>
                </div>
            }
            {firstLogin &&
                <FirstLogin Who={localStorage.getItem('type')}/>
            }
            {forgot && <Forgetpass changeForgot={changeForgot}/>}
        </div>
    )

}

export default Login