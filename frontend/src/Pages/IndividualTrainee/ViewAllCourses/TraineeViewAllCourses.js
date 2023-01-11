import React from 'react'
import IndividualTraineeNavBar from '../IndividualTraineeNavBar/IndividualTraineeNavBar'
import { useState, useEffect } from '../../../../node_modules/react/cjs/react.development';
import axios from 'axios';
import className from '../../../../node_modules/@sinonjs/commons/lib/class-name';
import './TraineeViewAllCourses.css'
import NewCourse from '../../../components/NewCourseDiv/NewCourse';
import { useNavigate } from '../../../../node_modules/react-router-dom/dist';
import '../../../components/Search/Search.css';
import Search from '../../../components/Search/Search';
import '../../../components/NewCourseDiv/SearchAll.css';
import SearchAll from '../../../components/NewCourseDiv/SeachAll';
import TraineeProfile from '../../../components/Profiles/TraineeProfile';
import { ButtonBlue } from '../../../GeneralCss';

function TraineeViewAllCourses() {
    const[courses,setCourses]=useState([]);
    const[coursesFiltered,setCoursesFiltered]=useState(null);
    
    const [Country, setCountry] = useState('');

    const [countryNumber,setCountryNumber]=useState();

    const [profile,setProfile] = useState(false);
    const [myCourses, setMyCourses] = useState([])


    const[mostViewed,setmostViewed]=useState([]);
    const[mostViewedFlag,setmostViewedFlag]=useState(false);

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
       
            await axios.get(`http://localhost:9000/allCourses`).then(
                (res) => {
                    const result = res.data
                 
                    setCourses(result);
                })       
    }

    const gethiscourses = async () => {
        await axios.get(`http://localhost:9000/individualTrainee/myCourses`).then(
            (res) => {
              setMyCourses(res.data)
            }
          )

    }

    useEffect(()=>{
        async function GetMyCourses() {
          await gethiscourses();
        }
         GetMyCourses();
      },[])


    const MostViewed = async(req,res)=>{
        await axios.get(`http://localhost:9000/course/allcourses/mostViewedSara`).then(
            (res) => {
                const result = res.data
                setmostViewed(result);
                setmostViewedFlag(!mostViewedFlag)
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
    <div className="TraineeAllCourses">
        <IndividualTraineeNavBar  setCountry = {setCountry} profileHandler={profileHandler}/>
        {profile && <TraineeProfile Who='individualtrainee'/>}
        {!profile &&
            <div> 
                <div className='SearchSaraAllCourses'> 
           {!mostViewedFlag && <SearchAll Type='indvidual' setCourses={setCoursesFiltered}  />}
        </div>
        <div style={{position:'absolute' , top:'11rem' , left: '77rem' , zIndex:'100'}}>
            <ButtonBlue onClick={MostViewed} font = "28" width = "10rem">{mostViewedFlag? "Return To All Courses": "View Most Popular Courses"}</ButtonBlue>
        </div>
      <div className="InstructorAllCourses_Details1">
            {!mostViewedFlag && <h1 style={{color:'rgb(3, 48, 76)'}}>All Courses</h1>}
            {mostViewedFlag && <h1 style={{color:'rgb(3, 48, 76)'}}>Top Courses</h1>}

                {/* <div className="TraineeAllCourses_Details1"> */}
                    {/* <h1 style={{color:'rgb(3, 48, 76)'}}>All Courses</h1>
                    {courses.map((course) => <NewCourse course={course} country={countryNumber} Trainee={true} My={myCourses.includes(course._id)}/>)} */}
            {/* </div> */}
            
        {mostViewedFlag? mostViewed.map((course) => 
        <div style={{position:'relative'}}>
             <NewCourse course={course} country={countryNumber} Trainee={true} My={myCourses.includes(course._id)}/> 
        </div>): courses.map((course) => <div style={{position:'relative'}}>
             <NewCourse course={course} country={countryNumber} Trainee={true} My={myCourses.includes(course._id)} /> 
        </div>)}
            </div>
        </div>
        }

    </div>
  )
}

export default TraineeViewAllCourses
