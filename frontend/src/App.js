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
import Reports from './Pages/Admin/Reports/Reports';
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

/*CORPORATE IMPORTS */
import CorporateTrainee from './Pages/CorporateTrainee/CorporateTrainee';

/*INDIVIDUAL IMPORTS */
import IndividualTrainee from './Pages/IndividualTrainee/IndividualTrainee';
import ExerciseP from './Pages/Exercise/ExerciseP';
import Payment from './Pages/Payment/Payment';


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
          <Route path='/adminlogin' element={
            (!user)? <AdminLoginPage/> : <Home/>
          }/>
          <Route path='/logout' element={ <Logout/> }/>

          {/* Instructor routes */}
          <Route path='/instructor' element={
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>): <Home/>
          } />
          <Route path='/instructor/SelectCountry' element = { 
              (user)? ((type=='instructor')? <SelectCountry/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          } /> 
          <Route path='/instructor/contract' element={   
              (user)? ((type=='instructor')? <Contract/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/instructor/MyCourses' element={ 
          // <InstructorCourses/>
              (user)? ((type=='instructor')? <MyCourses/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/instructor/myInfo' element={
              (user)? ((type=='instructor')? <EditmyInfo/>: (type=='corporate trainee')? <CorporateTrainee/> : 
              (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/instructor/MyCourses/CourseDetails' element={ 
              (user)? ((type=='instructor')? <CourseDetailsInstructor/>: (type=='corporate trainee')? <CorporateTrainee/> : 
              (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/instructor/CourseDetails' element={  
              (user)? ((type=='instructor')? <CourseDetailsInstructor/>: (type=='corporate trainee')? <CorporateTrainee/> : 
              (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/instructor/MyReviews' element={ 
              (user)? ((type=='instructor')? <MyReviews/>: (type=='corporate trainee')? <CorporateTrainee/> : 
              (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/instructor/CreateCourse' element= { 
              (user)? ((type=='instructor')? <CreateCourse/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/instructor/promotion' element={ 
              (user)? ((type=='instructor')? <Promotion/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          {/* <Route path='/instructor/forgetpass' element={
              (type=='instructor')? <EditPass Type = "instructor"/>: (type=='corporate trainee')? <CorporateTrainee/> : 
              (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>
          }/> */}


          {/* Admin Routes */}
          <Route path='/Admin'element={
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/AdminProfile' element={
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminProfile/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/AdminAddUsers'element={
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AddUsers/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/AdminReports' element={
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <Reports/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/AdminAddAdmin'  element={
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AddAdmin/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/AdminAddInstructor'element={ 
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AddInstructor/> :<LoginPage/>) : <Home/>
          }/>
          <Route path='/AdminAddCoTrainee' element={ 
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AddCoTrainee/> :<LoginPage/>) : <Home/>
          }/> 
          <Route path='/CoursesAdmin' element={  
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <CoursesAdmin/>:<LoginPage/>) : <Home/>
          }/>

          {/* Corporate Routes */}
          <Route exact path='/CorporateTrainee' element = {
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          } />
          <Route path='/CorporateTrainee/SelectCountry' element = {  
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <SelectCountry/> : 
              (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          }/> 
          <Route path='/corporatetrainee/myCourseDetails' element={  
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CourseDetails/> : 
              (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          }/>
          <Route path='/corporatetrainee/myInfo' element={   
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <EditPass Type = "corporateTrainee"/> : 
              (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          }/>
          {/* <Route path='/corporatetrainee/forgetpass' element={   
              (type=='instructor')? <Instructor/> : (type=='corporate trainee')? <EditPass Type = "corporateTrainee"/> : 
              (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/>:<LoginPage/>
          }/> */}

          {/* Individual Routes */}
          <Route path='/IndividualTrainee' element = {  
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              (type=="individual trainee")? <IndividualTrainee/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          }/>
          <Route path='/IndividualTrainee/SelectCountry' element = {  
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              (type=="individual trainee")? <SelectCountry/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          }/>
          <Route path='/individualtrainee/myCourseDetails' element={   
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              (type=="individual trainee")? <CourseDetails/> : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          }/>
          <Route path='/individualtrainee/myInfo' element={  
              (user)? ((type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              (type=="individual trainee")? <EditPass Type = "individualTrainee"/>  : (type=='admin')? <AdminHome/>:<LoginPage/>) : <Home/>
          }/>
          {/* <Route path='/individualtrainee/forgetpass' element={  
              (type=='instructor')? <Instructor/> : (type=='corporate trainee')? <CorporateTrainee/> : 
              (type=="individual trainee")? <EditPass Type = "individualTrainee"/>  : (type=='admin')? <AdminHome/>:<LoginPage/>
          }/> */}

          {/* IDK Routes */}
        <Route path='/AllCourses/CourseDetails' element={ 
            (user)? <CourseDetails/> : <Home/>
        }/>
        <Route path='/AllCourses' element={  
            (user)? <AllCourses Link = "/AllCourses/CourseDetails"/> : <Home/>
        }/>
        <Route path='/exercise' element={   
            (user)? <ExerciseP/> : <Home/>
        }/>
        <Route path='/Courses' element={  
            (user)? <Courses/> : <Home/>
        }/>
        <Route path='/pay' element={
            <Payment CourseId='135' Title='ACL' Price= '100' Currency='usd' />
            // (user)? <Payment/> : <Home/>
        } />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
