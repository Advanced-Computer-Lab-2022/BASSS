import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
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

const CorporateCourses = (props) => { 

    const [courses,setCourses] = useState([]);
   // const subj =  document.getElementById(subs).value;
  //var selectElement = document.querySelector('#subs');
  //var output = selectElement.value;


        
       const subj =  "CS";
      var [choice,setchoice] = useState([]);
      var [choice2,setchoice2] = useState([]);
      const [choice3,setchoice3] = useState([]);

   
      const [filtered,setfiltered] = useState([]);
      const [first,setfirst] = useState(0);

      
      
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
             const clickhandler1 = ()=>{
             getfiltered()
            }
           const clickhandler2 = ()=>{
             getfiltered()
            }
   
            if(first==0)
            {
              getfiltered();
              setfirst(1)
            }
            
    const navigate = useNavigate();

     getfiltered();
   // getCourses();
    //getfilteredbyRate();
    return(

        <div >
            
            <br></br><br></br><br></br><br></br><br></br><br></br>
<div> 

<button onClick={clickhandler1}>submit</button>
<input placeholder='subject' onChange={changehandler} value={choice}/>

</div>

<div> 
<button onClick={clickhandler2}>submit</button>
<input placeholder='rating' onChange={changehandler2} value={choice2} />
</div>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>


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
               onClick={() => navigate( {state:[course._id,course.InstructorUserName]} )}
            //   key={author._id}

              >
              <TableCell align="center">{course.Title}</TableCell>
              <TableCell align="center">{course.TotalHours}</TableCell>
              <TableCell align="center">{course.Rating.rate}</TableCell>
            </TableRow>

))}
        </TableBody>
      </Table>
    </TableContainer>

    </div> 




            

    )
}

export default CorporateCourses;
