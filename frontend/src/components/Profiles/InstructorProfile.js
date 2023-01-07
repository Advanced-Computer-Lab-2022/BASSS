import axios from "axios";
import { useState, useEffect ,} from "react";
import { Link, useNavigate } from "react-router-dom";
import './Profile.css'
import '../Login/Login.css'
import  Cookies from 'universal-cookie';
import InstructorNavBar from "../../Pages/Instructor/InstructorNavBar/InstructorNavBar";
import ViewReviews from "../ViewReviews/ViewReviews";


const InstructorProfile =  (props) => {
    const [inst,setInst] = useState({})
    const [rate,setRate] = useState(0)
    const [error,setError]= useState('')
    const [countRating, setCountRating] = useState(0)
    const [reviews,setReviews] = useState(0)
    const [edit, setEdit] = useState(false)
    const [reports,setReports] = useState(0)
    const [viewReviews, setViewReviews] = useState(false)

    const changeView = () => {
        setViewReviews(!viewReviews)
    }


    const getinst = async () => {
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
        }
        catch(error){
            setError(error.response.data)
        }
    }
    useEffect(() => {getinst()})   



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
                setmini(minibio)
            }
        );
    }
    const getemail =  async () => {
        await axios.get(`http://localhost:9000/instructor/myInfo/second/${choice2}`).then(
            (res) => { 
                const email = res.data
                setmail(email)
            }
        );
    }
    const getpassword =  async () => {
        await axios.get(`http://localhost:9000/instructor/myInfo/third/${choice4}/${choice3}`).then(
            (res) => { 
                const password = res.data.message
                setmessage(password)
            }
        );
    }

    return(
        
        <div className='Login_bodySara'>
            {viewReviews && <ViewReviews handleReview={changeView}/>}
            {!viewReviews &&
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
                                        <span>{countRating} Ratings & {reviews} <a class='a' onClick={changeView}>Reviews</a></span>
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
                                                {/* <tr>
                                                <td> </td>
                                                <td> </td>
                                                <td> </td>
                                                <td> </td>
                                                </tr> */}
                                                <tr>
                                                    <td> </td>
                                                    <td> </td>
                                                    <td className="boldFont">User Name</td>
                                                    <td className="boldFont"> : </td>
                                                    <td>{inst.UserName}</td>
                                                </tr>
                                                <tr>
                                                    <td> </td>
                                                    <td>  </td>

                                                    <td className="boldFont">Email </td>
                                                    <td className="boldFont"> : </td>
                                                    <td>{inst.Email}</td>
                                                </tr>
                                                <tr>
                                                    <td> </td>
                                                    <td> </td>

                                                    <td className="boldFont">Wallet </td>
                                                    <td className="boldFont"> : </td>
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
                                                </td>
                                                <td>
                                                    <input type='text' placeholder="new bio" class='profile_editInput' onChange={changehandler} value={choice}/>
                                                </td>
                                                <td>

                                                </td>
                                                <td>
                                                    <button class='profile_editBtn' onClick={clickhandler1}>Edit</button>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="boldFont">
                                                    Edit Email?
                                                </td>
                                                <td>
                                                    <input type='email' placeholder="new email" class='profile_editInput' onChange={changehandler2} value={choice2}/>
                                                </td>
                                                <td>

                                                </td>
                                                <td>
                                                    <button class='profile_editBtn' onClick={clickhandler2}>Edit</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="boldFont">
                                                    Edit Password?
                                                </td>
                                                <td>
                                                    <input type='password' placeholder="old password" class='profile_editInput' onChange={changehandler4} value={choice4}/> 
                                                </td>
                                                <td>
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
            </div>}
         </div>

    )

}

export default InstructorProfile