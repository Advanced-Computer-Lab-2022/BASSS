import { useState } from 'react';
import { fetchCourse } from '../../API/CourseAPI';

function Courses () {
    
const [courses,setCourses] = useState([]);
const getCourses = async () =>{
  setCourses ((await fetchCourse()));
}

    const Coursedetails =({course1})=>{
        return(
            <div className="workout-details">
                <h4>{course1.Title}</h4>
                <h4>{course1.Subject}</h4>
                <h4>{course1.TotalHours}</h4>
                <h4>{course1.Price}</h4>
                <h4>{course1.adham}</h4>
            </div>
        )
    }

    // alert(getCourses.length)
    getCourses();
    return(
        <div className='Home'>
        <div className='courses'>
             {courses &&courses.map((course)=>(
                <Coursedetails key={course._id} course1={course}/>
            ))}
        </div>
    </div>
    )
}


export default Courses