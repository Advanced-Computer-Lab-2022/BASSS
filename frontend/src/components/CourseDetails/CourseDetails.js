import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './CourseDetails.css';
import { Link } from 'react-router-dom'
import IndividualTraineeNavBar from '../../Pages/IndividualTrainee/IndividualTraineeNavBar/IndividualTraineeNavBar'
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed';
const { useState, useEffect } = require("react");

const CourseDetails = () => { 
    
    const location = useLocation();
    const [courseRate,setCourseRate] = useState("");
    const [instructorRate,setInstructorRate] = useState("");

    const [rateCourse,setRateCourse] = useState([]);
    const [rateInstructor,setRateInstructor] = useState([]);
    
    var [course,setCourse] = useState([]);
    var [instructor,setInstructor] = useState([]);
    var [subtitle,setsubtitle] = useState([]);

    var [choice,setchoice] = useState([]);
    var [choice2,setchoice2] = useState([]);

    const changehandler = (e)=>{
        setchoice(e.target.value);

    }

    const changehandler2 = (e)=>{
        setchoice2(e.target.value);
    }

    const clickhandler = ()=>{
        alert("Submission Done")
        getRateCourse();
    }
    const clickhandler2 = ()=>{
        alert("Submission Done")
        getRateInstructor();
    }
    const totalpath = window.location.pathname;
    var mySubString = totalpath.substring(
      totalpath.indexOf("/") + 1, 
      totalpath.lastIndexOf("/")
    )
    const videoclickhandler = async()=>{
        alert('congratulation , you have finished the Video')
     //------------------------put instead of "nour" the username that soha will do ---------------------------------------------------
     if(mySubString==='corporatetrainee')
     {

         await axios.get(`http://localhost:9000/${mySubString}/updateprogresscorp/nour/${location.state[0]}`)
     }   
     else if (mySubString === 'individualtrainee')
     {
        await axios.get(`http://localhost:9000/${mySubString}/updateprogressind/kkkkk/${location.state[0]}`)
     }

             
    }

    
        const getRateCourse =  async () => {
            await axios.get(`http://localhost:9000/course/updateRate/${location.state[0]}/${choice}`).then(
                (res) => { 
                    const rateCourse = res.data
                    console.log(rateCourse)
                    setRateCourse(rateCourse)

                }
                );
            }

            const getRateInstructor =  async () => {
                await axios.get(`http://localhost:9000/instructor/updateRate/${location.state[1]}/${choice2}`).then(
                    (res) => { 
                        const rateInstructor = res.data
                        console.log(rateInstructor)
                        setRateInstructor(rateInstructor)
    
                    }
                    );
                }    
        
        const getCourse =  async () => {
            await axios.get(`http://localhost:9000/course/getCourse/${location.state[0]}`).then(
                (res) => { 
                    const course = res.data
                    console.log(course)
                    setCourse(course)
                    setCourseRate(course.Rating.rate)
                }
                );
            }

            const getInstructor =  async () => {
                await axios.get(`http://localhost:9000/instructor/getInstructor/${location.state[1]}`).then(
                    (res) => { 
                        const instructor = res.data
                        console.log(instructor)
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
                    

getCourse();
getInstructor();
getSubtitle();
// alert(subtitle[0])
    return(
        <>
        <div className='CourseDetails-body'>
        <IndividualTraineeNavBar/>

        <div className='videodiv'>
          <video className='video1' src="/videos/video-1.mp4" autoPlay loop muted/>
        </div>

            <div className='RateCourse-div'>
                <h1 className='white-adham'>Course: {course.Title}</h1>
                <br></br>
                <h1 className='white-adham'> Rate The Course :</h1>
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
                <h1 className='white-adham'>Course Rating: {courseRate}</h1>
                </div>
                
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>

            <div className='RateInstructor-div'>
                <h1 className='white-adham'>Instructor of this course: {course.InstructorUserName}</h1>
                <br></br>
                <h1 className='white-adham'>Rate The Instructor:</h1>
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
                <h1 className='white-adham'>Instructor Rating: {instructorRate}</h1>
                </div>
                <div className='info'>

                <h1 className='total'>TotalHours for the course : {course.TotalHours}</h1>
                <h1 className='views'> Course Views : {course.Views}</h1>
                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                {

                   subtitle.length>0 && subtitle.map((sub)=>
                <div className='subtitleincoursedetails1'>
                    <h1 className='white-adham'>subtitle Number : {sub.subtitleNumber}</h1>
                    <h1 className='white-adham'>Subtitle total Hours : { sub.SubtitleHours} </h1>
                    <h1 className='white-adham'>subtitle Short Video Description :{sub.ShortVideoDescription} </h1>
                    <br></br><br></br><br></br>

                 <YoutubeEmbed embedId={sub.VideoLink}/>
                     <br></br><br></br><br></br>
                    <button className='watchvideo-adham' onClick={videoclickhandler}>click here if you finished the video</button>
                    <br></br><br></br><br></br>
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

export default CourseDetails

