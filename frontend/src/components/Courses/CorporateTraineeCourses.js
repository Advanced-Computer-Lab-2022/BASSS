import React from 'react'
import axios from 'axios';
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
    const CorporateTusernam = 'sarasaad2001'
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
      <h1>MY COURSES</h1>
       <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
            <TableRow>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">Total Hours</StyledTableCell>
            <StyledTableCell align="center">Rating</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
             
            
          {mycourses.map((course) => (
            <TableRow
            hover
            sx={{ "&:hover":{cursor: "pointer",backgroundColor: "#f5f5f5",width: "100%"}
            }}

            onClick={() => navigate(props.Link, {state:[course._id,course.InstructorUserName]} )}
              >
              <TableCell align="center">{course.Title}</TableCell>
              <TableCell align="center">{course.TotalHours}</TableCell>
              <TableCell align="center">{course.Rating.rate}</TableCell>
              <TableCell align="center">{course.Price}</TableCell>
            </TableRow>
))}
        </TableBody>
      </Table>
    </TableContainer>

     </div>
   )
 }
 
 export default CorporateTraineeCourses
 