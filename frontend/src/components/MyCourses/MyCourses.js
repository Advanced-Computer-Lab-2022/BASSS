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
    
    
  
  var [choice,setchoice] = useState([]);
  var [choice2,setchoice2] = useState([]);
  const [choice3,setchoice3] = useState([]);


  const [filtered,setfiltered] = useState([]);
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
    choice=[];
    setchoice(e.target.value);  
    

 }
 const changehandler3 =  (e)=>{
    //const c = e.target.value;
    setchoice3(e.target.value);             
 }


    getMyCourses();

    getfiltered();
    return(
        /* 
        1. create a button to load the blogs
        2. map over the blogs and display them
        */


        <div className='Instructor-body'>
            
            <div> 
    <label for="subs"> Subject:</label>
    <select onChange={changehandler}     name="subs" id="subs">
    <option value="fgfgf"></option>
    <option value="CS">CS</option>
  <option value="Managment">Managment</option>
  <option value="Finance">Finance</option>
  
</select>


            </div>
            <div> 
            <label for="subs"> price:</label>
    <select onChange={changehandler3}     name="subs" id="subs">
    <option value="fgfgf"></option>
    <option value="0">free</option>
  <option value="100">not free</option>
 
</select>
           
    
</div>


<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Title</StyledTableCell>
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
            </TableRow>

))}
        </TableBody>
      </Table>
    </TableContainer>
            
        </div>   

    )
}

export default MyCourses;