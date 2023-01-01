import axios from 'axios';
import '../../Pages/Instructor/Instructor.css'
import './ViewReviews.css'

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
        <div   className='Instructor-body'>
<h1>My Reviews: </h1>
<br></br>
                {instuctorReviews.map((Review) => (
                <div>
                
                <h1>{Review}</h1>
                </div>

            ))}




        </div>

    )

}

export default Reviews;