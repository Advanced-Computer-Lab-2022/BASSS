import {BrowserRouter,Routes,Route, Navigate, useLocation} from 'react-router-dom'
import  Cookies from 'universal-cookie';
import './App.css';

/*COMMON IMPORTS */
import Home from './Pages/Guest/Home'
import LoginPage from './Pages/Login/LoginPage';
import AdminLoginPage from './Pages/Login/AdminLoginPage';
import Logout from './components/Logout/Logout';
import Editnewpass from './components/Editnewpass/Editnewpass';
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
import CourseDetailsInstructor from './components/CourseDetailsInstructor/CourseDetailsInstructor';
import Promotion from './components/Promotion/Promotion';
import Contract from './components/Contract/Contract';
import InstructorCourses from './Pages/Instructor/InstructorCourses';

import MostViewd from './components/Courses/MostViewd';

// Salama Sprint 3
import MyReports from './components/MyReports/MyReports';


/*CORPORATE IMPORTS */
import CorporateTrainee from './Pages/CorporateTrainee/CorporateTrainee';
import CorporateCourses from './components/CorporateCourses/CorporateCourses';

/*INDIVIDUAL IMPORTS */
import IndividualTrainee from './Pages/IndividualTrainee/IndividualTrainee';
import ExerciseP from './Pages/Exercise/ExerciseP';
import Payment from './Pages/Payment/Payment';
import EditnewPass from './components/Editnewpass/Editnewpass';
import Forgetpass from './components/Forgetpass/Forgetpass';

import Sara from './sara'


const cookies = new Cookies();
const user = cookies.get('token')
const type = localStorage.getItem('type')

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* common routes */}
          <Route path='/sara' element = { <Sara/> } /> 

          <Route path='/' element = { <Home/> } /> 
          <Route path='/login' element={
            (!user)? <LoginPage/> : <Home/>
          }/>
          <Route path='/adminlogin' element={
            (!user)? <AdminLoginPage/> : <Home/>
          }/>
          <Route path='/logout' element={ <Logout/> }/>
          <Route path='/signup' element={ <Logout/> }/>
          <Route path='/forgotPass' element={ <Forgetpass/> }/>

          {/* Instructor routes */}
          <Route path='/instructor' element={<Instructor/>
            //   (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
            //   (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>): <Home/>
          } />
          <Route path='/instructor/SelectCountry' element = { <SelectCountry/>
              // (user)? ((type=='instructor')? <SelectCountry/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              // (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          } /> 
          <Route path='/instructor/contract' element={   <Contract/>
            //   (user)? ((type=='instructor')? <Contract/> : (type=='corporate trainee')? <CorporateTrainee/> : 
            //   (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/instructor/MyCourses' element={ <MyCourses/>
          // <InstructorCourses/>
            //   (user)? ((type=='instructor')? <MyCourses/> : (type=='corporate trainee')? <CorporateTrainee/> : 
            //   (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/instructor/myInfo' element={<EditmyInfo/>
            //   (user)? ((type=='instructor')? <EditmyInfo/>: (type=='corporate trainee')? <CorporateTrainee/> : 
            //   (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/instructor/MyCourses/CourseDetails' element={ <CourseDetailsInstructor/>
              // (user)? ((type=='instructor')? <CourseDetailsInstructor/>: (type=='corporate trainee')? <CorporateTrainee/> : 
              // (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/instructor/CourseDetails' element={  <CourseDetailsInstructor/>
              // (user)? ((type=='instructor')? <CourseDetailsInstructor/>: (type=='corporate trainee')? <CorporateTrainee/> : 
              // (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/instructor/MyReviews' element={ <MyReviews/>
              // (user)? ((type=='instructor')? <MyReviews/>: (type=='corporate trainee')? <CorporateTrainee/> : 
              // (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/instructor/CreateCourse' element= { <CreateCourse/>
              // (user)? ((type=='instructor')? <CreateCourse/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              // (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/instructor/promotion' element={ <Promotion/> 
              // (user)? ((type=='instructor')? <Promotion/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              // (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/instructor/forgetpass' element={ <EditnewPass Type='instructor'/>
            //   (user)? ((type=='instructor')? <EditnewPass Type='instructor'/>: (type=='corporate trainee')? <CorporateTrainee/> : 
            //   (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/instructor/myReports' element={<MyReports/> } />



          {/* Admin Routes */}
          <Route path='/Admin'element={ <AdminHome/>
            //   (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
            //   (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/AdminProfile' element={ <AdminProfile/> 
            //   (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
            //   (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminProfile/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/AdminAddUsers'element={ <AddUsers/>
            //   (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
            //   (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AddUsers/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/AdminReports' element={ <ReportsAdmin/>
            //   (user)? ((type=='instructor')? <ReportsAdmin/> : (type=='corporate trainee')? <CorporateTrainee/> : 
            //   (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <Reports/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/AdminAddAdmin'  element={ <AddAdmin/>
            //   (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
            //   (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AddAdmin/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/AdminAddInstructor'element={  <AddInstructor/>
            //   (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
            //   (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AddInstructor/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/AdminAddCoTrainee' element={ <AddCoTrainee/>
            //   (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
            //   (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AddCoTrainee/> :<LoginPage/>) : <Home/>
          }/> 
          <Route path='/CoursesAdmin' element={  <CoursesAdmin/>
            //   (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
            //   (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <CoursesAdmin/>:<LoginPage/>) : <Home/>
          }/>

          {/* Corporate Routes */}
          <Route exact path='/CorporateTrainee' element = {<CorporateTrainee/>
              // (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              // (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          } />
          <Route path='/CorporateTrainee/SelectCountry' element = {  <SelectCountry/>
              // (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <SelectCountry/> : 
              // (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          }/> 
          <Route path='/corporatetrainee/myCourseDetails' element={  <CourseDetails/> 
              // (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CourseDetails/> : 
              // (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          }/>
          <Route path='/corporatetrainee/myInfo' element={   <EditPass Type = "corporateTrainee"/>
              // (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <EditPass Type = "corporateTrainee"/> : 
              // (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          }/>
          <Route path='/corporatetrainee/forgetpass' element={   <EditnewPass Type = "corporateTrainee"/> 
              // (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <EditnewPass Type = "corporateTrainee"/> : 
              // (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          }/>
          <Route path='/CorporateTrainee/Allcourses' element = { <CorporateCourses/> } /> 
          <Route path='/corporateTrainee/myReports' element={<MyReports/> } />



          {/* Individual Routes */}
          <Route path='/IndividualTrainee' element = {  <IndividualTrainee/> 
            //   (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
            //   (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          }/>
          <Route path='/IndividualTrainee/SelectCountry' element = {  <SelectCountry/>
              // (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              // (type=="individual trainee")? <SelectCountry/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          }/>
          <Route path='/individualtrainee/myCourseDetails' element={  <CourseDetails/> 
              // (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              // (type=="individual trainee")? <CourseDetails/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          }/>
          <Route path='/individualtrainee/myInfo' element={ <EditPass Type = "individualTrainee"/> 
              // (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              // (type=="individual trainee")? <EditPass Type = "individualTrainee"/>  : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          }/>
          <Route path='/individualtrainee/forgetpass' element={  <EditnewPass Type = "individualTrainee"/>
              // (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              // (type=="individual trainee")? <EditnewPass Type = "individualTrainee"/>  : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          }/>
          <Route path='/individualTrainee/myReports' element={<MyReports/> } />


          {/* IDK Routes */}
        <Route path='/AllCourses/CourseDetails' element={ <CourseDetails/>
            // (user)? <CourseDetails/> : <Home/>
        }/>
        <Route path='/AllCourses' element={  <AllCourses Link = "/AllCourses/CourseDetails"/>
            // (user)? <AllCourses Link = "/AllCourses/CourseDetails"/> : <Home/>
        }/>
        <Route path='/exercise' element={  <ExerciseP/>  
            // (user)? <ExerciseP/> : <Home/>
        }/>
        <Route path='/Courses' element={  <Courses/>
            // (user)? <Courses/> : <Home/>
        }/>
        <Route path='/pay' element={
            <Payment CourseId='135' Title='ACL' Price= '100' Currency='usd' />
            // (user)? <Payment/> : <Home/>
        } />
          <Route path='/mostViewd' element={<MostViewd/> } />



        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
