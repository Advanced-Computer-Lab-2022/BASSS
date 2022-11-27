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
//import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';

//import { AxiosResponse, AxiosError } from 'axios'


var ErrorVisibility = '1'

export default function AddAdmin(){
    const [meow,setMeow] = useState(false);
    const handleMeow = () => { setMeow(!meow)} ;


    const [username , setusername] = useState([])
    const [password , setpassword] = useState([])
    
    const usernamehandler = (event)=>{
        setusername(event.target.value)
    }

    const passwordhandler = (event)=>{
        setpassword(event.target.value)

    }

    const adduserhandler = ()=>{
        // alert(username)
        adduser()
        //error()
    }

    const error = () => {
        alert('alertttt');
      // return ErrorVisibility = '0'
    }

    const getAdmin = async(req,res)=>{
        await axios.get(`http://localhost:9000/admin/getAdmin/${username}`)

    }
    const addAdmin = async(req,res)=>{
       return (await (await axios.get(`http://localhost:9000/admin/addAdmin/${username}/${password}`)).res.status)
       // return res.status;
    }
    const adduser = async (req,res)=>{
        addAdmin()
    //    if(addAdmin() === '400'){handleMeow()}
    }
    // const user = addAdmin().catch(function (error) {if (error.response.status === "400"){handleMeow()}else{addAdmin()}});
    

    return <Body>
        <AdminNavBar/>
        <div>
        <br></br>        <br></br> <br></br> <br></br>    
        </div>
        <div className='Admin_AddUsers_Div'>
        <input type='text' placeholder='User Name' className='Admin_AddUsers_TextBox' name="adminUserName" onChange={usernamehandler}></input>
            <br></br>
            <br></br>
        <input type='password' placeholder='Password' className='Admin_AddUsers_TextBox' name="adminPassword" onChange={passwordhandler}></input>
        <Link to='/AdminAddUsers'>
        <button className='Admin_AddUsers_btn' onClick={adduserhandler}>Add</button></Link>
        </div>
        <br></br>  <br></br> 
        <div>
        <Link to='/AdminAddInstructor' >
            <Button>
            Add Instructor
            </Button>
        </Link>
        </div>
        <br></br>  <br></br> 
        <div>
        <Link to='/AdminAddCoTrainee'>
            <Button>
            Add Corporate Trainee
            </Button>
        </Link>
        </div>
  <div>
      {!meow && <h1> </h1>}
      {meow && <h1>The besbes in not meowing</h1>}
      </div>

    </Body>

}
