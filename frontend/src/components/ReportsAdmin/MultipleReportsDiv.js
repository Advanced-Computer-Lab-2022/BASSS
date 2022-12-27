import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../Pages/Admin/Admin.css'
import ReportDetailsDiv from './ReportDetailsDiv';

const MultipleReportsDiv = (props) => {
    var Reports = [1,2,3,4,5]
    Reports = props.Reports
    var usersDiv = [];

    for (let i = 0; i < Reports.length; i++) {
      if(Reports[i].Status === 'Unseen'){
        var temp = (
                  <div>
                      <br></br>
                      {<ReportDetailsDiv ReportID = {Reports[i]._id}/>}
                      <br></br>
                  </div>);
          usersDiv.push(temp);
      }
    }  

    for (let i = 0; i < Reports.length; i++) {
        if(Reports[i].Status !== 'Unseen'){
            var temp = (
                  <div>
                      <br></br>
                      {<ReportDetailsDiv ReportID = {Reports[i]._id}/>}
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
    
    export default MultipleReportsDiv

    //CourseID = {AllCoursesArray[i]}