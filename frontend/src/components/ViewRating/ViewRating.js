import axios from 'axios';
import './ViewRating.css';

const { useState, useEffect } = require("react");

const Rating = () => { 

    const [instuctorRate,setRate] = useState([]);

    const getRate =  async () => {
    await axios.get(`http://localhost:9000/instructor/viewRating/review`).then(
            (res) => { 
                const inst = res.data
                console.log(inst)
                setRate(inst.Rating.rate)
            }
             );
    }

    getRate();

    return(
        <div>

                {/* {instuctorRate.map((instructor) => (
                <div className='instRate'>
                <h1>My Rate: </h1>
                <h1>{instructor.Rating.rate}</h1>
                </div>

            ))} */}

                {
                    <div className='instRate'>
                    <h1>My Rate: </h1>
                    <h1>{instuctorRate}</h1>
                    </div>

                }
            



        </div>

    )

}

export default Rating;