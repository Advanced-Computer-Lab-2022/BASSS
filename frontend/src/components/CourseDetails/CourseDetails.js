import axios from 'axios';
import './CourseDetails.css';
import { useState} from 'react';

const CourseDetails = () => { 
    const params = new URLSearchParams(window.location.search);
    const courseID = params.get('courseId');

    const [coursedetails,setcoursedetails] = useState([])

    const getCourseDetails = async ()=>{
        await axios.get(`http://localhost:9000/course/courseDetails/${courseID}`).then(
            (res) => {
                const details = res.data;
                setcoursedetails(details);
            }
        )
    }

    getCourseDetails();
    
    return(

        <div className='CourseDetails-body'>
            <div>
                <br></br>
        <table class="fl-table">

            <thead>
                <th> Subtitles</th>
                <th> Total Hours</th>
                <th> Price</th>
                <th> Discount %</th>

            </thead>
            <tbody>
        {coursedetails.map((course) => (
                <tr>
                    <td>{course.Subtitles}</td>
                    <td>{course.TotalHours}</td>
                    <td>{course.Price}</td>
                    <td>{course.PromotionPercentage}</td>
                </tr>
        ))}
            </tbody>
        </table>
        </div>
        </div>
    )
}


export default CourseDetails;