import React from 'react';
//import NavBarGeneric from '../../../components/NavBarComponent/NavBarGeneric';
import AdminNavBar from '../AdminNavBar/AdminNavBar';
import { Link } from 'react-router-dom';
import {
  Button,
  Body,
} from './AddUsersCss';

export default function AddUsers(){
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
        <div>
        <Link to='/AdminAddCoTrainee'>
            <Button>
            Add Corporate Trainee
            </Button>
        </Link>
        </div>

    </Body>

}
