import React, { useState } from 'react';

import './AddUsers.css';

//import NavBarGeneric from '../../../components/NavBarComponent/NavBarGeneric';
import AdminNavBar from '../AdminNavBar/AdminNavBar';
import { Link } from 'react-router-dom';
import {
  Button,
  Body
} from './AddUsersCss';
import axios from 'axios';


export default function AddCoTrainee(){

    const [username , setusername] = useState([])
    const [password , setpassword] = useState([])
    
    const usernamehandler = (event)=>{
        setusername(event.target.value)
    }

    const passwordhandler = (event)=>{
        setpassword(event.target.value)

    }

    const adduserhandler = ()=>{
        adduser()
    }

    const addaddCoTrainee = async(req,res)=>{
       return (await (await axios.get(`http://localhost:9000/admin/addCoTrainee/${username}/${password}`)).res.status)
    }
    const adduser = async (req,res)=>{
        addaddCoTrainee()
    }
    return <Body>
        <AdminNavBar/>
        <div>
        <br></br>        <br></br>        <br></br>        
        </div>
        <div>
        <Link to='/AdminAddAdmin' >
            <Button>
                Add Admin
            </Button>
        </Link>
        </div>
        <br></br>        <br></br>
        <div>
        <Link to='/AdminAddInstructor' >
            <Button>
            Add Instructor
            </Button>
        </Link>
        </div>
        <br></br>        <br></br>
        <div className='Admin_AddUsers_Div'>
        <input type='text' placeholder='User Name' className='Admin_AddUsers_TextBox' name="coTraineeUserName" onChange={usernamehandler}></input>
            <br></br>
            <br></br>
        <input type='password' placeholder='Password' className='Admin_AddUsers_TextBox' name="coTraineePassword" onChange={passwordhandler}></input>
        
        <Link to='/AdminAddUsers'>
        <button className='Admin_AddUsers_btn' onClick={adduserhandler}>Add</button></Link>
        </div>

    </Body>

}
