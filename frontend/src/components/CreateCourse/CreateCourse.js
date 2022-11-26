import React from 'react'
import './CreateCourse.css'

function CreateCourse() {
  return (
    <div className='createcourse-body'>
        <input placeholder='Course Title' className='courseinputs'></input>
        <input placeholder='Course Subject' className='courseinputs'></input>
        <input placeholder='Total Hours' className='courseinputs'></input>
        <input placeholder='Course Price' className='courseinputs'></input>
        <input placeholder='Instructor Name' className='courseinputs'></input>
        <input placeholder='Video Preview Link' className='courseinputs'></input>
        <input placeholder='short summary' className='courseinputs'></input>
        <input placeholder='Certificate Template' className='courseinputs' ></input>
        <div className='subtitle'>
            <h1>Subtitles</h1>
            <input placeholder='Subtitle Hours' className='courseinputs'></input>
            <input placeholder='video link' className='courseinputs'></input>
            <input placeholder='Short Video Description' className=' courseinputs'></input>
            <input placeholder='ExerciseID' className='courseinputs'></input>

        </div>

    </div>
  )
}

export default CreateCourse
