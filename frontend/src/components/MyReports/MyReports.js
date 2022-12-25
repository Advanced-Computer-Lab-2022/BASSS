import React from 'react'
import axios from 'axios';
import './MyReports.css'
const { useState, useEffect } = require("react");

function MyReports(){

    const [reports,setReports] = useState([]);

    const getReports = async ()=>
    {
        await axios.get(`http://localhost:9000/admin/getReport/hazem123`).then(
            (res) => { 
                const reports = res.data
                console.log(reports)
                setReports(reports)
            });
        }


getReports();

    return(
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
                </div>

                <div>
                    <hr className='reportsHr' color='black'></hr>
                </div>
            
            </div>
                
            ))}
        </div>

        </div>
    )

}

export default MyReports;