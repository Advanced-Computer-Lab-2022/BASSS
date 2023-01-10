import {BrowserRouter,Routes,Route, Navigate, useLocation} from 'react-router-dom'
import  Cookies from 'universal-cookie';
import './App.css';
import axios from 'axios';

/*COMMON IMPORTS */
import Home from './Pages/Guest/Home'
import LoginPage from './Pages/Login/LoginPage';
import Logout from './components/Logout/Logout';
import Editnewpass from './components/Editnewpass/Editnewpass';
import FirstLogin from './components/Login/FirstLogin';
//t2ryban common?
import Courses from './components/Courses/Courses.js';
import AllCourses from './components/Courses/Courses';
import SelectCountry from './components/SelectCountry/SelectCountry';
import CourseDetails from './components/CourseDetails/CourseDetails';
import EditPass from './components/EditPass/EditPass';
import EditmyInfo from './components/EditmyInfo/EditmyInfo';


/*ADMIN IMPORTS*/
import AddUsers from './Pages/Admin/AddUsers/AddUsers';
import AdminHome from './Pages/Admin/AdminHome/AdminHome';
import AdminProfile from './Pages/Admin/AdminProfile/AdminProfile';
import CoursesAdmin from './Pages/Admin/CoursesAdmin/CoursesAdmin';
import ReportsAdmin from './Pages/Admin/Reports/ReportsAdmin';
import AddAdmin from './Pages/Admin/AddUsers/AddAdmin';
import AddInstructor from './Pages/Admin/AddUsers/AddInstructor';
import AddCoTrainee from './Pages/Admin/AddUsers/AddCoTrainee';

/*INSTRUCTOR IMPORTS */
import Instructor from './Pages/Instructor/Instructor'
import MyReviews from './components/ViewReviews/ViewReviews';
import MyCourses from './components/MyCourses/MyCourses';
import CreateCourse from './Pages/Instructor/CreateCourse/CreateCourse';
import CourseDetailsInst from './components/CourseDetails/CourseDetailsInst';
import Promotion from './components/Promotion/Promotion';
import Contract from './components/Contract/Contract';
import InstructorCourses from './Pages/Instructor/InstructorCourses';
import InstructorProfile from './components/Profiles/InstructorProfile';

import MostViewd from './components/Courses/MostViewd';

// Salama Sprint 3
import MyReports from './components/MyReports/MyReports';


/*CORPORATE IMPORTS */
import CorporateTrainee from './Pages/CorporateTrainee/CorporateTrainee';
import CorporateCourses from './components/CorporateCourses/CorporateCourses';
import CorporateRequests from './components/CorpReq/CorpReq';

/*INDIVIDUAL IMPORTS */
import IndividualTrainee from './Pages/IndividualTrainee/IndividualTrainee';
import ExerciseP from './Pages/Exercise/ExerciseP';
import Payment from './Pages/Payment/Payment';
import EditnewPass from './components/Editnewpass/Editnewpass';
import Forgetpass from './components/Forgetpass/Forgetpass';
import TraineeProfile from './components/Profiles/TraineeProfile';
import RefundRequests from './components/RefReq/RefReq';

import Sara from './sara'
import PrivacyPolicy from './Pages/SignUp/PrivaryPolicy';
import Downloadcert from './components/Downloadcert/Downloadcert';
import InstructorMyCourses from './components/MyCourses/InstructorMyCourses';
import TraineeViewAllCourses from './Pages/IndividualTrainee/ViewAllCourses/TraineeViewAllCourses';
import CorpTrainee from './Pages/CorporateTrainee/ViewAllCouresCorporate/CorpTrainee';
import './Pages/Instructor/InstructorViewAllCourses/InstructorViewAllCourses.css';
import InstructorViewAllCourses from './Pages/Instructor/InstructorViewAllCourses/InstructorViewAllCourses';


const cookies = new Cookies();
const user = cookies.get('token')
const type = localStorage.getItem('type')

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* common routes */}

          <Route path='/' element = { <Home/> } /> 
          <Route path='/login' element={ 
            (!user)? <LoginPage/> : <Home/>
          }/>
          <Route path='/logout' element={ <Logout/> }/>
          <Route path='/forgotPass' element={ <Forgetpass/> }/>
          <Route path='/firstLogin' element={ <FirstLogin Who={type}/> }/>
          <Route path='/instProfile' element={ 
              (user)? ((type=='instructor')? <InstructorProfile/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>): <Home/>
          }/>
          <Route path='/traineeProfile' element={ 
              (user)? ((type=='instructor')? <InstructorProfile/> : (type=='corporatetrainee')? <TraineeProfile Who='corporatetrainee'/> : 
              (type=="individualtrainee")? <TraineeProfile Who='individualtrainee'/> : (type=='admin')? <AdminHome/> :<LoginPage/>): <Home/>
        
        }/>
          <Route path='/PrivacyPolicy' element={ <PrivacyPolicy/> }/>
          <Route path='/dowloadcertificate' element={  
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <Downloadcert/>: 
              (type=="individualtrainee")? <Downloadcert/> : (type=='admin')? <AdminHome/> :<LoginPage/>): <Home/>
        }/>
          <Route path='/instCourses' element={  
              (user)? ((type=='instructor')? <InstructorMyCourses Link="/instructor/CourseDetails"/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>): <Home/>
        }/>

          {/* Instructor routes */}
          <Route path='/instructor' element={
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>): <Home/>
          } />
          <Route path='/instructor/SelectCountry' element = { <SelectCountry/>
              // (user)? ((type=='instructor')? <SelectCountry/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
              // (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          } /> 
          <Route path='/instructor/contract' element={ 
              (user)? ((type=='instructor')? <Contract/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/instructor/MyCourses' element={ 
          // <InstructorCourses/>
              (user)? ((type=='instructor')? <MyCourses/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/instructor/myInfo' element={
              (user)? ((type=='instructor')? <EditmyInfo/>: (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/instructor/MyCourses/CourseDetails' element={
              (user)? ((type=='instructor')? <CourseDetailsInst/>: (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/instructor/CourseDetails' element={  
              (user)? ((type=='instructor')? <CourseDetailsInst/>: (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/instructor/MyReviews' element={ 
              (user)? ((type=='instructor')? <MyReviews/>: (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/instructor/CreateCourse' element= { 
              (user)? ((type=='instructor')? <CreateCourse/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/instructor/promotion' element={
              (user)? ((type=='instructor')? <Promotion/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/instructor/forgetpass' element={
              (user)? ((type=='instructor')? <EditnewPass Type='instructor'/>: (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/instructor/myReports' element={
              (user)? ((type=='instructor')? <MyReports IN = 'true'/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
        } />

          <Route path='/instructor/allCourses' element={
              (user)? ((type=='instructor')? <InstructorViewAllCourses/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
        } />



          {/* Admin Routes */}
          <Route path='/Admin'element={ 
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <CoursesAdmin/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/AdminProfile' element={ 
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AdminProfile/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/AdminAddUsers'element={ 
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AddUsers/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/AdminReports' element={ 
              (user)? ((type=='instructor')? <Instructor/>  : (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <ReportsAdmin/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/AdminAddAdmin'  element={ 
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AddAdmin/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/AdminAddInstructor'element={  
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AddInstructor/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/AdminAddCoTrainee' element={ 
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AddCoTrainee/> :<LoginPage/>) : <Home/>
          }/> 
          <Route path='/CoursesAdmin' element={  
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <CoursesAdmin/>:<LoginPage/>) : <Home/>
          }/>

          {/* Corporate Routes */}
          <Route  path='/CorporateTrainee' element = {
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          } />
          <Route path='/CorporateTrainee/SelectCountry' element = { 
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <SelectCountry/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          }/> 
          <Route path='/corporatetrainee/myCourseDetails' element={ 
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <CourseDetails/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          }/>
          <Route path='/corporatetrainee/myInfo' element={ 
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <EditPass Type = "corporateTrainee"/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          }/>
          <Route path='/corporatetrainee/forgetpass' element={  
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <EditnewPass Type = "corporateTrainee"/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          }/>
          <Route path='/CorporateTrainee/Allcourses' element = {  
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <CorporateCourses/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
        } /> 
          <Route path='/corporateTrainee/myReports' element={
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <MyReports CT = 'true'/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
        } />
        <Route path='/corporateTrainee/corpReq' element={
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <CorporateRequests/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
        } />




          {/* Individual Routes */}
          <Route path='/IndividualTrainee' element = { 
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          }/>
          <Route path='/IndividualTrainee/SelectCountry' element = {  
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <SelectCountry/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          }/>
          <Route path='/individualtrainee/myCourseDetails' element={   
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <CourseDetails/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          }/>
          <Route path='/individualtrainee/myInfo' element={ 
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <EditPass Type = "individualTrainee"/>  : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          }/>
          <Route path='/individualtrainee/forgetpass' element={
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <EditnewPass Type = "individualTrainee"/>  : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          }/>
          <Route path='/individualTrainee/myReports' element={
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <MyReports IT = 'true'/>   : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
        } />

          <Route path='/individualTrainee/allcourses' element={
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <TraineeViewAllCourses/>    : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
        
        } />
          <Route path='/allcourses' element={ <TraineeViewAllCourses/> 
            // (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
            // (type=="individualtrainee")? <TraineeViewAllCourses/>    : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
        
        } />
          <Route path='Corp/allcourses' element={ 
                      (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <CorpTrainee/> : 
                      (type=="individualtrainee")? <IndividualTrainee/>    : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
        
        } />

        <Route path='/individualTrainee/refReq' element={
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporatetrainee')? <CorporateTrainee/> : 
              (type=="individualtrainee")? <RefundRequests/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
        } />


          {/* IDK Routes */}
        <Route path='/AllCourses/CourseDetails' element={ <CourseDetails/> 
            // (user)? <CourseDetails/> : <Home/>
        }/>
        {/* <Route path='/AllCourses' element={ <AllCourses Link = "/AllCourses/CourseDetails"/> 
            // (user)? <AllCourses Link = "/AllCourses/CourseDetails"/> : <Home/>
        }/> */}
        <Route path='/exercise' element={  
            (user)? <ExerciseP/> : <Home/>
        }/>
        <Route path='/Courses' element={  
            (user)? <Courses/> : <Home/>
        }/>
        <Route path='/pay' element={
            
            (user)? <Payment CourseId='135' Title='ACL' Price= '100' Currency='usd' /> : <Home/>
        } />
          <Route path='/mostViewd' element={ 
            (user)? <MostViewd/> : <Home/>
          } />

          {/* <Route path='/instructor/courseDetails' element={<CourseDetailsInstructor/> } /> */}


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
