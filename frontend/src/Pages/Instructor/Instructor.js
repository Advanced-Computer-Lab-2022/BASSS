import '../../App.css'
import SelectCountry from '../../components/SelectCountry/SelectCountry';
import { Link } from 'react-router-dom'
import './Instructor.css'
import Courses from '../../components/Courses/Courses';
import editmyInfo from '../../components/EditmyInfo/EditmyInfo';
import Forgetpass from '../../components/Forgetpass/Forgetpass';
import Search from '../../components/Search/Search';
import MyCourses from '../../components/MyCourses/MyCourses';
import InstructorNavBar from './InstructorNavBar/InstructorNavBar';
import ViewRating from '../../components/ViewRating/ViewRating';
import { useState } from 'react';
import InstructorProfile from '../../components/Profiles/InstructorProfile';
import Login from '../../components/Login/Login';
import InstructorMyCourses from '../../components/MyCourses/InstructorMyCourses';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InstructorViewAllCourses from './InstructorViewAllCourses/InstructorViewAllCourses';


function Instructor(){
    const [profile,setProfile] =useState(false);
    const [myCourses,setMyCourses] = useState([])


    const profileHandler = () => {
        setProfile(!profile)
    }


    const getMyCourses = async () => {
        await axios.get(`http://localhost:9000/course/my/salama/empty/empty`).then(
            (res) => { 
                setMyCourses(res.data)
            }
        );
    }

    const navigate = useNavigate()
    return(
        <>
        <div className='Instructor-body'>
        <InstructorNavBar profileHandler={profileHandler}/>
        {profile && <InstructorProfile/>}
        {!profile &&
        <div>

            <InstructorViewAllCourses/>

            {/* </div>
        <div> */}
            {/* <div class="mostpop-card-adham">
                <div class="mostpop-card-adham-details">
                    <p class="text-title">Most Popular Courses</p>
                    <p class="text-body"> there are more than 50K trainee have completed these courses</p>
                </div>
                <Link to="/mostViewd">
                    <button class="mostpop-card-adham-button">View Courses</button>
                </Link>
            </div> */}

        </div>
        }


        </div>
        </>
    )
}
export default Instructor;