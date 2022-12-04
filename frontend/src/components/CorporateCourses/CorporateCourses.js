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







const Courses = (props) => { 

    const [courses,setCourses] = useState([]);
   // const subj =  document.getElementById(subs).value;
  //var selectElement = document.querySelector('#subs');
  //var output = selectElement.value;

    const getCourses=  async () => {
        await axios.get(`http://localhost:9000/course`).then(
            (res) => { 
                const courses = res.data
                console.log(courses)
                setCourses(courses)
                
            }
             );

        }
        
       const subj =  "CS";
      var [choice,setchoice] = useState([]);
      var [choice2,setchoice2] = useState([]);
      const [choice3,setchoice3] = useState([]);

   
      const [filtered,setfiltered] = useState([]);
      const [filtered2,setfiltered2] = useState([]);
      //const [filteredbyRate,setfilteredbyRate] = useState([]);
      //const [filteredbyPrice,setfilteredbyPrice] = useState([]);

      
      
      const getfiltered=  async () => {
        if(choice.length==0 && choice2.length==0 && choice3.length==0){
        await axios.get(`http://localhost:9000/course/empty/empty/empty`).then(
            (res) => { 
                const filtered = res.data
                console.log(filtered)
                setfiltered(filtered)
            }
             );
}else 
  if(choice.length==0 && choice3.length==0){
    await axios.get(`http://localhost:9000/course/empty/${choice2}/empty`).then(
        (res) => { 
            const filteredbyRate = res.data
            console.log(filteredbyRate)
            setfiltered(filteredbyRate)
            
        }
         );
} else if(choice2.length==0 && choice3.length==0){
    await axios.get(`http://localhost:9000/course/${choice}/empty/empty`).then(
        (res) => { 
            const filteredbyRate = res.data
            console.log(filteredbyRate)
            setfiltered(filteredbyRate)
            
        }
         );
}else if(choice.length==0 && choice2.length==0){
    await axios.get(`http://localhost:9000/course/empty/empty/${choice3}`).then(
        (res) => { 
            const filteredbyRate = res.data
            console.log(filteredbyRate)
            setfiltered(filteredbyRate)
            
        }
         );
}else if(choice.length==0){
    await axios.get(`http://localhost:9000/course/empty/${choice2}/${choice3}`).then(
        (res) => { 
            const filteredbyRate = res.data
            console.log(filteredbyRate)
            setfiltered(filteredbyRate)
            
        }
         );
}else if(choice2.length==0){
    await axios.get(`http://localhost:9000/course/${choice}/empty/${choice3}`).then(
        (res) => { 
            const filteredbyRate = res.data
            console.log(filteredbyRate)
            setfiltered(filteredbyRate)
            
        }
         );
}else if(choice3.length==0){
    await axios.get(`http://localhost:9000/course/${choice}/${choice2}/empty`).then(
        (res) => { 
            const filteredbyRate = res.data
            console.log(filteredbyRate)
            setfiltered(filteredbyRate)
            
        }
         );
}
else {
    await axios.get(`http://localhost:9000/course/${choice}/${choice2}/${choice3}`).then(
        (res) => { 
            const filteredbyRate = res.data
            console.log(filteredbyRate)
            setfiltered(filteredbyRate)
            
        }
         );
}


      }
// const getfilteredbyRate=  async () => {
//     await axios.get(`http://localhost:9000/course/r/${choice2}`).then(
//         (res) => { 
//             const filteredbyRate = res.data
//             console.log(filteredbyRate)
//             setfiltered(filteredbyRate)
            
//         }
//          );
// }

      
             const changehandler =  (e)=>{
                //const c = e.target.value;
                choice=[];
                setchoice(e.target.value);  
                

             }
             const changehandler2 =  (e)=>{
                //const c = e.target.value;
                 choice2=[];
                setchoice2(e.target.value);
                            
             }
             const changehandler3 =  (e)=>{
                //const c = e.target.value;
                setchoice3(e.target.value);             
             }
            

     getfiltered();
   // getCourses();
    //getfilteredbyRate();
    return(

        <div >
            
            {/* <Link to ="/instructor/MyCourses">
            <button>
                View My Courses</button>
            </Link> */}
            
            {/* {courses.map((course) => (
                <div className='salama_instructor_allcourses' >
                    <h1 className='salama_instructor_allCourses_title'>Title: {course.Title} </h1>
                    <h2 className='salama_instructor_allCourses_others'>Total Hours: {course.TotalHours} , Rating: {course.Rating} , Price: {course.Price}</h2>
                    <br></br>
                </div>
            ))} */} 


   
    <div> 
    <label for="subs"> Subject:</label>
    <select onChange={changehandler}     name="subs" id="subs">
    <option value="fgfgf"></option>
    <option value="CS">CS</option>
  <option value="Managment">Managment</option>
  <option value="Finance">Finance</option>
  
</select>




   {/* <Link to ="/Courses">
            <button onClick={() => window.location.href=/course?subject=${CS}}
              key={author._id}>
                filter</button>
            </Link>  */}


            </div>

            <div> 
    <label for="subs"> rating:</label>
    <select onChange={changehandler2}     name="subs" id="subs">
    <option value="fgfgf"></option>
    <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</select>
</div>





            <div> 
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">Total Hours</StyledTableCell>
            <StyledTableCell align="center">Rating</StyledTableCell>
         
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
             onClick={() => window.location.href=props.Link}
            //   key={author._id}

              >
              <TableCell align="center">{course.Title}</TableCell>
              <TableCell align="center">{course.TotalHours}</TableCell>
              <TableCell align="center">{course.Rating}</TableCell>
              
            </TableRow>

))}
        </TableBody>
      </Table>
    </TableContainer>

    </div> 




        </div>   

    )
}

export default Courses;