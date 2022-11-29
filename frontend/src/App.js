import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddUsers from './Pages/Admin/AddUsers/AddUsers';
import AdminHome from './Pages/Admin/AdminHome/AdminHome';
import AdminProfile from './Pages/Admin/AdminProfile/AdminProfile';
import CoursesAdmin from './Pages/Admin/CoursesAdmin/CoursesAdmin';
import Reports from './Pages/Admin/Reports/Reports';

//import Navbar from './components/GuestNavbar/GuestNavBar';
//import AdminHome from './components/Admin/AdminHome/AdminHome'
import NavBarGeneric from './components/NavBarComponent/NavBarGeneric'
//adham's
//import Navbar from './components/Navbar/Navbar';
import './App.css';
import Instructor from './Pages/Instructor/Instructor'
import SelectCountry from './components/SelectCountry/SelectCountry';
import Home from './Pages/Guest/Home'
import AddAdmin from './Pages/Admin/AddUsers/AddAdmin';
import AddInstructor from './Pages/Admin/AddUsers/AddInstructor';
import AddCoTrainee from './Pages/Admin/AddUsers/AddCoTrainee';
import MyCourses from './components/MyCourses/MyCourses';
import CourseDetails from './components/CourseDetails/CourseDetails';


import IndividualTrainee from './Pages/IndividualTrainee/IndividualTrainee';
import CorporateTrainee from './Pages/CorporateTrainee/CorporateTrainee';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* { <Navbar FirstLinkTo = '/Admin' FirstLinkText = 'Sara' SecondLinkTo = '/' /> } */}
      {/*<NavBarGeneric h1='sara' firstElement='ana hena' secondElement='wana kamaan' button='buttonnnnnn'/>*/}
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
          path='/AdminAddAdmin'
          element={
            <AddAdmin/>
          }
          />
          <Route
          path='/AdminAddInstructor'
          element={
            <AddInstructor/>
          }
          />
          <Route
          path='/AdminAddCoTrainee'
          element={
            <AddCoTrainee/>
          }
          />
          
          

          <Route path='/instructor/MyCourses' element={  <MyCourses/> }/>

          <Route path='/instructor/CourseDetails' element={  <CourseDetails/> }/>

          <Route path='/instructor/MyCourses/CourseDetails' element={  <CourseDetails/> }/>

          <Route path='/Courses' element={  <Courses/> }/>
          <Route path='/instructor' element={<Instructor/> } />
          <Route path='/instructor/SelectCountry' element= {<SelectCountry/>}/>
          <Route path='/instructor/CreateCourse' element= {<CreateCourse/>}/>
          <Route path='/IndividualTrainee' element = { <IndividualTrainee/> } /> 
          <Route path='/IndividualTrainee/SelectCountry' element = { <SelectCountry/> } /> 
          <Route path='/CorporateTrainee' element = { <CorporateTrainee/> } /> 
          <Route path='/CorporateTrainee/SelectCountry' element = { <SelectCountry/> } /> 
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
