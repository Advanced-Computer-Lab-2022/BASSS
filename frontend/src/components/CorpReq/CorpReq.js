import React from 'react'
import axios from 'axios';
import './CorpReq.css'
import IndividualTraineeNavBar from '../../Pages/IndividualTrainee/IndividualTraineeNavBar/IndividualTraineeNavBar';
import CorporateTraineeNavBar from '../../Pages/CorporateTrainee/CorporateTraineeNavBar/CorporateTraineeNavBar';
import InstructorNavBar from '../../Pages/Instructor/InstructorNavBar/InstructorNavBar';
const { useState, useEffect } = require("react");

const CorpReq = (props) => {

    const [corpReqs,setCorpReqs] = useState([]);
    var [choice,setchoice] = useState([]);
    var [id,setID] = useState([]);
    
    const getCorpReqs = async ()=>
    {
        await axios.get(`http://localhost:9000/admin/getAllCoReqByName/hazem123`).then(
            (res) => { 
                const reports = res.data
                setCorpReqs(reports)
            });
        }


getCorpReqs();


    return(
        <>

        {<CorporateTraineeNavBar/>}


        <div className='myReportsBody1'>


        <h1 className='h1MyReports1'>My Requests</h1>
        <br></br><br></br><br></br><br></br><br></br>

        <div className='allReports1'>
        {corpReqs.map((corpReq) => (
            <div>
                <div className='eachReport1'>
                <h1 className='h1Report1'>Course Title: {corpReq.CourseTitle}</h1>
                <br></br>
                <h1 className='h1Report1'>Request Status: {corpReq.Status}</h1>

                </div>

                <div>
                    <hr className='reportsHr1' color='black'></hr>
                </div>
            
            </div>
                
            ))}
        </div>

        </div>
        </>

    )

}

export default CorpReq;