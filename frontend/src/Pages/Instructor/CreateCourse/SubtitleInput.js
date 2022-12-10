import React from 'react'
import { Link } from 'react-router-dom'
import AddSubtitleDiv from './AddSubtitleDiv'
import './MultipleZeft.css'

const SubtitleInput = (props) => {
    const SubtitleInput = [{SubtitleHours},{videolink},{VideoDescription},{Question},{MaxGrade},{Choice1},{Choice2},{Choice3},{Choice4},{CorrectAnswer}]
    var usersDiv = [];
    for (var i = 0; i < SubtitlesNum; i++) {
        var temp = (
                <div>
                    {<AddSubtitleDiv DivID={i}/>}
                </div>);
        usersDiv.push(temp);
    }  


  return (
    <div className='ZeftcssDiv'>
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