import React from 'react'
import axios from 'axios';
import './MyReports.css'
import IndividualTraineeNavBar from '../../Pages/IndividualTrainee/IndividualTraineeNavBar/IndividualTraineeNavBar';
const { useState, useEffect } = require("react");

function MyReports(){

    const [reports,setReports] = useState([]);
    var [choice,setchoice] = useState([]);
    var [id,setID] = useState([]);
    
    const getReports = async ()=>
    {
        await axios.get(`http://localhost:9000/admin/getReport/hazem123`).then(
            (res) => { 
                const reports = res.data
                setReports(reports)
            });
        }

        const followUp = async ()=>
    {
        await axios.get(`http://localhost:9000/admin/FollowUp/${id}/${choice}`).then(
            (res) => { 
                const followUp = res.data
            });
        }


const changehandler = (e)=>{
    setchoice(e.target.value);
}

const clickhandler = async (e)=>{
    const status = e.target.getAttribute("status");
    if(choice.length == 0)
    {
        alert("Please Fill The Follow Up Message!!")
    }
    else if(status == "Resolved")
        alert("You Cant Follow Up Resolved Problems!!")
    else{    
    id = e.target.getAttribute("id");
    alert("Report Sent!!");
    followUp();
    }
    
}

getReports();

    return(
        <>
        <IndividualTraineeNavBar/>
        <div className='myReportsBody'>


        <h1 className='h1MyReports'>My Reports: </h1>
        <br></br><br></br><br></br><br></br><br></br>

        <div className='allReports'>
        {reports.map((report) => (
            <div>
                <div className='eachReport'>
                <h1 className='h1Report'>Course Title: {report[1].Title}</h1>
                <br></br>
                <h1 className='h1Report'>Instructor of this Course: {report[1].InstructorUserName}</h1>
                <br></br>
                <h1 className='h1Report'>Report Type: {report[0].Type}</h1>
                <br></br>
                <h1 className='h1Report'>Report Status: {report[0].Status}</h1>
                <br></br>
                <h1 className='h1Report'>Created At: {report[0].createdAt}</h1>

                {/* <button onClick={clickhandler} id={report[0]._id} show={report[0].Status}>Follow Up </button> */}
                <div className='followUpBody'> {/*value={choice} */}
                    <input className='followUpInput' placeholder='follow up message' onChange={changehandler} /> 
                    <button className='followUpBttn' onClick={clickhandler} id={report[0]._id} status={report[0].Status}>Follow Up </button>
                </div>
                </div>

                <div>
                    <hr className='reportsHr' color='black'></hr>
                </div>
            
            </div>
                
            ))}
        </div>

        </div>
        </>

    )

}

export default MyReports;