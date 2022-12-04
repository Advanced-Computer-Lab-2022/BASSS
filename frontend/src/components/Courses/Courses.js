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

const { useState, useEffect } = require("react");

const Courses = () => {
    const forgotpass =  async () => {
        await axios.get(`http://localhost:9000/instructor/forgetpass`).then(
            (res) => { 
                // const filtered = res.data
                // console.log(filtered)
                // setfiltered(filtered)
                alert('check your mail')
            }
            
             );
    } 

   // const subj =  document.getElementById(subs).value;
  //var selectElement = document.querySelector('#subs');
  //var output = selectElement.value;


      var [choice,setchoice] = useState([]);
      var [choice2,setchoice2] = useState('');
      const [choice3,setchoice3] = useState([]);

   
      const [filtered,setfiltered] = useState([]);
      const [first,setfirst] = useState(0);
      //const [filteredbyRate,setfilteredbyRate] = useState([]);
      //const [filteredbyPrice,setfilteredbyPrice] = useState([]);

      
      
      const getfiltered =  async () => {
        // alert(choice2)
        if(choice.length==0 && choice2.length==0 && choice3.length==0){
        await axios.get(`http://localhost:9000/course/empty/empty/empty`).then(
            (res) => { 
                const filtered = res.data
                console.log(filtered)
                setfiltered(filtered)
            }
             );
}else {
  if(choice.length==0 && choice3.length==0 && choice2!=0){
    await axios.get(`http://localhost:9000/course/empty/${choice2}/empty`).then(
        (res) => { 
            const filteredbyRate = res.data
            console.log(filteredbyRate)
            setfiltered(filteredbyRate)
            
        }
         );
}

 else if(choice2.length==0 && choice3.length==0){
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

      
             const changehandler =  async(e)=>{
                setchoice(e.target.value);
             }
             const changehandler2 = async (e)=>{
                setchoice2(e.target.value);                         
             }
             const changehandler3 =  async(e)=>{
                setchoice3(e.target.value);  
             }
             
             const clickhandler1 = ()=>{
              getfiltered()
             }
            const clickhandler2 = ()=>{
              getfiltered()
             }
            const clickhandler3 = ()=>{
              getfiltered()
             }
             const clickhandler4 = ()=>{
                forgotpass()
                alert('check you mail:) ')
               }

             if(first==0)
             {
               getfiltered();
               setfirst(1)
             }
    return(

        <div >
            
            <button  onClick={clickhandler4}> forget password</button>
   
    <div> 

    <button onClick={clickhandler1}>submit</button>
    <input placeholder='subject' onChange={changehandler} value={choice}/>

    </div>

    <div> 
    <button onClick={clickhandler2}>submit</button>
    <input placeholder='rating' onChange={changehandler2} value={choice2} />
    </div>


    <div> 
    <button onClick={clickhandler3}>submit</button>
    <input placeholder='price' onChange={changehandler3} value={choice3}/>
    </div>

{/* <div> 

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
       

</div> */}

            <div> 
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
             
            
          {filtered.map((course) => (
            <TableRow
            hover
            sx={{ "&:hover":{cursor: "pointer",backgroundColor: "#f5f5f5",width: "100%"}
            }}
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
        </div>   
    )
}

export default Courses;