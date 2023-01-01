import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Contract from '../../components/Contract/Contract';
import './Login.css';

const FirstLogin = (props) => {
    //props.Type
    const location = useLocation();
    const [newPass,setNewPass] = useState('');
    const [error,setError] = useState('');
    const [isInst, setIsInst] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const [checked,setChecked] = useState(false)

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }

    const getPassword = (e) => {
        setNewPass(e.target.value)
    }

    const handleCheck = (e) => {
        setChecked(e.target.checked)
    }

    const navigate = useNavigate()
    const handleSubmit = async (e)=> {
        e.preventDefault();
        if(props.Who === 'instructor'){
            try{
                await axios.post("http://localhost:9000/instructor/changePass", {newPass: newPass}).then(
                 (res) => {
                     window.alert(res.data)
                     navigate('/instructor')
                 }
                )
            }catch(error){
                setError(error.response.data)
            }
        }
        else{
            if(props.Who === 'corporatetrainee'){
                try{
                    await axios.post("http://localhost:9000/corporateTrainee/changePass", {newPass: newPass}).then(
                        (res) => {
                            window.alert(res.data)
                            navigate('/instructor')
                        }
                    )
                }catch(error){
                    setError(error.response.data)
                }
            }
            else{
                try{
                    await axios.post("http://localhost:9000/admin/changePass", {newPass: newPass}).then(
                        (res) => {
                            window.alert(res.data)
                            navigate('/admin')
                        }
                    )
                }catch(error){
                    setError(error.response.data)
                }
            }
        }
    }

    return(
        <div class="login-box">
            <label className='soha_login_h2'>Change Your Password</label>
            <br/>
            <form className='soha_login_form' onSubmit={handleSubmit}>
                <div className="user-box">
                    <input className="soha_login_input" type={passwordShown ? "text" : "password"} onChange={getPassword} value={newPass} required={true}></input>
                    <i class={passwordShown ? "fa fa-eye-slash" : "fa fa-eye"} onClick={togglePassword}></i>
                    <label className='soha_login_label'>New Password</label>
                </div>
                {props.Who === 'instructor' &&
                    <div>
                        <input type='checkbox' onChange={handleCheck} />
                        <a className='soha_forgot_password' href='instructor/contract'>I hereby accept the website contract</a>
                        <button className='soha_login_a' type='submit' disabled={!checked} onClick={handleSubmit}>Submit</button>
                    </div>
                }
                {props.Who != 'instructor' && <button className='soha_login_a'>Submit</button>}
                {error && <label className='soha_required'>{error} </label>}
            </form>
    </div>

    )

}

export default FirstLogin