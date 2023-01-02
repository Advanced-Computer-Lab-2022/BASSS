import React from 'react'
// import IndividualTraineeNavBar from '../IndividualTraineeNavBar/IndividualTraineeNavBar'
import CorporateTraineeNavBar from '../CorporateTraineeNavBar/CorporateTraineeNavBar';
import { useState, useEffect } from '../../../../node_modules/react/cjs/react.development';
import axios from 'axios';
import className from '../../../../node_modules/@sinonjs/commons/lib/class-name';
import '../../IndividualTrainee/ViewAllCourses/TraineeViewAllCourses.css'
import SalamaNewCourse from '../../../components/NewCourseDiv/SalamaNewCourse';
import { useNavigate } from '../../../../node_modules/react-router-dom/dist';
import '../../../components/Search/Search.css';
import Search from '../../../components/Search/Search';
import '../../../components/NewCourseDiv/SearchAll.css';
import SearchAll from '../../../components/NewCourseDiv/SeachAll';

function CorpTrainee() {
    const[courses,setCourses]=useState([]);
    const[coursesFiltered,setCoursesFiltered]=useState(null);
    
    const [Country, setCountry] = useState('');

    const [countryNumber,setCountryNumber]=useState();
    
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
       
            await axios.get(`http://localhost:9000/course/`).then(
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
    <div className="TraineeAllCourses">
        <div>
      <CorporateTraineeNavBar  setCountry = {setCountry} />
        </div>
        <div> 
        <SearchAll Type='indvidual' setCourses={setCoursesFiltered}  />

            </div>
      <div className="TraineeAllCourses_Details1">
            <h1 style={{color:'rgb(3, 48, 76)'}}>All Courses</h1>

        {courses.map((course) => <SalamaNewCourse course={course} country={countryNumber} Trainee={true}/>)}
        
      </div>
    </div>
  )
}

export default CorpTrainee
