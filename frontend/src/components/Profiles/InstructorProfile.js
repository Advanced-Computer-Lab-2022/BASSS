import axios from "axios";
import { useState, useEffect ,} from "react";
import { useNavigate } from "react-router-dom";
import './Profile.css'
import InstructorNavBar from "../../Pages/Instructor/InstructorNavBar/InstructorNavBar";

const InstructorProfile =  () => {
    const [inst,setInst] = useState({})
    const [rate,setRate] = useState(0)
    const [error,setError]= useState('')
    const [countRating, setCountRating] = useState(0)
    const [reviews,setReviews] = useState(0)
    const [edit, setEdit] = useState(false)
    const [reports,setReports] = useState(0)

    useEffect(async () => {
        try{
            await axios.get('http://localhost:9000/instructor/getInstructor').then(
                (res) => {
                    setInst(res.data)
                    setRate(res.data.Rating.rate)
                    setCountRating(res.data.Rating.count)
                    setReviews(res.data.Reviews.length)
                    setReports(res.data.Reports.length)
                }
            )
        }catch(error){
            setError(error.response.data)
        }
    }, [])   


    //bassel's
    const [mini,setmini] = useState([]);
    const [mail,setmail] = useState([]);
    const [pass,setpass] = useState([]);
    const [message,setmessage] = useState('');

    var [choice,setchoice] = useState([]);
    var [choice2,setchoice2] = useState('');
    var [choice3,setchoice3] = useState([]);
    var [choice4,setchoice4] = useState([]);

    const changehandler =  async(e)=>{
        setchoice(e.target.value);
    }
    const changehandler2 = async (e)=>{
        setchoice2(e.target.value);                         
    }
    const changehandler3 =  async(e)=>{
        setchoice3(e.target.value);  
    }
    const changehandler4 =  async(e)=>{
        setchoice4(e.target.value);  
    }
    
    const clickhandler1 = ()=>{
        window.alert('updated')
        getminibio()
    }
    const clickhandler2 = ()=>{
        window.alert('updated')
        getemail()
    }
    const clickhandler3 = ()=>{
       // alert('updated')
        getpassword()
    }

    const getminibio =  async () => {
        await axios.get(`http://localhost:9000/instructor/myInfo/first/${choice}`).then(
            (res) => { 
                const minibio = res.data
                console.log(minibio)
                setmini(minibio)
            }
        );
    }
    const getemail =  async () => {
        await axios.get(`http://localhost:9000/instructor/myInfo/second/${choice2}`).then(
            (res) => { 
                const email = res.data
                console.log(email)
                setmail(email)
            }
        );
    }
    const getpassword =  async () => {
        await axios.get(`http://localhost:9000/instructor/myInfo/third/${choice4}/${choice3}`).then(
            (res) => { 
                const password = res.data.message
                console.log(password)
                setmessage(password)
            }
        );
    }


    return(
        <div class='profile_body'>
            <InstructorNavBar/>
            <div class='container'>
                <div class='main-body'>
                    <div class="profile_card">
                        <div class="profile_card-body">

                            <div class="text_body">
                                <div class="date">
                                    <span class="day">Instructor</span>
                                </div>
                                <br/>
                                <div class="profile_info">
                                    <label class='profile_userName'>{inst.UserName}</label>
                                </div>

                                <div class="profile_info">
                                    <label class='profile_MiniBio'>{inst.MiniBio}</label>
                                </div>

                                <div class="profile_info">
                                    <span class="product-rating">{rate}</span><span>/5</span>
                                    <br/>
                                    {Math.ceil(rate) == 5 &&
                                        <div class="stars">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    }
                                    {Math.ceil(rate) == 4 &&
                                        <div class="stars">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    }
                                    {Math.ceil(rate) == 3 &&
                                        <div class="stars">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    }
                                    {Math.ceil(rate) == 2 &&
                                        <div class="stars">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    }
                                    {Math.ceil(rate) == 1 &&
                                        <div class="stars">
                                            <i class="fa fa-star"></i>
                                        </div>
                                    }  
                                    <div class="rating-text">
                                        <span>{countRating} Ratings & {reviews} <a class='a' href="/instructor/MyReviews ">Reviews</a></span>
                                    <div class="rating-text report">
                                        <span>{reports} <a class='a' href='/instructor/myReports'> Reports</a></span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {!edit &&
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="boldFont">User Name :</td>
                                                    <td>{inst.UserName}</td>
                                                </tr>
                                                <tr>
                                                    <td className="boldFont">Email :</td>
                                                    <td>{inst.Email}</td>
                                                </tr>
                                                <tr>
                                                    <td className="boldFont">Wallet :</td>
                                                    <td>{inst.Wallet}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    }
                        {edit&&
                                        <table>
                                        <tbody>
                                            <tr>
                                                <td className="boldFont">
                                                    Edit Mini Bio?
                                                    <input type='text' placeholder="new bio" class='profile_editInput' onChange={changehandler} value={choice}/>
                                                    <button class='profile_editBtn' onClick={clickhandler1}>Edit</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="boldFont">
                                                    Edit Email?
                                                    <input type='email' placeholder="new email" class='profile_editInput' onChange={changehandler2} value={choice2}/>
                                                    <button class='profile_editBtn' onClick={clickhandler2}>Edit</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="boldFont">
                                                    Edit Password?
                                                    <input type='password' placeholder="old password" class='profile_editInput' onChange={changehandler4} value={choice4}/> 
                                                    <input type='password' placeholder="new password" class='profile_editInput' onChange={changehandler3} value={choice3}/> 
                                                </td>
                                                <td>
                                                    <button class='profile_editBtn' onClick={clickhandler3}>Edit</button>
                                                    <label>{message}</label>
                                                </td>    
                                            </tr>
                                        </tbody>
                                    </table>
                                }
                        <div class="info_main">
                            <div class="info_card">
                                <div class="info_card-body">
                                    <i class="fa fa-pen fa-xs edit " onClick={() => setEdit(!edit)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default InstructorProfile