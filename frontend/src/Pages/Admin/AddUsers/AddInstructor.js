import React from 'react';
import './AddUsers.css';

//import NavBarGeneric from '../../../components/NavBarComponent/NavBarGeneric';
import AdminNavBar from '../AdminNavBar/AdminNavBar';
import { Link } from 'react-router-dom';
import {
  Button,
  Body
} from './AddUsersCss';

export default function AddInstructor(){
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
        <div className='Admin_AddUsers_Div'>
        <input placeholder='User Name' className='Admin_AddUsers_TextBox'></input>
            <br></br>
            <br></br>
        <input placeholder='Password' className='Admin_AddUsers_TextBox'></input>
        
        <button className='Admin_AddUsers_btn'>Add</button>
        </div>
        <br></br>        <br></br>
        <div>
        <Link to='/AdminAddCoTrainee'>
            <Button>
            Add Corporate Trainee
            </Button>
        </Link>
        </div>

    </Body>

}
