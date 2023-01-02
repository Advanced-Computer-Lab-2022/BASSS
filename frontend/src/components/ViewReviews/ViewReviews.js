import axios from 'axios';
import '../../Pages/Instructor/Instructor.css'
import './ViewReviews.css'
import '../CourseDetails/CourseDetails.css'
import InstructorNavBar from '../../Pages/Instructor/InstructorNavBar/InstructorNavBar';

const { useState, useEffect } = require("react");

const Reviews = () => { 

    const [instuctorReviews,setReview] = useState([]);

    const getReview =  async () => {
    await axios.get(`http://localhost:9000/instructor/viewRating/review`).then(
            (res) => { 
                const inst = res.data
                console.log(inst)
                setReview(inst.Reviews)
            }
             );
    }

    getReview();  

    return(
        <div class='Instructor-body'>
            <InstructorNavBar/>
            <div className='Login_bodySara'>
            <div class="instReviewDiv">
                {instuctorReviews.map((Review) => (
                    <div>
                        <label >{Review} </label>
                        <br/>
                    </div>
            ))}

            </div>
            </div>

        <br></br><br></br><br></br>
            




        </div>

    )

}

export default Reviews;