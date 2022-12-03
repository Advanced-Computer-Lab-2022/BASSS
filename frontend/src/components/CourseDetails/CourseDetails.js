import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './CourseDetails.css';
import { Link } from 'react-router-dom'

const { useState, useEffect } = require("react");


const CourseDetails = () => { 

    const location = useLocation();

    const [courseRate,setCourseRate] = useState("");
    const [instructorRate,setInstructorRate] = useState("");

    const [rateCourse,setRateCourse] = useState([]);
    const [rateInstructor,setRateInstructor] = useState([]);
    
    var [course,setCourse] = useState([]);
    var [instructor,setInstructor] = useState([]);

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
            

getCourse();
getInstructor();


    return(

        <div className='CourseDetails-body'>
            <div className='RateCourse-div'>
                <h1>Course: {course.Title}</h1>
                <h1>Rate Course</h1>
                <select onChange={changehandler}     name="rate" id="rate">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </select>
                <button onClick={clickhandler}>Submit</button>
                <h1>Course Rating: {courseRate}</h1>
            </div>

            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>

            <div>
                <h1>Instructor of this course: {course.InstructorUserName}</h1>
                <h1>Rate Instructor</h1>
                <select onChange={changehandler2}    name="rate2" id="rate2">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </select>
                <button onClick={clickhandler2}>Submit</button>
                <h1>Instructor Rating: {instructorRate}</h1>
            </div>
           
  
                
        </div>
        )
}


export default CourseDetails;