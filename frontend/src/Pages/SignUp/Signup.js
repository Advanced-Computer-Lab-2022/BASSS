import axios from 'axios';
import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import  Cookies from 'universal-cookie';
import '../SignUp/Signup.css';
import PrivacyPolicy from './PrivaryPolicy';
const Signup = (props) => {
    const cookies = new Cookies();
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const [Firstname, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [Gender, setGender] = useState('');
    const [Terms, setTerms] = useState(false);
    const [Policy, setPolicy] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const [error,setError] = useState(null)
    const [m,setm] = useState(false)
    var type = ''
    // useEffect(()=>{setm()});
    // useEffect(()=>{setError()});

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };

    const getUsername = (event) => {
        setUserName(event.target.value)
    }

    const getPassword =  (event) => {
        setPassword(event.target.value)
    }
    const getFirstName = (event) => {
        setFirstName(event.target.value)
    }

    const getLastName =  (event) => {
        setLastName(event.target.value)
    }
    const getEmail =  (event) => {
        setEmail(event.target.value)
    }
    const getGender = (event) => {
        setGender(event.target.value)
    }
    const getTerms =  (event) => {
        setTerms(!Terms)
    }
    const handlePrivacy =  (event) => {
        setPolicy(!Policy)
    }


    const getType = async (e) => {
        e.preventDefault()
        const user = {
                username : UserName, 
                password : Password, 
                email : Email , 
                firstname : Firstname , 
                lastname : LastName , 
                gender : Gender
        }
        try{
            await axios.post("http://localhost:9000/signup", user, {withCredentials: false}).then(
                (res)=> {
                    alert('Account Created, please sign in')
                    props.setSignup1(false)
                    // alert(res.data)
                    // if(res.data == 'Done'){
                    //     setError('Account Created, please sign in')
                    //     setm(true)
                    //}
                } 
            )
        }
        catch (error) {
            setError(error.response.data)
        }
        alert('sara')
        props.setSignup1(false)
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
                    <div className='Signup_Sara_twoinputsDiv'>
                        <div className='Signup_Sara_OneinputDiv'>
                            <div class="user-box-sara">
                                <input className="Sara_Signup_input" type="text" onChange={getUsername} value={UserName} required="true"></input>
                                <label className='Sara_Signup_label'>Username</label>
                            </div>
                        </div>
                        <div className='Signup_Sara_OneinputDiv'>
                            <div class="user-box-sara">
                                <input className="Sara_Signup_input" type={passwordShown ? "text" : "password"} onChange={getPassword} value={Password} required="true"></input>
                                <i class={passwordShown ? "fa fa-eye-slash" : "fa fa-eye"} onClick={togglePassword}></i>
                                <label className='Sara_Signup_label'>Password</label>
                            </div>
                        </div>
                    </div>
                    <div className='Signup_Sara_twoinputsDiv'>
                        <div className='Signup_Sara_OneinputDiv'>
                            <div class="user-box-sara">
                                <input className="Sara_Signup_input" type="text" onChange={getFirstName} value={Firstname} required="true"></input>
                                <label className='Sara_Signup_label'>First Name</label>
                            </div>
                        </div>
                        <div className='Signup_Sara_OneinputDiv'>
                            <div class="user-box-sara">
                                <input className="Sara_Signup_input" type="text" onChange={getLastName} value={LastName} required="true"></input>
                                <label className='Sara_Signup_label'>Last Name</label>
                            </div>
                        </div>
                    </div>
                    <div className='Signup_Sara_twoinputsDiv'>
                        <div className='Signup_Sara_OneinputDiv'>
                            <div class="user-box-sara">
                                <input className="Sara_Signup_input" type="text" onChange={getEmail} value={Email} required="true"></input>
                                <label className='Sara_Signup_label'>Email</label>
                            </div>
                        </div>
                        <div className='Signup_Sara_GenderDiv'>
                            <form>
                                <label className='Signup_Sara_GenderLabel'>Gender : </label>
                                <br></br>
                                <div className='Signup_Sara_GenderRBDiv'>
                                    <input className="Signup_Sara_GenderRBFemale" name='Gender' type="radio" onChange={getGender} value='Female' required="true"></input>
                                    <label className='Signup_Sara_GenderLabelFemale'>Female</label>
                                    <input className="Signup_Sara_GenderRBMale" name='Gender' type="radio" onChange={getGender} value='Male' required="true"></input>
                                    <label className='Signup_Sara_GenderLabelMale'>Male</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <br></br>
                    <div className='Signup_Sara_twoinputsDiv'>
                        <input className="Signup_Sara_TermsCB" name='Terms' type="Checkbox" onChange={getTerms} value={Terms} required="true"></input>
                        <div className='Signup_Sara_TermsLabel'>
                            <label className='Signup_Sara_AcceptTermsLabel'>Accept </label>
                            <a className='Sara_forgot_password' onClick={handlePrivacy}>Terms and conditions</a>
                        </div>
                    </div>
                    <button className='Sara_Signup_a'>Signup</button>
                    {m && <label className='Sara_required'>{error} </label>}
                </form>
            </div>
            {Policy && <PrivacyPolicy handlePrivacy = {handlePrivacy}/>}
        </div>
    )

}

export default Signup