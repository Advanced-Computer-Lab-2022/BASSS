import React, { useState } from 'react'
import './Promotion.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Promotion() {
const[title,settitle] = useState([])
const[percentage,setpercentage] = useState('')
const[enddate,setenddate] = useState('')

const titlehandler =(e)=>{
    settitle(e.target.value)
}
const percentagehandler =(e)=>{
    setpercentage(e.target.value)
}
const enddatehandler =(e)=>{
    setenddate(e.target.value)
}

    const clickhandler= ()=>{
        FindTitleAndUpdate();
        alert('promotion applied')
    }
    const FindTitleAndUpdate = async()=>{
        await axios.get(`http://localhost:9000/course/FindTitleAndUpdate/${title}/${percentage}/"${enddate}"`)
    }
  return (
    <div className='promotion-body'>
        <input placeholder='please enter the course title ..' className='promotion-details' onChange={titlehandler}></input>
        <input placeholder='promotion percentage ?' className='promotion-details' onChange={percentagehandler}></input>
        <input placeholder='end date of the discount' className='promotion-details' onChange={enddatehandler}></input>
        <Link to ="/instructor">
        <button className='promotion' onClick={clickhandler}> submit</button>
        </Link>
    </div>
  )
}

export default Promotion
