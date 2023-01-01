import axios from "axios";
import { useState, useEffect ,} from "react";
import { useNavigate } from "react-router-dom";
import IndividualTraineeNavBar from "../../Pages/IndividualTrainee/IndividualTraineeNavBar/IndividualTraineeNavBar";
import CorporateTraineeNavBar from "../../Pages/CorporateTrainee/CorporateTraineeNavBar/CorporateTraineeNavBar";
import './Profile.css'

const TraineeProfile = (props) => {    //individual or corporate

    const [trainee,setTrainee] = useState({})
    const [error,setError]= useState('')
    const [edit, setEdit] = useState(false)
    const [isCorporate, setIsCorporate] = useState(false)

    useEffect(async () => {
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
    }, [])  

    
    return(
        <div class='profile_body'>
            {isCorporate && <CorporateTraineeNavBar/>}
            {!isCorporate && <IndividualTraineeNavBar/>}
            <div class='container'>
                <div class='main-body'>
                    <div class="profile_card">
                        <div class="profile_card-body">
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
                        <div class="info_main">
                            <div class="info_card profile_traineeInfo">
                                <div class="info_card-body">
                                    <i class="fa fa-pen fa-xs edit " onClick={() => setEdit(!edit)}/>
                                    {!edit &&
                                        <table>
                                            <tbody>
                                                {!isCorporate &&
                                                    <tr>
                                                        <td>First Name</td>
                                                        <td>:</td>
                                                        <td>{trainee.FirstName}</td>
                                                    </tr>
                                                }
                                                {!isCorporate &&
                                                    <tr>
                                                        <td>Last Name</td>
                                                        <td>:</td>
                                                        <td>{trainee.LastName}</td>
                                                    </tr>
                                                }
                                                {isCorporate &&
                                                    <tr>
                                                        <td>User Name</td>
                                                        <td>:</td>
                                                        <td>{trainee.UserName}</td>
                                                    </tr>
                                                }
                                                <tr>
                                                    <td>Email</td>
                                                    <td>:</td>
                                                    <td>{trainee.Email}</td>
                                                </tr>
                                                {!isCorporate &&
                                                    <tr>
                                                        <td>Wallet</td>
                                                        <td>:</td>
                                                        <td>{trainee.Wallet}</td>
                                                    </tr>
                                                }
                                            </tbody>
                                        </table>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )


}

export default TraineeProfile