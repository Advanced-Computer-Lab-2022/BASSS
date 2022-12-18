import React from 'react'
import { Link } from 'react-router-dom'
import './Contract.css'
function Contract() {
    
  return (
    <div className='termsbody' > 

<h1 className='termshead'>Contract</h1>
<h2 className='termssub'>This is to inform you that you have to accept the contract which includes all the rights to the posted videos and materials as well as the % taken by the company on each video per registered trainee</h2>

<Link to ="/instructor">
        <button className='terms-btn'> I accept</button>
        </Link>
    </div>
  )
}

export default Contract