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
            <button  className='soha_viewCoursebtn'
            //3yza a5alyh yb3at el instructor name m3ah 3shn a3raf a search byh??
            >
                View My Courses</button>
            </Link>
            
          <h1>All Courses</h1>
          <table class="fl-table">

          <thead>
              <th> Course Title</th>
              <th> Total Hours </th>
              <th> Rating </th>
              <th> Price </th>
          </thead>
          <tbody>
          {courses.map((course) => (
              <tr 
                onClick={() => window.location.href= `/instructor/courseDetails?courseId=${course._id}` }
              >
                  <td>{course.Title}</td>
                  <td>{course.TotalHours}</td>
                  <td>{course.Rating}</td>
                  <td>{course.Price}</td>
              </tr>
          ))}  
          </tbody>
          </table>
            
        </div>   

    )
}

export default Courses;