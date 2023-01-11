import React from 'react'
import axios from 'axios';
import '../CorpReq/CorpReq.css'
import IndividualTraineeNavBar from '../../Pages/IndividualTrainee/IndividualTraineeNavBar/IndividualTraineeNavBar';
import CorporateTraineeNavBar from '../../Pages/CorporateTrainee/CorporateTraineeNavBar/CorporateTraineeNavBar';
import InstructorNavBar from '../../Pages/Instructor/InstructorNavBar/InstructorNavBar';
import TraineeProfile from '../Profiles/TraineeProfile';
const { useState, useEffect } = require("react");

const RefReq = (props) => {

    const [refReqs,setRefReqs] = useState([]);
    var [choice,setchoice] = useState([]);
    var [id,setID] = useState([]);
    const [profile,setProfile] = useState(false);

    const profileHandler = () => {
        setProfile(!profile)
    }

    
    const getRefReqs = async ()=>
    {
        await axios.get(`http://localhost:9000/admin/getAllRefReqByName/hazem123`).then(
            (res) => { 
                const reports = res.data
                setRefReqs(reports)
            });
        }


getRefReqs();


    return(
        <>

        {<IndividualTraineeNavBar profileHandler={profileHandler}/>}
        {profile && <TraineeProfile Who="individualtrainee"/>}

        <div className='myReportsBody1'>

        {!profile && 
            <div>
                <h1 className='h1MyReports1'>My Refunds</h1>
                <br></br><br></br><br></br><br></br><br></br>

                <div className='allReports1'>
                {refReqs.map((refReq) => (
                    <div>
                        <div className='eachReport1'>
                            <h1 className='h1Report1'>Course Title: {refReq.CourseTitle}</h1>
                            <br></br>
                            <h1 className='h1Report1'>Refund Status: {refReq.Status}</h1>
                        </div>
                        <div>
                            <hr className='reportsHr1' color='black'></hr>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        }
        </div>
        </>

    )

}

export default RefReq;