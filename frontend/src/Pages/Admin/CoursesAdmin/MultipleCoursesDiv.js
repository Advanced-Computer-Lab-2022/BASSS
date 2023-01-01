import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Admin.css';
import CourseDetilsDivAdmin from './CourseDetilsDivAdmin';

const MultipleCoursesDiv = (props) => {
    var AllCoursesArray = [1,2,3,4,5]
    AllCoursesArray = props.AllCoursesArrayProp
    var usersDiv = [];

    for (var i = 0; i < AllCoursesArray.length; i++) {
      //  var ExID = 
        var temp = (
                <div>
                    <br></br>
                    {<CourseDetilsDivAdmin CourseID = {AllCoursesArray[i]._id} SelectedCourseshandlerProp={props.SelectedCourseshandlerProp} SelectedCoursesProp={props.SelectedCoursesProp}/>}
                    <br></br>
                </div>);
        usersDiv.push(temp);
    }  


    return (
        <div>
                {usersDiv}
        </div>
      )
    }
    
    export default MultipleCoursesDiv

    //CourseID = {AllCoursesArray[i]}