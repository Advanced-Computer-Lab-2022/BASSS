import axios from 'axios';
import '../Courses/Courses.css';
import { Link } from 'react-router-dom';
import '../../Pages/Instructor/Instructor.css'
const { useState } = require("react");

const MyCourses = () => { 



    const [myCourses,setMyCourses] = useState([]);

    const getMyCourses=  async () => {
        await axios.get(`http://localhost:9000/course/salama`).then(
            (res) => { 
                const myCourses = res.data
                console.log(myCourses)
                setMyCourses(myCourses) 
            }
             );
            
    }

    getMyCourses();

    return(
        /* 
        1. create a button to load the blogs
        2. map over the blogs and display them
        */


        <div className='Instructor-body'>


            {myCourses.map((course) => (
                <div>
                <h1>Title: {course.Title} </h1>
                <h2>Total Hours: {course.TotalHours} , Rating: {course.Rating} , Price: {course.Price}</h2>
                </div>
                
            ))}
            
        </div>   

    )
}

export default MyCourses;