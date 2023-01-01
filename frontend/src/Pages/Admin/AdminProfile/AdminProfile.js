import React from 'react';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
//import NavBarGeneric from '../../NavBarComponent/NavBarGeneric';
import AdminNavBar from '../AdminNavBar/AdminNavBar';

var saravar = '0';

export default function AdminProfile(){
    saravar = '1'
    return <div>
        <AdminNavBar/>
        <ErrorMessage sara={saravar}/>
    </div>
}

