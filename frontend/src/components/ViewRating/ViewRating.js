import axios from 'axios';
import './ViewRating.css';

const { useState, useEffect } = require("react");

const Rating = () => { 

    const [instuctorRate,setRate] = useState([]);

    const getRate =  async () => {
    await axios.get(`http://localhost:9000/instructor/viewRating/review`).then(
            (res) => { 
                const rate = res.data
                console.log(rate)
                setRate(rate)
            }
             );
    }

    getRate();

    return(
        <div>

                {instuctorRate.map((instructor) => (
                <div className='instRate'>
                <h1>My Rate: </h1>
                <h1>{instructor.Rating.rate}</h1>
                </div>

            ))}



        </div>

    )

}

export default Rating;