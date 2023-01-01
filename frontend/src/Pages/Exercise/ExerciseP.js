import '../../App.css'
// import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar';
import Exercise from '../../components/Exercise/Exercise';
import '../../components/Exercise/Exercise.css';
function ExerciseP(){
    return(
        <>
        <div className='exercise-body'>
        {/* <Navbar  FirstLinkText='Home' SecondLinkText='My Courses' ThirdLinkText='View Courses' FourthLinkText=''  
        ButtonLinkText='Logout' 
        LogoLinkTo='/Instructor' FirstLinkTo='/IndividualTrainee' SecondLinkTo='/IndividualTrainee0/MyCourses' ThirdLinkTo='/Courses' FourthLinkTo='' 
        ButtonLinkTo='/'/> */}

        <Exercise Type='corporate'/>

        </div>
        </>
    )
}
export default ExerciseP;