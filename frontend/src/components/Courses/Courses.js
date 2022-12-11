import axios from 'axios';
import './Courses.css';

import { Link, Navigate, useNavigate } from 'react-router-dom';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed';
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
  
  const Courses = (props) => { 


      var [choice,setchoice] = useState([]);
      var [choice2,setchoice2] = useState('');
      const [choice3,setchoice3] = useState([]);

   
      const [filtered,setfiltered] = useState([]);
      const [first,setfirst] = useState(0);
      
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
        }else if(choice.length==0 && choice3.length==0 && choice2!=0){
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
        }
        else if(choice.length==0 && choice2.length==0){
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
        /*     const clickhandler4 = ()=>{
                forgotpass()
                alert('check you mail:) ')
               }*/

             if(first==0)
             {
               getfiltered();
                setfirst(1)
             }

    const totalpath = window.location.pathname;
    var mysubstring = totalpath.substring(totalpath.indexOf("/")+1 , totalpath.lastIndexOf("/"))

 /*   const forgotpass =  async () => {
        await axios.get(`http://localhost:9000/individualtrainee/forgetpass`).then(
            (res) => { 
                alert('check your mail')
            }
            
             );
    }*/


const navigate = useNavigate();
    return(

        <div className='CoursesBody-adham' >
    <div> 
    <button onClick={clickhandler1} className='submitbtn'> submit</button>
    <input placeholder='Filter By Subject' onChange={changehandler} value={choice} className='subject'/>
    </div>

    <div> 
    <button onClick={clickhandler2} className='submitbtn'>submit</button>
    <input placeholder='Filter By Rating' onChange={changehandler2} value={choice2} className='subject' />
    </div>


    <div> 
    <button onClick={clickhandler3} className='submitbtn'>submit</button>
    <input placeholder='Filter By Price' onChange={changehandler3} value={choice3} className='subject'/>
    </div>

      {filtered.map((course) => (
        <div className='AllCourses-adham'>
            <h1 className='h1-adham'>Course Title : {course.Title}</h1>
            <h1  className='h1-adham'>Course Total Hours : {course.TotalHours}</h1>
            <h1  className='h1-adham'>Course Price : {course.Price}</h1>
            <h1  className='h1-adham'>Course Rating : {course.Rating.rate}</h1>
            <br></br><br></br>
            <h2 className='h1-adham'>in this Course you will learn : {course.ShortSummary}</h2>
            <br></br><br></br>
            <h3 className='h3-adham'>Course video Preview</h3>
            <br></br><br></br>
            <YoutubeEmbed embedId={course.VideoPreviewLink}/>
            <br></br><br></br>
            <button className='register-now-adham'>REGISTER NOW </button>
            <br></br><br></br>
        </div>

      )
      
      )}
        </div>   
    )
}

export default Courses;
// onClick={() => navigate(props.Link, {state:[course._id,course.InstructorUserName]} )}
