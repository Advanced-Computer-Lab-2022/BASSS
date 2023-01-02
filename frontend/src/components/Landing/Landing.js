import React from 'react'
import './Landing.css'
import '../../App.css'
import '../Search/Search'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='Landing-container'>
        <div className='Video_Sara_Landing'>
          <video src="/videos/Landing-page.mp4" autoPlay loop muted/>
          <div className='Video_Sara_Landing1'>
            <label className='H1_Sara_Landing1'>I HAVE LEARNED THAT </label>
            <br></br>
            <label className='H1_Sara_Landing2'>I STILL HAVE A LOT TO LEARN !</label>
          </div>
        </div>
        {/* <input placeholder='Search for a course ?' className='search'></input>
        <h1 className='land'>I HAVE LEARNED THAT I STILL HAVE A LOT TO LEARN !</h1>
        <input placeholder='Search for a course ?' className='search'></input>
        <div className='Landing-btn'>
            <Link to='/search'>
            <button className='search-btn'>Search</button>
            </Link>
        </div> */}
    </div>
  )
}


export default Landing