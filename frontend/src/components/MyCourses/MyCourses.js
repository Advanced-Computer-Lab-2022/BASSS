import axios from 'axios';
import '../Courses/Courses.css';
import { Link } from 'react-router-dom';
import Search from '../../components/Search/Search';
import '../../Pages/Instructor/Instructor.css'
import InstructorNavBar from '../../Pages/Instructor/InstructorNavBar/InstructorNavBar';

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
        await axios.get(`http://localhost:9000/course/bassel`).then(
            (res) => { 
                const myCourses = res.data
                console.log(myCourses)
                setMyCourses(myCourses) 
            }
             );
            
    }

    getMyCourses();

    return(
        <div className='Instructor-body'>
            <InstructorNavBar/>
            <Search Type="searchMyCourses"/>
          <h1>My Courses</h1>
          <table class="fl-table">
          <thead>
              <th> Course Title</th>
              <th> Total Hours </th>
              <th> Rating </th>
              <th> Price </th>
          </thead>
          <tbody>
          {myCourses.map((course) => (
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

export default MyCourses;