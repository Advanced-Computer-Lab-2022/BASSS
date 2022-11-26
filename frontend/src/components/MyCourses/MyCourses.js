import axios from 'axios';
import '../Courses/Courses.css';
import { Link } from 'react-router-dom';
import '../../Pages/Instructor/Instructor.css'

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

const MyCourses = () => { 

    const [myCourses,setMyCourses] = useState([]);

    const getMyCourses=  async () => {
        await axios.get(`http://localhost:9000/course/salama`).then(
            (res) => { 
                const myCourses = res.data
                console.log(myCourses)
                setMyCourses(myCourses) 
            }
             );
            
    }

    getMyCourses();

    return(
        /* 
        1. create a button to load the blogs
        2. map over the blogs and display them
        */


        <div className='Instructor-body'>


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
            
        {myCourses.map((course) => (
            <TableRow
            hover
            sx={{
                "&:hover":{
                cursor: "pointer",
                backgroundColor: "#f5f5f5",
                width: "100%"
                }
            }}
            onClick={() => window.location.href="/instructor/MyCourses/CourseDetails"}
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

export default MyCourses;