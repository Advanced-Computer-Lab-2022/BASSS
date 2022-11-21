import React from 'react'
import './Guest.css'
import { IconName } from "react-icons/ai";
import {AiOutlineSearch} from 'react-icons/ai'

const Guest = () => {
  return (
    <div >
      <div className='land'>
        <h4>
          I HAVE LEARNED THAT I STILL HAVE A LOT TO LEARN 
        </h4>

        <form className="form">
            <div>
                <input type="text" placeholder="Enter Course name"/>
            </div>
        <div>
            <button><AiOutlineSearch className='icon'/></button>
        </div>
        </form>

      </div>

    </div>
  )
}

export default Guest  

