import axios from 'axios';
import './Courses.css';

import { Link } from 'react-router-dom';

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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

const { useState } = require("react");

const Courses = () => { 

    const [courses,setCourses] = useState([]);

    const getCourses=  async () => {
        await axios.get(`http://localhost:9000/course`).then(
            (res) => { 
                const courses = res.data
                console.log(courses)
                setCourses(courses)
                
            }
             );
    }

    getCourses();

    return(

        <div >
            
            <Link to ="/instructor/MyCourses">
            <button>
                View My Courses</button>
            </Link>
            
            {/* {courses.map((course) => (
                <div className='salama_instructor_allcourses' >
                    <h1 className='salama_instructor_allCourses_title'>Title: {course.Title} </h1>
                    <h2 className='salama_instructor_allCourses_others'>Total Hours: {course.TotalHours} , Rating: {course.Rating} , Price: {course.Price}</h2>
                    <br></br>
                </div>
            ))} */} 

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
            
        {courses.map((course) => (
            <TableRow
            hover
            sx={{
                "&:hover":{
                cursor: "pointer",
                backgroundColor: "#f5f5f5",
                width: "100%"
                }
            }}
             onClick={() => window.location.href="/instructor/CourseDetails"}
            //   key={author._id}

              >
              <TableCell align="center">{course.Title}</TableCell>
              <TableCell align="center">{course.TotalHours}</TableCell>
              <TableCell align="center">{course.Rating}</TableCell>
              <TableCell align="center">{course.Price}</TableCell>
            </TableRow>

))}
        </TableBody>
      </Table>
    </TableContainer>

            
        </div>   

    )
}

export default Courses;