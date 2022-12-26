import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../Pages/Admin/Admin.css'
import CoReqDetailsDiv from './CoReqDetailsDiv';

const MultipleCoReqDiv = (props) => {
    var AllCoReqs = [1,2,3,4,5]
    AllCoReqs = props.AllCoReqs
    var usersDiv = [];

    for (var i = 0; i < AllCoReqs.length; i++) {
      if(AllCoReqs[i].Status === 'Unseen'){
        var temp = (
                  <div>
                      <br></br>
                      {<CoReqDetailsDiv CoReqID = {AllCoReqs[i]._id} SelectedCourseshandlerProp={props.SelectedCourseshandlerProp} SelectedCoursesProp={props.SelectedCoursesProp}/>}
                      <br></br>
                  </div>);
          usersDiv.push(temp);
      }
    }  

    for (var i = 0; i < AllCoReqs.length; i++) {
      if(AllCoReqs[i].Status !== 'Unseen'){
        var temp = (
                  <div>
                      <br></br>
                      {<CoReqDetailsDiv CoReqID = {AllCoReqs[i]._id} SelectedCourseshandlerProp={props.SelectedCourseshandlerProp} SelectedCoursesProp={props.SelectedCoursesProp}/>}
                      <br></br>
                  </div>);
          usersDiv.push(temp);
      }
    }  

    return (
        <div>
                {usersDiv}
        </div>
      )
    }
    
    export default MultipleCoReqDiv

    //CourseID = {AllCoursesArray[i]}