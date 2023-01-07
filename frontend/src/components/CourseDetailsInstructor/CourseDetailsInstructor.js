import axios from 'axios';
import './CourseDetailsInstructor.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import IndividualTraineeNavBar from '../../Pages/IndividualTrainee/IndividualTraineeNavBar/IndividualTraineeNavBar'
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed';
const { useState, useEffect } = require("react");

const CourseDetailsInstructor = () => { 

    const location = useLocation();

    const [flag, setFlag] = useState(false); 
    const [flagOther, setFlagOther] = useState(false); 
    const [flagType, setFlagType] = useState(false); 
    const [flagSpecify, setFlagSpecify] = useState(false); 

    const [courseRate,setCourseRate] = useState("");
    const [instructorRate,setInstructorRate] = useState("");

    const [rateCourse,setRateCourse] = useState([]);
    const [rateInstructor,setRateInstructor] = useState([]);
    
    var [course,setCourse] = useState([]);
    var [instructor,setInstructor] = useState([]);
    var [subtitle,setsubtitle] = useState([]);

    const [reports,setReports] = useState([]);

    var [choice,setchoice] = useState([]);
    var [choice2,setchoice2] = useState([]);
    var [choice3,setchoice3] = useState([]);
    var [choice4,setchoice4] = useState([]);


    const changehandler3 = (e)=>{
        setchoice3(e.target.value);
    }

    const changehandler4 = (e)=>{
        setchoice4(e.target.value);
        setFlagOther(false);
        setFlagType(false);
        setFlagSpecify(false);
    }

    const changehandler5 = (e)=>{
        setchoice4(e.target.value);
        setFlagOther(false);
        setFlagType(false);
        setFlagSpecify(false);
    }

    const changehandler6 = (e)=>{
        setchoice4(e.target.value);
        setFlagSpecify(false);
    }


    const clickhandler3 = ()=>{
        setFlag(true);
    }
    const clickhandler4 = ()=>{
        if(choice4.length==0 && flagOther == true){
            setFlagSpecify(true);
        }
        else if(choice4.length==0){
            setFlagType(true);
        }
        else
        {
        setchoice4("");
        alert("Report Sent");
        reportCourse();
        setFlag(false);
        setFlagOther(false);
        setFlagType(false);
        setFlagSpecify(false);
        }
    }
    const clickhandler5 = ()=>{
        setchoice4("");
        setFlagOther(true);
        setFlagType(false);
    }
    const clickhandler6 = ()=>{
        setchoice4("");
        setFlag(false);
        setFlagOther(false);
        setFlagType(false);
        setFlagSpecify(false);
    }

        const getCourse =  async () => {
            await axios.get(`http://localhost:9000/course/getCourse/${location.state[0]}`).then(
                (res) => { 
                    const course = res.data
                    //console.log(course)
                    setCourse(course)
                    setCourseRate(course.Rating.rate)
                }
                );
            }
//${location.state[1]}
            const getInstructor =  async () => {
                await axios.get(`http://localhost:9000/instructor/getInstructor`).then(
                    (res) => { 
                        const instructor = res.data
                        //console.log(instructor)
                        setInstructor(instructor)
                        setInstructorRate(instructor.Rating.rate)
                    }
                    );
                }  

                const getSubtitle =  async () => {
                    await axios.get(`http://localhost:9000/course/getsubtitle/${location.state[0]}`).then(
                        (res) => { 
                            const sub = res.data
                            setsubtitle(sub)
                            // alert(subtitle)
                        }
                        );
                    }  
                    const reportCourse = async ()=>
                    {
                        if(choice3.length == 0)
                        {
                        await axios.get(`http://localhost:9000/admin/createReport/hazem123/${location.state[0]}/${choice4}/Empty`).then(
                            (res) => { 
                                const report = res.data
                                //console.log(report)
                                setReports(report)
                            });
                        }
                        else{
                            await axios.get(`http://localhost:9000/admin/createReport/hazem123/${location.state[0]}/${choice4}/${choice3}`).then(
                            (res) => { 
                                const report = res.data
                                //console.log(report)
                                setReports(report)
                            });
                        }
                        }
                    

getCourse();
getInstructor();
getSubtitle();
// alert(subtitle[0])
    return(
        <>
        <div className='CourseDetailsInstructor-body'>
        <IndividualTraineeNavBar/>

        <div className='videodiv2'>
          <video className='video1' src="/videos/video-1.mp4" autoPlay loop muted/>
        </div>

            {/* <div className='RateCourse-div'>
                <h1>Course: {course.Title}</h1>
                <br></br>
                <h1> Rate The Course :</h1>
                <br></br>
                <select  onChange={changehandler} name="rate" id="rate" className='selectnew'>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </select>
                <br></br><br></br>
                <button onClick={clickhandler} className='RateCoursebtn'>Submit</button>
                <br></br><br></br><br></br><br></br>
                <h1>Course Rating: {courseRate}</h1>
                </div> */}
                
                {/* <br></br><br></br><br></br><br></br><br></br><br></br><br></br> */}

            {/* <div className='RateInstructor-div'>
                <h1>Instructor of this course: {course.InstructorUserName}</h1>
                <br></br>
                <h1>Rate The Instructor:</h1>
                <br></br>
                <select className='selectnew' onChange={changehandler2}    name="rate2" id="rate2">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </select>
                <br></br><br></br>
                <button onClick={clickhandler2} className='RateInstructorbtn'>Submit</button>
                <br></br><br></br><br></br><br></br>
                <h1>Instructor Rating: {instructorRate}</h1>
                </div> */}

                <button onClick={clickhandler3} className='reportCoursebtnI' >Report A Problem </button>

                {flag && <div className='reportProblemDivI'>
                    <h2>Problem Type:</h2>
                    {flagType && <h4 className='typeEmptyI'>(please select a type)</h4>}
                    {flagSpecify && <h4 className='specifyEmptyI'>(please specify)</h4>}
                    <br></br>
                    <input type="radio" id="Technical" name="report" onChange={changehandler4} value="Technical"/>
                    <label for="Technical"> Technical</label>
                    <br></br><br></br>
                    <input type="radio" id="Financial" name="report" onChange={changehandler5} value="Financial"/>
                    <label for="Financial"> Financial</label>
                    <br></br><br></br>
                    <input type="radio" id="Other" name="report" onClick={clickhandler5}/>
                    <label for="Other"> Other:</label>
                    {flagOther && <input placeholder='Please specify' onChange={changehandler6} value={choice4}/>}
                    <br></br><br></br><br></br>
                    <h2>Comment:</h2>
                    <br></br>
                    <input className='reportTextboxI' placeholder='(if needed)' onChange={changehandler3} value={choice3}/>
                    <br></br><br></br><br></br>
                    <button onClick={clickhandler4}  >Report </button>
                    <button onClick={clickhandler6}  >Cancel </button>
                    </div>}


                <div className='info2'>

                <h1 className='total2'>TotalHours for the course : {course.TotalHours}</h1>
                <h1 className='views2'> Course Views : {course.Views}</h1>
                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                {

                   subtitle.length>0 && subtitle.map((sub)=>
                <div className='subtitleincoursedetails12'>
                    <h1>subtitle Number : {sub.subtitleNumber}</h1>
                    <h1>Subtitle total Hours : { sub.SubtitleHours} </h1>
                    <h1>subtitle Short Video Description :{sub.ShortVideoDescription} </h1>
                    <br></br><br></br><br></br>

                 <YoutubeEmbed embedId={sub.VideoLink}/>
                     <br></br><br></br><br></br>
                    <Link to='/'>
                        <button className='exercisebtn'>Solve Exercise</button>
                    </Link>
                 </div>
                    )
                }
        </div>
            </>
        )

}

export default CourseDetailsInstructor;
