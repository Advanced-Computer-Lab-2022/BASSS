import { useEffect,useState } from 'react';
import fetchCourse from '../API/coursemethods';
const Home = () =>{
    const [courses,setCourses] = useState([])
    const getCourses = async()=>{
        // alert(await fetchCourse())
        setCourses(await fetchCourse())
        
    }
    getCourses()
        return(
        <div className='Home'>
            <div className='courses'>
                <p>jhbjhbj</p>
                {courses &&courses.map((course)=>(

                    <p key={course._id}>{course.Title}</p>
                ))}
            </div>
        </div>
    )
}
export default Home;