import React from 'react';
// import NavBarGeneric from '../../../components/NavBarComponent/NavBarGeneric';
import AdminNavBar from '../AdminNavBar/AdminNavBar';
import ReportDetails from './ReportDetails';

export default function Reports(){
    return <div className='Admin_Body'>
        <div>
            <AdminNavBar/>
        </div>
        <br></br>
        <div>
            <h1 className='h1_Admin_Reports'> Reports </h1>
        </div>
        <div className='Admin_ReportsPage_CoursesDiv'>

            
        </div>
    </div>
}