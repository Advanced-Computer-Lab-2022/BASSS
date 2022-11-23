import React from 'react';
//import NavBarGeneric from '../../../components/NavBarComponent/NavBarGeneric';
import AdminNavBar from '../AdminNavBar/AdminNavBar';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Button,
  Body,
  ButtonLink
} from './AddUsersCss';

export default function AddUsers(){
    return <Body>
        <AdminNavBar/>
        <div>
            <Button>
            <ButtonLink to='/sarasaad'>Ana hena</ButtonLink>
            </Button>
        </div>

    </Body>

}
