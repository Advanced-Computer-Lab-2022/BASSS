import React from 'react';
// import NavBarGeneric from '../../../components/NavBarComponent/NavBarGeneric';
import AdminNavBar from '../AdminNavBar/AdminNavBar';
import ReportDetails from './ReportDetails';

export default function Reports(){
    return <div className='Admin_Body'>
        <AdminNavBar/>
        <br></br>
        <div>
        <br></br><br></br><br></br><br></br><br></br>
            <h1 className='h1_Admin_Reports'> Reports </h1>
            <div></div>
        </div>
        <ReportDetails/>
    </div>
}