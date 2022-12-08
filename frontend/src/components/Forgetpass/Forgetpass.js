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


  const { useState, useEffect } = require("react");

  const forgetpass = (props) => {

  //  const totalpath = window.location.pathname;
   // var mysubstring = totalpath.substring(totalpath.indexOf("/")+1 , totalpath.lastIndexOf("/"))
const type= props.Type
    const forget =  async () => {
        await axios.get(`http://localhost:9000/${type}/forgetpass`).then(
            (res) => { 
                alert('check your mail')
            }
            
             );
    }
    const clickhandler4 = ()=>{
        forget()
        alert('check you mail:) ')
       }

  

    return(

        <div >
            

            <button  onClick={clickhandler4}> forget password</button>
   
   
    </div>  
  
    )
    }
export default forgetpass;