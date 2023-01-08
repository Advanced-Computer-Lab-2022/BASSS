import axios from "axios";
import { useState, useEffect ,} from "react";
import { useNavigate } from "react-router-dom";
import IndividualTraineeNavBar from "../../Pages/IndividualTrainee/IndividualTraineeNavBar/IndividualTraineeNavBar";
import CorporateTraineeNavBar from "../../Pages/CorporateTrainee/CorporateTraineeNavBar/CorporateTraineeNavBar";
import profileimg from "../../images/graduate-avatar.png"
import './Profile.css'
import '../../Pages/CorporateTrainee/CorporateTrainee.css'

const TraineeProfile = (props) => {    //individual or corporate
    const divName = (props.Who === 'corporatetrainee')? "CorporateTrainee-body" : "IndividualTrainee-body"


    const [trainee,setTrainee] = useState({})
    const [error,setError]= useState('')
    const [edit, setEdit] = useState(false)
    const [isCorporate, setIsCorporate] = useState(false)


    const sara = async () => {
            if(props.Who === 'corporatetrainee'){
                setIsCorporate(true)
                try{
                    await axios.get('http://localhost:9000/corporateTrainee/getCorporate').then(
                        (res) => {
                            setTrainee(res.data)
                        }
                    )
                }catch(error){
                    setError(error.response.data)
                }
            }
            else{
                try{
                    await axios.get('http://localhost:9000/individualTrainee/getIndividual').then(
                        (res) => {
                            setTrainee(res.data)
                        }
                    )
                }catch(error){
                    setError(error.response.data)
                }
            }
        }

    useEffect(() => {sara()})
    
    //bassel's
    const [pass,setpass] = useState('');
    var [choice,setchoice] = useState([]);
    var [choice2,setchoice2] = useState([]);
    var [message,setmessage] = useState([]);

    const changehandler =  async(e)=>{
        setchoice(e.target.value);
    }
    const changehandler2 =  async(e)=>{
      setchoice2(e.target.value);
    }
    const clickhandler1 = ()=>{
       getpassword()
    }

    const getpassword =  async () => {
        if(isCorporate){
            await axios.get(`http://localhost:9000/corporateTrainee/myInfo/pass/${choice2}/${choice}`).then(
                (res) => { 
                    const password = res.data.message
                    setpass(password)
                }
            );
        }
        else{
            await axios.get(`http://localhost:9000/individualTrainee/myInfo/pass/${choice2}/${choice}`).then(
                (res) => { 
                    const password = res.data.message
                    setpass(password)
                }
            );
        }
    }


    
    return(
        <div class='Login_bodySara'>
            {/* <div class='container'> */}
                {/* <div class='main-body'> */}
                    <div class="profile_card">
                        <div class="profile_card-body">
                            <img width={"30%"} src={profileimg}/>
                            <div class="text_body">
                                <div class="date">
                                    {isCorporate && <span class="day">Corporate</span>}
                                    {!isCorporate && <span class="day">Individual</span>}
                                </div>
                                <br/>
                                <div class="profile_info">
                                    <label class='profile_userName'>{trainee.UserName}</label>
                                </div>

                                <div class="profile_info">
                                    {!isCorporate && <label class='profile_MiniBio'>{trainee.Gender}</label>}
                                    {isCorporate && <label class='profile_MiniBio'>{trainee.Country}</label>}
                                </div>

                            </div>
                        </div>

                        {!edit &&
                            <table>
                                <tbody>
                                    {!isCorporate &&
                                        <tr>
                                            <td className="boldFont">First Name</td>
                                            <td className="boldFont"> : </td>
                                            <td>{trainee.FirstName}</td>
                                            <td>                 </td>
                                        </tr>
                                    }
                                    {!isCorporate &&
                                        <tr>
                                            <td className="boldFont">Last Name</td>
                                            <td className="boldFont"> : </td>

                                            <td>{trainee.LastName}</td>
                                            <td>                 </td>

                                        </tr>
                                    }
                                    {isCorporate &&
                                        <tr>
                                            <td className="boldFont">User Name</td>
                                            <td className="boldFont"> : </td>

                                            <td>{trainee.Username}</td>
                                            <td>                 </td>

                                        </tr>
                                    }
                                    <tr>
                                        <td className="boldFont">Email</td>
                                        <td className="boldFont"> : </td>

                                        <td>{trainee.Email}</td>
                                        <td>                 </td>

                                    </tr>
                                    {!isCorporate &&
                                        <tr>
                                            <td className="boldFont">Wallet</td>
                                            <td className="boldFont"> : </td>

                                            <td>{trainee.Wallet}</td>
                                            <td>                 </td>

                                        </tr>
                                    }
                                </tbody>
                            </table>
                        }
                        {edit &&
                            <table>
                                <tr>
                                    <td className="boldFont"> Edit Password?</td>
                                
                                    <td>
                                        <input type='password' placeholder="old password" class='profile_editInput' onChange={changehandler2} value={choice2}/> 
                                    </td>
                                    <td>
                                        <input type='password' placeholder="new password" class='profile_editInput' onChange={changehandler} value={choice}/> 
                                    </td>
                                    <td>
                                        <button class='profile_editBtn' onClick={clickhandler1}>Edit</button>
                                        <label>{message}</label>
                                    </td>
                                </tr>
                                {/* <tr>
                                    <td>
                                    </td>    
                                </tr> */}

                            </table>
                        }
                        <div class="info_main">
                            <div class="info_card profile_traineeInfo">
                                <div class="info_card-body">
                                    {!isCorporate && <i class="fa fa-pen fa-xs edit " style={{top:'-32rem',left: '15rem'}} onClick={() => setEdit(!edit)}/>}
                                    {isCorporate && <i class="fa fa-pen fa-xs edit " style={{top:'-29rem',left: '15rem'}} onClick={() => setEdit(!edit)}/>}
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                {/* </div> */}
            </div>

        </div>


    )


}

export default TraineeProfile