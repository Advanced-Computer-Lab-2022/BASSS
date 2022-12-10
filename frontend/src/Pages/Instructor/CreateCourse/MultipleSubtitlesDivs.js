import React from 'react'
import { Link } from 'react-router-dom'
import AddSubtitleDiv from './AddSubtitleDiv'
import './MultipleZeft.css'

const MultipleSubtitleDivs = (props) => {
    const Subtitles = new Array(props.SubtitleNum)

    const getSubtitles = (i) =>{
        return 
    }

    const SubtitlesNum = props.SubtitlesNum
    var usersDiv = [];

    for (var i = 0; i < SubtitlesNum; i++) {
      //  var ExID = 
        var temp = (
                <div>
                    <br></br>
                    {<AddSubtitleDiv createSubtitle = {props.createSubtitle} CreateExcercise = {props.CreateExcercise} GetExcercise = {props.GetExcercise} createSubtitleProp = {props.createSubtitleProp} CreateExcerciseProp = {props.CreateExcerciseProp} DivID={i} CreateButton={props.CreateButton} Title={props.Title} InstructorName={props.InstructorName}/>}
                    <br></br>
                </div>);
        usersDiv.push(temp);
    }  

{/* Subtitles = new Array(SubtitleNum) 

        for(let i=0; i < SubtitleNum; i++ ){
            CreateExcercise()
            var ExcerciseID = (await GetExcercise().data._id)
            Subtitles[SubtitleNum][0] = SubtitleHours
            Subtitles[SubtitleNum][1] = videolink
            Subtitles[SubtitleNum][2] = VideoDescription
            Subtitles[SubtitleNum][3] = ExcerciseID
}*/}

  return (
    <div className='AllSubtitlesDiv'>
        {usersDiv}
    </div>
  )
}

export default MultipleSubtitleDivs




// render () {
//     var users = this.state.users,
//     var usersDiv = [];
//     for (var i = 0; i < users.length; i++) {
//         var temp = (<div>{users[i]}</div>);
//         usersDiv.push(temp);
//     }
//     return(
//       <div>
//          {usersDiv}
//       </div>)
//     }