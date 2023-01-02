import axios from "axios";
import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import '../Courses/IndividualCourses.css'
import '../Login/Login.css'
import '../../Pages/Instructor/Instructor.css'
import InstructorNavBar from "../../Pages/Instructor/InstructorNavBar/InstructorNavBar";

import '../Search/Search.css'
const InstructorMyCourses = (props) =>{

    const [myCourses,setMyCourses] = useState([])
    const [message,setmessage] = useState('');
    const [error,setError] = useState('')

    const changehandler = (event) =>{
        setmessage(event.target.value)
    }


    // const getMyCourses = async () => {
    //     await axios.get(`http://localhost:9000/course/my/salama/empty/empty`).then(
    //         (res) => { 
    //             setMyCourses(res.data)
    //         }
    //     );
    // }

    const search = async() => {
        try {
            await axios.get(`http://localhost:9000/instructor/searchmycourses/${message}`).then(
                (res)=> {
                    setMyCourses(res.data)
                }
            )
        }
        catch (error) {
            setError(error.response.data)
        }

    }

    useEffect(async () => {
        await axios.get(`http://localhost:9000/course/my/salama/empty/empty`).then(
            (res) => { 
                setMyCourses(res.data)
            }
        );
    }, [])


    // getMyCourses()
    const navigate = useNavigate()
    return(
        <div className='Instructor-body2'>
        <InstructorNavBar/>

        <div class="search-box">
        <button class="btn-search" onClick={search}><i class="fas fa-search"></i></button>
        <input type="text" class="input-search" onChange={changehandler} placeholder="Type to Search..."></input>
        </div>


        <div className='zoz1'>
        
        {myCourses.map((mycourse)=>(
          <div class="plan-card">
          <h2>{mycourse.Title}<span>{mycourse.Subject}</span></h2>
          <div class="etiquet-price">
              <p>Total Hours :{mycourse.TotalHours} </p>
              <div></div>
          </div>
  
          <div class="benefits-list">
              <ul>
                  <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                      </svg><span>objectives : {mycourse.ShortSummary}</span></li>
                  <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                      </svg><span>Interacting</span></li>
                  <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                      </svg><span>Course Rate : {mycourse.Rating.rate}</span></li>
              </ul>
          </div>
          <div class="button-get-plan">
              <button className='opencourse-adham' onClick={()=> navigate(props.Link, {state:[mycourse._id,mycourse.InstructorUserName]} )}>
                
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-rocket">
                      <path d="M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9zM384 167.1C406.1 167.1 424 150.1 424 127.1C424 105.9 406.1 87.1 384 87.1C361.9 87.1 344 105.9 344 127.1C344 150.1 361.9 167.1 384 167.1z"></path>
                  </svg>
                  <span>Open Course</span>
              </button>
          </div>
      </div>
        ))}
        </div>
    </div>
  
    )
}

export default InstructorMyCourses;