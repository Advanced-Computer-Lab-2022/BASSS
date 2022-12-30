import axios from 'axios';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import  Cookies from 'universal-cookie';
import '../SignUp/Signup.css';
const Signup = () => {
    const cookies = new Cookies();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);
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
        const user = {
            username: username,
            pass: password
        }
        try{
            await axios.post("http://localhost:9000/Signup", user, {withCredentials: false}).then(
                (res)=> {
                    type = res.data.type
                    location()
                    cookies.set('token', res.data.token, {path: '/'})
                    localStorage.setItem('type', res.data.type)
                } 
            )
        }
        catch (error) {
            setError(error.response.data)
        }
    }
    const navigate = useNavigate();
    const location = () => {
        switch(type){
            case "individualtrainee":
                navigate("/IndividualTrainee")
                break;
            case "corporatetrainee": 
                navigate("/CorporateTrainee")
                break;
            case "instructor":
                navigate("/instructor")
                break;
        }
    }

    return(
            
        <div className='Signup_bodySara'>
            <div class="Signup-box">
                <label className='Sara_Signup_h1'>BASSS Academy</label>
                
                <label className='Sara_Signup_h2'>Signup Now</label>
                <br/>
                <form className='Sara_Signup_form' onSubmit={getType}>
                    <div class="user-box-sara">
                    <input className="Sara_Signup_input" type="text" onChange={getUsername} value={username} required="true"></input>
                    <label className='Sara_Signup_label'>Username</label>
                    </div>
                    <div class="user-box-sara">
                    <input className="Sara_Signup_input" type={passwordShown ? "text" : "password"} onChange={getPassword} value={password} required="true"></input>
                    <i class={passwordShown ? "fa fa-eye-slash" : "fa fa-eye"} onClick={togglePassword}></i>
                    <label className='Sara_Signup_label'>Password</label>
                    </div>
                    <div class="user-box-sara">
                    <input className="Sara_Signup_input" type="text" onChange={getUsername} value={username} required="true"></input>
                    <label className='Sara_Signup_label'>First Name</label>
                    </div>
                    <div class="user-box-sara">
                    <input className="Sara_Signup_input" type="text" onChange={getUsername} value={username} required="true"></input>
                    <label className='Sara_Signup_label'>Last Name</label>
                    </div>
                    <div class="user-box-sara">
                    <input className="Sara_Signup_input" type="text" onChange={getUsername} value={username} required="true"></input>
                    <label className='Sara_Signup_label'>Email</label>
                    </div>
                    <div class="user-box-sara">
                    <input className="Sara_Signup_input" type="text" onChange={getUsername} value={username} required="true"></input>
                    <label className='Sara_Signup_label'>Gender</label>
                    </div>
                    <button className='Sara_Signup_a'>Signup</button>
                    {error && <label className='Sara_required'>{error} </label>}
                </form>
            </div>
        </div>
    )

}

export default Signup