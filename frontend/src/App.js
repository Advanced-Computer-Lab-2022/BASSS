import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddUsers from './Pages/Admin/AddUsers/AddUsers';
import AdminHome from './Pages/Admin/AdminHome/AdminHome';
import AdminProfile from './Pages/Admin/AdminProfile/AdminProfile';
import CoursesAdmin from './Pages/Admin/CoursesAdmin/CoursesAdmin';
import Reports from './Pages/Admin/Reports/Reports';
import Courses from './components/Courses/Courses.js';
import MyCourses from './components/MyCourses/MyCourses';
import AllCourses from './components/Courses/Courses';

import './App.css';
import Instructor from './Pages/Instructor/Instructor'
import SelectCountry from './components/SelectCountry/SelectCountry';

import EditPass from './components/EditPass/EditPass';
import EditmyInfo from './components/EditmyInfo/EditmyInfo';
import Contract from './components/Contract/Contract';

import Home from './Pages/Guest/Home'
import AddAdmin from './Pages/Admin/AddUsers/AddAdmin';
import AddInstructor from './Pages/Admin/AddUsers/AddInstructor';
import AddCoTrainee from './Pages/Admin/AddUsers/AddCoTrainee';
import CourseDetails from './components/CourseDetails/CourseDetails';
import ExerciseP from './Pages/Exercise/ExerciseP';
import CreateCourse from './Pages/Instructor/CreateCourse/CreateCourse';
// import CreateCourse from './components/CreateCourse/CreateCourse';

import CourseDetailsInstructor from './components/CourseDetailsInstructor/CourseDetailsInstructor';
import MyReviews from './components/ViewReviews/ViewReviews';

import IndividualTrainee from './Pages/IndividualTrainee/IndividualTrainee';
import CorporateTrainee from './Pages/CorporateTrainee/CorporateTrainee';
import Promotion from './components/Promotion/Promotion';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = { <Home/> } /> 
          <Route path='/instructor' element = { <Instructor/> } />   
          <Route path='/instructor/SelectCountry' element = { <SelectCountry/> } /> 
          <Route
          path='/Admin'
          element={
            <AdminHome/>
          }
          />
          <Route
          path='/AdminProfile'
          element={
            <AdminProfile/>
          }
          />
          <Route
          path='/AdminAddUsers'
          element={
            <AddUsers/>
          }
          />
          <Route
          path='/AdminReports'
          element={
            <Reports/>
          }
          />
          <Route
          path='/CoursesAdmin'
          element={
            <CoursesAdmin/>
          }
          />
          <Route 
          path='/instructor/MyCourses' 
          element={  <MyCourses/> }/>
          <Route path='/instructor/myInfo' element={  <EditmyInfo/> }/>
          <Route path='/instructor/contract' element={  <Contract/> }/>
          <Route path='/individualtrainee/myCourseDetails' element={  <CourseDetails/> }/>
          <Route path='/corporatetrainee/myCourseDetails' element={  <CourseDetails/> }/>
          <Route path='/individualtrainee/myInfo' element={  <EditPass Type = "individualTrainee"/> }/>
          <Route path='/corporatetrainee/myInfo' element={  <EditPass Type = "corporateTrainee"/> }/>
          <Route path='/instructor/forgetpass' element={  <EditPass Type = "instructor"/> }/>
          <Route path='/individualtrainee/forgetpass' element={  <EditPass Type = "individualTrainee"/> }/>
          <Route path='/corporatetrainee/forgetpass' element={  <EditPass Type = "corporateTrainee"/> }/>
          <Route path='/AllCourses/CourseDetails' element={  <CourseDetails/> }/>
          <Route path='/AllCourses' element={  <AllCourses Link = "/AllCourses/CourseDetails"/> }/>

          
          
          <Route path='/exercise' element={  <ExerciseP/> }/>
          <Route path='/instructor/MyCourses' element={  <MyCourses/> }/>



          <Route path='/Courses' element={  <Courses/> }/>
          <Route path='/instructor' element={<Instructor/> } />
          <Route path='/instructor/SelectCountry' element= {<SelectCountry/>}/>

          <Route path='/instructor/MyCourses/CourseDetails' element={  <CourseDetailsInstructor/> }/>
          <Route path='/instructor/CourseDetails' element={  <CourseDetailsInstructor/> }/>
          <Route path='/instructor/MyReviews' element={  <MyReviews/> }/>
         
         
          <Route path='/instructor/CreateCourse' element= {<CreateCourse/>}/>
          <Route path='/IndividualTrainee' element = { <IndividualTrainee/> } /> 
          <Route path='/IndividualTrainee/SelectCountry' element = { <SelectCountry/> } />
          <Route path='/CorporateTrainee' element = { <CorporateTrainee/> } /> 
          <Route path='/CorporateTrainee/SelectCountry' element = { <SelectCountry/> } /> 
          <Route path='/AdminAddAdmin'  element={<AddAdmin/>}/>
          <Route path='/AdminAddInstructor'element={ <AddInstructor/>}/>
          <Route path='/AdminAddCoTrainee' element={ <AddCoTrainee/>} /> 
          <Route path='/instructor/promotion' element={<Promotion/> } />
        
          <Route
         path='/instructor/CreateCourse' 
         element= {
          <CreateCourse/>
         }
         />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
