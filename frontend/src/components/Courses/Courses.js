import './Courses.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
const { useState } = require("react");


const Courses = () => { 

    const [courses,setCourses] = useState([]);

    const getCourses=  async () => {
        await axios.get(`http://localhost:9000/course`).then(
            (res) => { 
                const courses = res.data
                console.log(courses)
                setCourses(courses)
                
            }
             );

            
    }


    getCourses();

    return(

        <div>


            {courses.map((course) => (
         
                <div classname = "courses">
                <h1>Title: {course.Title} </h1>
                <h2>Total Hours: {course.TotalHours} , Rating: {course.Rating} , Price: {course.Price}</h2>
                </div>
           
                
            ))}

            <Link to ="/instructor/MyCourses">
            <button 
            //3yza a5alyh yb3at el instructor name m3ah 3shn a3raf a search byh??
            // onClick={() => window.location.href=`/instructor/MyCourses`}
            >
                View My Courses</button>
            </Link>
            
            
        </div>   

    )
}

export default Courses;