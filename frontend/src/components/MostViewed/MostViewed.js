import React from 'react'

import { useState, useEffect } from '../../../../node_modules/react/cjs/react.development';
import axios from 'axios';

import './InstructorViewAllCourses.css'
import NewCourse from '../../../components/NewCourseDiv/NewCourse';

import '../../../components/Search/Search.css';

import '../../../components/NewCourseDiv/SearchAll.css';
import SearchAll from '../../../components/NewCourseDiv/SeachAll';
import InstructorNavBar from '../InstructorNavBar/InstructorNavBar';
import InstructorProfile from '../../../components/Profiles/InstructorProfile';
import GuestNavBar from '../../Guest/GuestNavBar/GuestNavBar';

const MostViewed = (props) => {
    const[courses,setCourses]=useState([]);
    const[coursesFiltered,setCoursesFiltered]=useState(null);
    
    const [Country, setCountry] = useState('');

    const [countryNumber,setCountryNumber]=useState();

    const [profile,setProfile] =useState(false);


    const profileHandler = () => {
        setProfile(!profile)
    }


    
        useEffect(()=>{
            const handleCountryNumber = () =>{
                if(Country=="Egypt")
                setCountryNumber(0);
                else if(Country=="United Arab Emirates"){
                    setCountryNumber(2);
                }
                else if(Country=="United Kingdom"){
                    setCountryNumber(3);
                    
                }else if(Country=="Germany"||Country=="France"||Country=="Spain"||Country=="Portugal"||Country=="Italy"||Country=="Netherlands"||Country=="Belgium"){ 
                  setCountryNumber(4) ;       
             }else
                {
                setCountryNumber(1);
                }
            }
            handleCountryNumber();
        },[Country]);

    const GetCourses = async(req,res)=>{
       
            await axios.get(`http://localhost:9000/course/allcourses/mostViewedSara`).then(
                (res) => {
                    const result = res.data
                 
                    setCourses(result);
                })
       
    }

    useEffect(()=>{
        async function getCourses(){
            if(!coursesFiltered){   
     
                await GetCourses();
            }else{
                setCourses(coursesFiltered);
            }
          }
          getCourses();
        },[courses,coursesFiltered]
    );
       
  return (
    <div className="InstructorAllCourses">
        {!props.G && <div>
            <InstructorNavBar profileHandler={profileHandler} setCountry = {setCountry} />
            {profile && <InstructorProfile/>}
        </div>}
        {props.G && <div> <GuestNavBar/> </div>}
    {!profile &&
    <div>

        <div> 
        <SearchAll Type='indvidual' setCourses={setCoursesFiltered}  />

            </div>
      <div className="InstructorAllCourses_Details1">
            <h1 style={{color:'rgb(3, 48, 76)'}}>All Courses</h1>

        {courses.map((course) => <div style={{position:'relative'}}>
             <NewCourse course={course} country={countryNumber} Instructor={true}/> 
        </div>)}
        
      </div>
      </div>
}
    </div>
  )
}
// Type={props.Type}
export default MostViewed
