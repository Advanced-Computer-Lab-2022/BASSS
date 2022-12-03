import axios from 'axios';
import '../../Pages/Instructor/Instructor.css'
import './ViewReviews.css'

const { useState, useEffect } = require("react");

const Reviews = () => { 

    const [instuctorReview,setReview] = useState([]);

    const getReview =  async () => {
    await axios.get(`http://localhost:9000/instructor/viewRating/review`).then(
            (res) => { 
                const review = res.data
                console.log(review)
                setReview(review)
            }
             );
    }

    getReview();  

    return(
        <div   className='Instructor-body'>

                {instuctorReview.map((instructor) => (
                <div className='instReview'>
                <h1>My Reviews: </h1>
                <h1>{instructor.Reviews}</h1>
                </div>

            ))}



        </div>

    )

}

export default Reviews;