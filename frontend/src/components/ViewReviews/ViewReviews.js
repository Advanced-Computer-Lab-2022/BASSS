import axios from 'axios';
import '../../Pages/Instructor/Instructor.css'
import './ViewReviews.css'
import '../CourseDetails/CourseDetails.css'
import InstructorNavBar from '../../Pages/Instructor/InstructorNavBar/InstructorNavBar';

const { useState, useEffect } = require("react");

const ViewReviews = (props) => { 

    const [instuctorReviews,setReview] = useState([]);

    const getReview =  async () => {
    await axios.get(`http://localhost:9000/instructor/viewRating/review`).then(
            (res) => { 
                const inst = res.data
                setReview(inst.Reviews)
            }
             );
    }

    getReview();  

    return(
            <div class="instReviewDiv">
                {instuctorReviews.map((Review) => (
                    <div class= 'instReviewLabel'>
                        <label >{Review} </label>
                        <br/>
                    </div>
            ))}
            <i class="fa fa-arrow-left" aria-hidden="true" onClick={props.handleReview}></i>
            {/* <button class='backReviewbtn' onClick={props.handleReview}>Back</button> */}
            </div>

            





    )

}

export default ViewReviews;