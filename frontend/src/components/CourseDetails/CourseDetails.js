import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './CourseDetails.css';
import { Link } from 'react-router-dom'
//import IndividualTraineeNavBar from '../../Pages/IndividualTrainee/IndividualTraineeNavBar/IndividualTraineeNavBar'
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
    var [choice55,setchoice55] = useState([]);


    const changehandler = (e)=>{
        setchoice(e.target.value);

    }
    const adham = (e)=>{
        setchoice(e.target.value);
    }

    const adham2 = (e)=>{
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

    const rev_ins = (e)=>{
      setchoice55(e.target.value);
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

    const reviewInst =  async () => {
      alert('Your Review Has Been Submitted')
      await axios.get(`http://localhost:9000/instructor/reviewInst/${location.state[1]}/${choice55}`).then(
          (res) => { 
              const review = res.data;
              console.log(review);

          }
          );
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
{/* <h2 className='offer-adham'>Offered By</h2>
<div className='uni_img'></div> */}
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


<div class="rate_adham_inst">
    <h2 >Would you like to rate Instructor {course.InstructorUserName} ?</h2>
    <div class="rate2">
    <input onChange={adham2} type="radio" id="star50" name="rate2" value="5" />
    <label for="star50" title="text">5 stars</label>
    <input onChange={adham2} type="radio" id="star40" name="rate2" value="4" />
    <label  for="star40" title="text">4 stars</label>
    <input onChange={adham2} type="radio" id="star30" name="rate2" value="3" />
    <label for="star30" title="text">3 stars</label>
    <input onChange={adham2} type="radio" id="star20" name="rate2" value="2" />
    <label for="star20" title="text">2 stars</label>
    <input onChange={adham2} type="radio" id="star10" name="rate2" value="1" />
    <label for="star10" title="text">1 star</label>
  </div>
  <button onClick={clickhandler2}>Submit</button>
</div>


</div>
<h1 className='sub_h1_adham'>Subtitles</h1>
<div class="subtitles">
      {
                           subtitle.length>0 && subtitle.map((sub)=>
                           <div className='subtitles_item'>
                               <h1 className='sub_info_adham'>subtitle Number : {sub.subtitleNumber}</h1>
                               <h1 className='sub_info_adham' >Subtitle total Hours : { sub.SubtitleHours} </h1>
                               <h1 className='sub_info_adham'>subtitle Short Video Description :{sub.ShortVideoDescription} </h1>
                               <YoutubeEmbed embedId={sub.VideoLink}/>

                               <div>
                               <Link to='/exercise'>
                                <button className='exercisebtn_adham'>Solve Exercise</button>
                                </Link>
                                </div>
                            </div>
                               )
      }

</div>
<div className='reviews_adham'>
  <h1>Reviews</h1>
  <h1>3.9</h1>
  <div class="rating_reviews">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M8.51948 1.625C9.1214 1.625 10.0427 4.16625 10.4636 5.43013C10.6014 5.8437 10.9837 6.13054 11.4192 6.14904C12.7373 6.20505 15.375 6.39722 15.375 7.0384C15.375 7.66696 13.5161 9.17543 12.5322 9.92976C12.1816 10.1986 12.0365 10.6604 12.1687 11.082C12.5631 12.34 13.2755 14.8755 12.7573 15.3009C12.2506 15.717 10.2147 14.2326 9.15246 13.4009C8.77021 13.1016 8.22949 13.1012 7.84719 13.4004C6.78473 14.2321 4.75246 15.717 4.28166 15.3009C3.79912 14.8745 4.47615 12.3275 4.84741 11.0727C4.97086 10.6555 4.82425 10.2029 4.47885 9.93826C3.49798 9.18681 1.625 7.66933 1.625 7.0384C1.625 6.3962 4.2711 6.20444 5.5871 6.14878C6.0197 6.13048 6.3998 5.84769 6.53973 5.43793C6.97041 4.17673 7.91633 1.625 8.51948 1.625Z" fill="#00B9AE" stroke="#00B9AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </div>
        <h3>5220 reviews</h3>
        <h2 className='header_adham'>TOP REVIEWS FROM HTML, CSS, AND JAVASCRIPT FOR WEB DEVELOPERS</h2>
        <div className='person_review_div'>

        <div class="rating_reviews_person">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M8.51948 1.625C9.1214 1.625 10.0427 4.16625 10.4636 5.43013C10.6014 5.8437 10.9837 6.13054 11.4192 6.14904C12.7373 6.20505 15.375 6.39722 15.375 7.0384C15.375 7.66696 13.5161 9.17543 12.5322 9.92976C12.1816 10.1986 12.0365 10.6604 12.1687 11.082C12.5631 12.34 13.2755 14.8755 12.7573 15.3009C12.2506 15.717 10.2147 14.2326 9.15246 13.4009C8.77021 13.1016 8.22949 13.1012 7.84719 13.4004C6.78473 14.2321 4.75246 15.717 4.28166 15.3009C3.79912 14.8745 4.47615 12.3275 4.84741 11.0727C4.97086 10.6555 4.82425 10.2029 4.47885 9.93826C3.49798 9.18681 1.625 7.66933 1.625 7.0384C1.625 6.3962 4.2711 6.20444 5.5871 6.14878C6.0197 6.13048 6.3998 5.84769 6.53973 5.43793C6.97041 4.17673 7.91633 1.625 8.51948 1.625Z" fill="#00B9AE" stroke="#00B9AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </div>
        <h6 className='person_review'>by RR Aug 1, 2021 </h6>
        <h6 className='person_review'>Very Amagzing Course .I think everyone should go for this course</h6>

        <br></br><br></br><br></br>
        <div class="rating_reviews_person">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M8.51948 1.625C9.1214 1.625 10.0427 4.16625 10.4636 5.43013C10.6014 5.8437 10.9837 6.13054 11.4192 6.14904C12.7373 6.20505 15.375 6.39722 15.375 7.0384C15.375 7.66696 13.5161 9.17543 12.5322 9.92976C12.1816 10.1986 12.0365 10.6604 12.1687 11.082C12.5631 12.34 13.2755 14.8755 12.7573 15.3009C12.2506 15.717 10.2147 14.2326 9.15246 13.4009C8.77021 13.1016 8.22949 13.1012 7.84719 13.4004C6.78473 14.2321 4.75246 15.717 4.28166 15.3009C3.79912 14.8745 4.47615 12.3275 4.84741 11.0727C4.97086 10.6555 4.82425 10.2029 4.47885 9.93826C3.49798 9.18681 1.625 7.66933 1.625 7.0384C1.625 6.3962 4.2711 6.20444 5.5871 6.14878C6.0197 6.13048 6.3998 5.84769 6.53973 5.43793C6.97041 4.17673 7.91633 1.625 8.51948 1.625Z" fill="#00B9AE" stroke="#00B9AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </div>
        <h6 className='person_review'>by RR Mar 15, 2020 </h6>
        <h6 className='person_review'>Excellent course, specially if you are a professional{<br></br>} but in different technologies/ languages.</h6>


        <br></br><br></br><br></br>
        <div class="rating_reviews_person">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M8.51948 1.625C9.1214 1.625 10.0427 4.16625 10.4636 5.43013C10.6014 5.8437 10.9837 6.13054 11.4192 6.14904C12.7373 6.20505 15.375 6.39722 15.375 7.0384C15.375 7.66696 13.5161 9.17543 12.5322 9.92976C12.1816 10.1986 12.0365 10.6604 12.1687 11.082C12.5631 12.34 13.2755 14.8755 12.7573 15.3009C12.2506 15.717 10.2147 14.2326 9.15246 13.4009C8.77021 13.1016 8.22949 13.1012 7.84719 13.4004C6.78473 14.2321 4.75246 15.717 4.28166 15.3009C3.79912 14.8745 4.47615 12.3275 4.84741 11.0727C4.97086 10.6555 4.82425 10.2029 4.47885 9.93826C3.49798 9.18681 1.625 7.66933 1.625 7.0384C1.625 6.3962 4.2711 6.20444 5.5871 6.14878C6.0197 6.13048 6.3998 5.84769 6.53973 5.43793C6.97041 4.17673 7.91633 1.625 8.51948 1.625Z" fill="#00B9AE" stroke="#00B9AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </div>
        <h6 className='person_review'>by RR May 11, 2022 </h6>
        <h6 className='person_review'>Very great lesson. I learned a lot from it.The assignment is delicately{<br></br>} prepared and of a suitable difficulty.</h6>

        </div>

        <div class="loader55">
          <div class="bar bar1"></div>
          <div class="bar bar2"></div>
          <div class="bar bar3"></div>
          <div class="bar bar4"></div>
          <div class="bar bar5"></div>
          <div class="bar bar6"></div>
          <div class="bar bar7"></div>
          <div class="bar bar8"></div>
      </div>
</div>
<div className='adhaminfo1'>
  <h1 className='report_adham1'>Would You Like To Report A Problem !</h1>
  <br></br>

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
                    <input className='reportTextbox_adham' placeholder='Your Problem' onChange={changehandler3} value={choice3}/>
                    <br></br><br></br><br></br>
                    <button onClick={clickhandler4}  >Report </button>
                    <button onClick={clickhandler5}  >Cancel </button>
                    </div>}
<button onClick={clickhandler3} className='repo_btn_adham' >Report A Problem </button>

</div>
<div className='adhaminfo2'>
<h1 className='rev_adham'>Review Your Instructor !</h1>
<div class="form__group field">
    <input required="" placeholder="Name" class="form__field" type="input" onChange={rev_ins}/>
    <label class="form__label" for="name">Name</label>
</div>

<button className='sub_rev_adham' onClick={reviewInst}>Submit Review</button>
</div>

        {/* <Footer/> */}
        </div>
            </>
        )
}

export default CourseDetails

