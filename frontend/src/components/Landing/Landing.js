import React from 'react'
import { Button } from '../Button/Button'
import './Landing.css'
import '../../App.css'
import { Link } from 'react-router-dom'
function Landing() {
  return (
    <div className='Landing-container'>
        <video src="/videos/Landing-page.mp4" autoPlay loop muted/>
        <h1>I HAVE LEARNED THAT I STILL HAVE A LOT TO LEARN !</h1>
        <input placeholder='Search for a course ?' className='search'></input>
        <div className='Landing-btn'>
            {/* <Button 
            className = 'btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
                Search
            </Button> */}
            <Link to='/search'>
            <button className='search-btn'>Search</button>
            </Link>
        </div>
    </div>
  )
}

export default Landing
