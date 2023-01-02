import React from 'react'
import axios from 'axios';
import ProgressBar from '../ProgressBar/ProgressBar';
import './IndividualCourses.css';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';  
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
const { useState, useEffect } = require("react");

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      
    },
  }));

 
 function CorporateTraineeCourses(props) {
    const [mycourses,setmycourses] = useState([]);
    const CorporateTusername = 'sarasaad2001'
    const getmycourses = async()=>{
        await axios.get(`http://localhost:9000/corporateTrainee/CorporateCourses/${CorporateTusername}`).then(
            (res) => { 
                const result = res.data
                setmycourses(result)
            }
             );
    }

    const deleteCourse = async (e)=>{
      const id = e.target.getAttribute("id")
      alert('PS: to unroll , your course Progress must be less than 50 % ! ')
      confirmAlert({
        title: 'Confirm to unroll',
        message: 'Are you sure ?',
        buttons: [
          {
            label: 'Yes',
            onClick: async () => {      
            await axios.get(`http://localhost:9000/corporateTrainee/unroll_from_course/${CorporateTusername}/${id}`)
            }
          },
          {
            label: 'No',
            //onClick: () => alert('Click No')
          }
        ]
      });


    }
    getmycourses()
    const navigate = useNavigate()
   return (
     <div>
            {/* <h1 className='indtracou-adham'>MY COURSES</h1>
            <br></br><br></br>
            <br></br><br></br>
      {mycourses.map((mycourse)=>(
                <div className='MyCourses-adham'>
                <h2 className='h1-adham'>Course Progress </h2>
                <ProgressBar bgcolor="blue" progress={`${mycourse[1]}`}  height={20}/>
                <br></br><br></br>
                <h1 className='h1-adham'>Course Title : {mycourse[0].Title}</h1>
                <h1  className='h1-adham'>Course Total Hours : {mycourse[0].TotalHours}</h1>
                <h1  className='h1-adham'>Course Price : {mycourse[0].Price}</h1>
                <h1  className='h1-adham'>Course Rating : {mycourse[0].Rating.rate}</h1>
                <br></br><br></br>
                <h2 className='h1-adham'>in this Course you will learn : {mycourse[0].ShortSummary}</h2>
                <br></br><br></br>
                  <button className='opencourse-adham' onClick={()=> navigate(props.Link, {state:[mycourse[0]._id,mycourse[0].InstructorUserName]} )}>Open Course</button>
                  <br></br><br></br>
                  <button className='opencourse-adham' onClick={deleteCourse} id={mycourse[0]._id}> UNROLL !</button>                
            </div>
      ))} */}


<br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
      <h1 className='indtracou-adham  '>MY COURSES</h1>
      <br></br><br></br><br></br>
      {mycourses.map((mycourse)=>(
        <div class="plan-card">
        <h2>{mycourse[0].Title}<span>{mycourse[0].Subject}</span></h2>
          <ProgressBar bgcolor="  rgb(72, 31, 159)" progress={`${mycourse[1]}`}  height={24} />
        <div class="etiquet-price">
            <p>Total Hours :{mycourse[0].TotalHours} </p>
            <div></div>
        </div>

        <div class="benefits-list">
            <ul>
                <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                    </svg><span>objectives : {mycourse[0].ShortSummary}</span></li>
                <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                    </svg><span>Interacting</span></li>
                <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                    </svg><span>Course Rate : {mycourse[0].Rating.rate}</span></li>
            </ul>
        </div>
        <div class="button-get-plan">
            <button className='opencourse-adham' onClick={()=> navigate(props.Link, {state:[mycourse[0]._id,mycourse[0].InstructorUserName]} )}>
              
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-rocket">
                    <path d="M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9zM384 167.1C406.1 167.1 424 150.1 424 127.1C424 105.9 406.1 87.1 384 87.1C361.9 87.1 344 105.9 344 127.1C344 150.1 361.9 167.1 384 167.1z"></path>
                </svg>
                <span>Open Course</span>
            </button>
        </div>
    </div>
      ))}
      <h1 className='bestins-adham'>Our best Instructors</h1>
      <div className='adhooom'>
      <div class="card">
        <div class="card-info">
        <div class="card-avatar1"></div>
        <div class="card-title">Adham Saber</div>
        <div class="card-subtitle">Senior Developer &amp; Co-Founder</div>
        </div>
        <ul class="card-social">
        <li class="card-social__item">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
      </svg></li>
      <li class="card-social__item">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z"></path>
    </svg></li>
    <li class="card-social__item">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
      </svg>
    </li>
  </ul>
</div>


<div class="card">
        <div class="card-info">
        <div class="card-avatar"></div>
        <div class="card-title">Mohamed Salama</div>
        <div class="card-subtitle">Senior Developer</div>
        </div>
        <ul class="card-social">
        <li class="card-social__item">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
      </svg></li>
      <li class="card-social__item">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z"></path>
    </svg></li>
    <li class="card-social__item">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
      </svg>
    </li>
  </ul>
</div>

<div class="card">
        <div class="card-info">
        <div class="card-avatar"></div>
        <div class="card-title">Kariman Akram</div>
        <div class="card-subtitle">Data Analyst</div>
        </div>
        <ul class="card-social">
        <li class="card-social__item">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
      </svg></li>
      <li class="card-social__item">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z"></path>
    </svg></li>
    <li class="card-social__item">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
      </svg>
    </li>
  </ul>
</div>

<div class="card">
        <div class="card-info">
        <div class="card-avatar"></div>
        <div class="card-title">Sara Saad</div>
        <div class="card-subtitle">FullStack Developer</div>
        </div>
        <ul class="card-social">
        <li class="card-social__item">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
      </svg></li>
      <li class="card-social__item">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z"></path>
    </svg></li>
    <li class="card-social__item">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
      </svg>
    </li>
  </ul>
</div>
</div>
        <h1 className='recomm-adham'>My WorkSpace</h1>
        <div className='workspace-adham'>
          <h2>Code On Your Own </h2>
          <br></br>
          <h4>Create your first workspace to experiment {<br></br>}with what you're learning or build your own projects from scratch.</h4>
          <button className='newws-adham'>+ New WorkSpace</button>
        </div>
        <div class="AllCourses-card-adham">
  <div class="AllCourses-card-adham-details">
    <p class="text-title">All Courses</p>
    <p class="text-body"> Go deeper and learn job-ready skills.</p>
    <p class="text-body">Practice with real-world projects </p>
  </div>
  <Link to="/AllCourses">
  <button class="AllCourses-card-adham-button">View Courses</button>
  </Link>
</div>


        <div class="mostpop-card-adham">
  <div class="mostpop-card-adham-details">
    <p class="text-title">Most Popular Courses</p>
    <p class="text-body"> there are more than 50K trainee have completed these courses</p>
  </div>
  <Link to="/mostViewd">
  <button class="mostpop-card-adham-button">View Courses</button>
  </Link>
</div>


     </div>
   )
 }
 
 export default CorporateTraineeCourses
 