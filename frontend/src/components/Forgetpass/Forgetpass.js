import axios from 'axios';
import React from 'react'
import './Forgetpass.css'
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


 
const { useState, useEffect } = require("react");

  const Forgetpass = (props) => {

  //  const totalpath = window.location.pathname;
   // var mysubstring = totalpath.substring(totalpath.indexOf("/")+1 , totalpath.lastIndexOf("/"))
const type= props.Type
   
    const forget =  async () => {
        await axios.get(`http://localhost:9000/${choice3}/forgetpass/${choice}/${choice2}`).then(
            (res) => { 
                alert('check your mail')
            }
            
             );
    }
    var [choice,setchoice] = useState([]);
    var [choice2,setchoice2] = useState([]);
    var [choice3,setchoice3] = useState([]);
    const clickhandler4 = ()=>{
        forget()
        alert('check your mail:) ')
       }
       const changehandler =  async(e)=>{
        setchoice(e.target.value);
     }
     const changehandler2 =  async(e)=>{
      setchoice2(e.target.value);
   }
   const changehandler3 =  async(e)=>{
    setchoice3(e.target.value);
 }
  

    return(

        <div className='forget-textbox1'>
            <div onChange={changehandler3}>
        <input type="radio" value="IndividualTrainee" name="IndividualTrainee" /> IndividualTrainee
        <input type="radio" value="CorporateTrainee" name="CorporateTrainee" /> CorporateTrainee
        <input type="radio" value="Instructor" name="Instructor" /> Instructor
      </div>
            <input className='info-textbox1' placeholder='Username' onChange={changehandler} value={choice}/>
            <input className='info-textbox1' placeholder='email' onChange={changehandler2} value={choice2}/>
            <button  onClick={clickhandler4}> forget password</button>
   
   
    </div>  
  
    )
    }
export default Forgetpass;