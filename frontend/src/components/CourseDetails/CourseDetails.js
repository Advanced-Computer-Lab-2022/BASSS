import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './CourseDetails.css';
import { Link } from 'react-router-dom'
import IndividualTraineeNavBar from '../../Pages/IndividualTrainee/IndividualTraineeNavBar/IndividualTraineeNavBar'
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed';
import Footer from '../Footer/Footer'
const { useState, useEffect } = require("react");

const CourseDetails = () => { 
    
    const location = useLocation();

    const [flag, setFlag] = useState(false); 
    const [flagType, setFlagType] = useState(false); 

    const [progressincrease,setprogressincrease] = useState(0)
    const progressincreaseHandler = (sara)=>{setprogressincrease(sara)} 
    useEffect(()=>{progressincreaseHandler(progressincrease)})

    const [courseRate,setCourseRate] = useState("");
    const [instructorRate,setInstructorRate] = useState("");

    const [rateCourse,setRateCourse] = useState([]);
    const [rateInstructor,setRateInstructor] = useState([]);
    
    var [course,setCourse] = useState([]);
    var [instructor,setInstructor] = useState([]);
    var [subtitle,setsubtitle] = useState([]);

    const [reports,setReports] = useState([]);

    var [choice,setchoice] = useState([]);
    var [choice2,setchoice2] = useState([]);
    var [choice3,setchoice3] = useState([]);
    var [choice4,setchoice4] = useState([]);

    const changehandler = (e)=>{
        setchoice(e.target.value);

    }
    const adham = (e)=>{
        setchoice(e.target.value);
    }

    const changehandler2 = (e)=>{
        setchoice2(e.target.value);
    }

    const changehandler3 = (e)=>{
        setchoice3(e.target.value);
    }

    const changehandler4 = (e)=>{
        setchoice4(e.target.value);
        setFlagType(false);
    }

    const changehandler5 = (e)=>{
        setchoice4(e.target.value);
        setFlagType(false);
    }

    const changehandler6 = (e)=>{
        setchoice4(e.target.value);
        setFlagType(false);
    }

    const clickhandler = ()=>{
        alert("Submission Done")
        getRateCourse();
    }
    const clickhandler2 = ()=>{
        alert("Submission Done")
        getRateInstructor();
    }
    const clickhandler3 = ()=>{
        setFlag(true);
    }
    const clickhandler4 = ()=>{
        if(choice4.length==0){
            setFlagType(true);
        }
        else
        {
        alert("Report Sent");
        reportCourse();
        setchoice4("");
        setFlag(false);
        setFlagType(false);

        }
    }

    const clickhandler5 = ()=>{
        setchoice4("");
        setFlag(false);
        setFlagType(false);

    }


    const totalpath = window.location.pathname;
    var mySubString = totalpath.substring(
      totalpath.indexOf("/") + 1, 
      totalpath.lastIndexOf("/")
    )
    const videoclickhandler = async()=>{
        alert('congratulation , you have finished the Video')
     //------------------------put instead of "nour" the username that soha will do ---------------------------------------------------
     if(mySubString==='corporatetrainee')
     {

         await axios.get(`http://localhost:9000/${mySubString}/updateprogresscorp/nour/${location.state[0]}`)
     }   
     else if (mySubString === 'individualtrainee')
     {
        await axios.get(`http://localhost:9000/${mySubString}/updateprogressind/kkkkk/${location.state[0]}`)
     }

             
    }

    
        const getRateCourse =  async () => {
            await axios.get(`http://localhost:9000/course/updateRate/${location.state[0]}/${choice}`).then(
                (res) => { 
                    const rateCourse = res.data
                    console.log(rateCourse)
                    setRateCourse(rateCourse)

                }
                );
            }

            const getRateInstructor =  async () => {
                await axios.get(`http://localhost:9000/instructor/updateRate/${location.state[1]}/${choice2}`).then(
                    (res) => { 
                        const rateInstructor = res.data
                        console.log(rateInstructor)
                        setRateInstructor(rateInstructor)
    
                    }
                    );
                }    
        
        const getCourse =  async () => {
            await axios.get(`http://localhost:9000/course/getCourse/${location.state[0]}`).then(
                (res) => { 
                    const course = res.data
                    console.log(course)
                    setCourse(course)
                    setCourseRate(course.Rating.rate)
                }
                );
            }

            const getInstructor =  async () => {
                await axios.get(`http://localhost:9000/instructor/getInstructor/${location.state[1]}`).then(
                    (res) => { 
                        const instructor = res.data
                        console.log(instructor)
                        setInstructor(instructor)
                        setInstructorRate(instructor.Rating.rate)
                    }
                    );
                }  

                const getSubtitle =  async () => {
                    await axios.get(`http://localhost:9000/course/adham/getsubtitle/${location.state[0]}`).then(
                        (res) => { 
                            const sub = res.data
                            setsubtitle(sub)
                            // alert(subtitle)
                        }
                        );
                    }  

                    const reportCourse = async ()=>
                    {
                        if(choice3.length == 0)
                        {
                        await axios.get(`http://localhost:9000/admin/createReport/hazem123/${location.state[0]}/${choice4}/Empty`).then(
                            (res) => { 
                                const report = res.data
                                console.log(report)
                                setReports(report)
                            });
                        }
                        else{
                            await axios.get(`http://localhost:9000/admin/createReport/hazem123/${location.state[0]}/${choice4}/${choice3}`).then(
                            (res) => { 
                                const report = res.data
                                console.log(report)
                                setReports(report)
                            });
                        }
                        }

                    //     const reportCourse2 = async ()=>
                    // {
                    //     await axios.get(`http://localhost:9000/admin/createReport/adham123/${location.state[0]}/${choice5}`).then(
                    //         (res) => { 
                    //             const report = res.data
                    //             console.log(report)
                    //             setReports(report)
                    //         });
                    //     }
                    

getCourse();
getInstructor();
getSubtitle();
// alert(subtitle[0])
    return(
        <>
        <div className='CourseDetails-body'>
        <IndividualTraineeNavBar/>

        <div class="adhaminfo">

    <div class="adhaminfo-top">
        <p class="adhaminfo__title">{course.Title}</p>
        <div class="rating">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M8.51948 1.625C9.1214 1.625 10.0427 4.16625 10.4636 5.43013C10.6014 5.8437 10.9837 6.13054 11.4192 6.14904C12.7373 6.20505 15.375 6.39722 15.375 7.0384C15.375 7.66696 13.5161 9.17543 12.5322 9.92976C12.1816 10.1986 12.0365 10.6604 12.1687 11.082C12.5631 12.34 13.2755 14.8755 12.7573 15.3009C12.2506 15.717 10.2147 14.2326 9.15246 13.4009C8.77021 13.1016 8.22949 13.1012 7.84719 13.4004C6.78473 14.2321 4.75246 15.717 4.28166 15.3009C3.79912 14.8745 4.47615 12.3275 4.84741 11.0727C4.97086 10.6555 4.82425 10.2029 4.47885 9.93826C3.49798 9.18681 1.625 7.66933 1.625 7.0384C1.625 6.3962 4.2711 6.20444 5.5871 6.14878C6.0197 6.13048 6.3998 5.84769 6.53973 5.43793C6.97041 4.17673 7.91633 1.625 8.51948 1.625Z" fill="#00B9AE" stroke="#00B9AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </div>
    </div>

    <div class="adhaminfo__info">
        <p class="Course_rate_adham">{courseRate}</p>
        <h2 class="Ratings_adham1">14,123 Rating</h2>
        <div class="adham_image"></div>
        <p class="adham">Instructor : Adham Saber</p>
        <p class="total_hours_adham">Total Hours For the Course : {course.TotalHours}</p>
        <p class="views_adham">{course.Views} People Have Viewed This Course !</p>
    </div>

<div class="loader loader1">
  <div>
    <div>
      <div>
        <div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="loader loader2">
  <div>
    <div>
      <div>
        <div>
          <div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="loader loader3">
  <div>
    <div>
      <div>
        <div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="loader loader4">
  <div>
    <div>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<h2 className='offer-adham'>Offered By</h2>
<div className='uni_img'>
</div>
<div class="rate_adham">
    <h2 >Would you like to rate the course ?</h2>
    <div class="rate">
    <input onChange={adham} type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input onChange={adham} type="radio" id="star4" name="rate" value="4" />
    <label  for="star4" title="text">4 stars</label>
    <input onChange={adham} type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input onChange={adham} type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input onChange={adham} type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </div>
  <button onClick={clickhandler}>Submit</button>
</div>
    {/* <div class="adhaminfo__btns">
        <button class="add-btn">+</button>
        <button class="watch-btn">watch</button>
    </div> */}
</div>
<div className='subtitles'>
</div>

{/* ************************************************************************************************************** */}
        {/*
            <div className='RateInstructor-div'>
                <h1 className='white-adham'>Instructor of this course: {course.InstructorUserName}</h1>
                <br></br>
                <h1 className='white-adham'>Rate The Instructor:</h1>
                <br></br>
                <select className='selectnew' onChange={changehandler2}    name="rate2" id="rate2">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </select>
                <br></br><br></br>
                <button onClick={clickhandler2} className='RateInstructorbtn'>Submit</button>
                <br></br><br></br><br></br><br></br>
                <h1 className='white-adham'>Instructor Rating: {instructorRate}</h1>

                <button onClick={clickhandler3} className='reportCoursebtn' >Report A Problem </button>
                </div>

                {flag && <div className='reportProblemDiv'>
                    <h2>Problem Type:</h2> 
                    {flagType && <h4 className='typeEmpty'>(please select a type)</h4>}
                    <br></br>
                    <input type="radio" id="Technical" name="report" onChange={changehandler4} value="Technical"/>
                    <label for="Technical"> Technical</label>
                    <br></br><br></br>
                    <input type="radio" id="Financial" name="report" onChange={changehandler5} value="Financial"/>
                    <label for="Financial"> Financial</label>
                    <br></br><br></br>
                    <input type="radio" id="Other" name="report" onClick={changehandler6} value="Other"/>
                    <label for="Other"> Other</label>
                    <br></br><br></br><br></br>
                    <h2>Comment:</h2>
                    <br></br>
                    <input className='reportTextbox' placeholder='(if needed)' onChange={changehandler3} value={choice3}/>
                    <br></br><br></br><br></br>
                    <button onClick={clickhandler4}  >Report </button>
                    <button onClick={clickhandler5}  >Cancel </button>
                    </div>}

                {
                   subtitle.length>0 && subtitle.map((sub)=>
                <div className='subtitleincoursedetails1'>
                    <h1 className='white-adham'>subtitle Number : {sub.subtitleNumber}</h1>
                    <h1 className='white-adham'>Subtitle total Hours : { sub.SubtitleHours} </h1>
                    <h1 className='white-adham'>subtitle Short Video Description :{sub.ShortVideoDescription} </h1>
                    <div>
                
    
                </div>
                    <br></br><br></br><br></br>

                 <YoutubeEmbed embedId={sub.VideoLink}/>
                     <br></br><br></br><br></br>
                    <button className='watchvideo-adham' onClick={videoclickhandler}>click here if you finished the video</button>
                    <br></br><br></br><br></br>
                    <br></br><br></br><br></br>
                    <Link to='/'>
                        <button className='exercisebtn'>Solve Exercise</button>
                    </Link>
                 </div>
                    )

                } */}
                {/* <Footer/> */}
        </div>
            </>
        )
}

export default CourseDetails

