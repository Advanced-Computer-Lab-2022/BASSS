import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../Pages/Admin/Admin.css'
import ReportDetailsDiv from './ReportDetailsDiv';

const MultipleReportsDiv = (props) => {
    var Reports = [1,2,3,4,5]
    Reports = props.Reports
    var usersDiv = [];
    var Refund =props.RefundRequests

    if(props.Type !== 'Refund'){
      for (let i = 0; i < Reports.length; i++) {
        if(Reports[i].Type === props.Type){
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
      }  

      for (let i = 0; i < Reports.length; i++) {
        if(Reports[i].Type === props.Type){
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
      }  
    }

    else if(props.Type === 'Refund'){
      for (let i = 0; i < Refund.length; i++) {
          if(Refund[i].Status === 'Unseen'){
            var temp = (
                      <div>
                          <br></br>
                          {<ReportDetailsDiv  Refund = {Refund} Type='Refund'/>}
                          <br></br>
                      </div>);
              usersDiv.push(temp);
          }
      }  

      for (let i = 0; i < Refund.length; i++) {
            if(Refund[i].Status !== 'Unseen'){
                var temp = (
                      <div>
                          <br></br>
                          {<ReportDetailsDiv  Refund = {Refund} Type='Refund'/>}
                          <br></br>
                      </div>);
              usersDiv.push(temp);
          }
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