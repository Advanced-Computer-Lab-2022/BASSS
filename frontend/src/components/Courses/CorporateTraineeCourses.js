import React from 'react'
import axios from 'axios';
import ProgressBar from '../ProgressBar/ProgressBar';
import './Courses.css';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';  
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const { useState, useEffect } = require("react");

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      
    },
  }));

 
 function CorporateTraineeCourses(props) {
    const [mycourses,setmycourses] = useState([]);
    const CorporateTusernam = 'nour'
    const getmycourses = async()=>{
        await axios.get(`http://localhost:9000/corporateTrainee/CorporateCourses/${CorporateTusernam}`).then(
            (res) => { 
                const result = res.data
                setmycourses(result)
            }
             );
    }
    getmycourses()
    const navigate = useNavigate()
   return (
     <div>
            <h1 className='indtracou-adham'>MY COURSES</h1>
            <br></br><br></br>
            <br></br><br></br>
      {mycourses.map((mycourse)=>(
                <div className='MyCourses-adham'>
                <h2 className='h1-adham'>Course Progress </h2>
                <ProgressBar bgcolor="blue" progress={`${mycourse[1]}`}  height={20}/>
                <br></br><br></br>
                <h1 className='h1-adham'>Course Title : {mycourse[0].Title}</h1>
                <h1  className='h1-adham'>Course Total Hours : {mycourse[0].TotalHours}</h1>
                <h1  className='h1-adham'>Course Price : {mycourse[0].Price}</h1>
                <h1  className='h1-adham'>Course Rating : {mycourse[0].Rating.rate}</h1>
                <br></br><br></br>
                <h2 className='h1-adham'>in this Course you will learn : {mycourse[0].ShortSummary}</h2>
                <br></br><br></br>
                  <button className='opencourse-adham' onClick={()=> navigate(props.Link, {state:[mycourse[0]._id,mycourse[0].InstructorUserName]} )}>Open Course</button>
                
            </div>
      ))}

     </div>
   )
 }
 
 export default CorporateTraineeCourses
 