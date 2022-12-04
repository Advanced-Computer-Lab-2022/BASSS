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

        
    
  
  var [choice,setchoice] = useState([]);
  var [choice2,setchoice2] = useState([]);
  const [choice3,setchoice3] = useState([]);


  const [filtered,setfiltered] = useState([]);
  const [first,setfirst] = useState(0);
  //const [filteredbyRate,setfilteredbyRate] = useState([]);
  //const [filteredbyPrice,setfilteredbyPrice] = useState([]);

  
  
  const getfiltered=  async () => {
    if(choice.length==0 &&  choice3.length==0){
    await axios.get(`http://localhost:9000/course/my/salama/empty/empty`).then(
        (res) => { 
            const filtered = res.data
            console.log(filtered)
            setfiltered(filtered)
        }
         );

}else if(choice.length==0){
await axios.get(`http://localhost:9000/course/my/salama/empty/${choice3}`).then(
    (res) => { 
        const filteredbyRate = res.data
        console.log(filteredbyRate)
        setfiltered(filteredbyRate)
        
    }
     );

}else if(choice3.length==0){
await axios.get(`http://localhost:9000/course/my/salama/${choice}/empty`).then(
    (res) => { 
        const filteredbyRate = res.data
        console.log(filteredbyRate)
        setfiltered(filteredbyRate)
        
    }
     );
}
else {
await axios.get(`http://localhost:9000/course/my/salama/${choice}/${choice3}`).then(
    (res) => { 
        const filteredbyRate = res.data
        console.log(filteredbyRate)
        setfiltered(filteredbyRate)
        
    }
     );
}


  }

  const changehandler =  (e)=>{
    //const c = e.target.value;
    setchoice(e.target.value);  
  
 }
 const changehandler3 =  (e)=>{
    //const c = e.target.value;
    setchoice3(e.target.value);             
 }

 const clickhandler1 = ()=>{
  getfiltered()
 }

const clickhandler3 = ()=>{
  getfiltered()
 }

 if(first==0)
 {
   getfiltered();
   setfirst(1)
 }


    getMyCourses();

    return(
        <div className='Instructor-body'>
            <InstructorNavBar/>
            <Search Type="searchMyCourses"/>
          {/* <h1>My Courses</h1>
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
 */}

<div> 

    <button onClick={clickhandler1}>submit</button>
    <input placeholder='subject' onChange={changehandler} value={choice}/>

    </div>

    <div> 
    <button onClick={clickhandler3}>submit</button>
    <input placeholder='price' onChange={changehandler3} value={choice3}/>
    </div>


<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Rating</StyledTableCell>
            <StyledTableCell align="center">Reviews</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

     

            
        {filtered.map((course) => (
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
              <TableCell align="center">{course.Price}</TableCell>
              <TableCell align="center">{course.Rating}</TableCell>
              <TableCell align="center">{course.Reviews}</TableCell>
            </TableRow>

))}
        </TableBody>
      </Table>
    </TableContainer>
            
        </div>   

    )
}

export default MyCourses;