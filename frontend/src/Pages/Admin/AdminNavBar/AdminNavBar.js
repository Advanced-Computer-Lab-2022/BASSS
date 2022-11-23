import React from 'react';
import NavBarGeneric from '../../../components/NavBarComponent/NavBarGeneric';

export default function AdminNavBar(){
    return <div>
    <NavBarGeneric h1='Home' firstElement='My Profile' secondElement='Reports' thirdElement='Add User' fourthElement='Courses' button='Logout' 
    Lh1='/Sara' L1='/AdminProfile' L2='/Reports' L3='/AddUsers' L4='/CoursesAdmin'/>;
    </div>
}
