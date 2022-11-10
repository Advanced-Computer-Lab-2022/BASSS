import { useState } from 'react';
import { fetchCourse } from '../API/CourseAPI';

function Courses () {
//get courses
// const [courses,setCourses] = useState([])
// const GetCourses = async()=>{
//     // alert(await fetchCourse())
//     setCourses(await fetchCourse() ) 
    
// } 
const [courses,setCourses] = useState([]);
const getCourses = async () =>{
  setCourses ((await fetchCourse()));
}

    const Coursedetails =({course})=>{
        return(
            <div className="workout-details">
                <h4>{course.Title}</h4>
                <h4>{course.Subject}</h4>
                <h4>{course.TotalHours}</h4>
                <h4>{course.Price}</h4>
            </div>
        )
    }

    // alert(getCourses.length)
    getCourses();
    return(
        <div className='Home'>
        <div className='courses'>
             {courses &&courses.map((course)=>(
                <Coursedetails key={course._id} course={course}/>
            ))}
        </div>
    </div>
    )
}


export default Courses