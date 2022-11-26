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
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Instructor from './Pages/Instructor/Instructor'
import SelectCountry from './components/SelectCountry/SelectCountry';
import Home from './Pages/Home'
import MyCourses from './components/MyCourses/MyCourses';
import CourseDetails from './components/CourseDetails/CourseDetails';


import IndividualTrainee from './Pages/IndividualTrainee/IndividualTrainee';
import CorporateTrainee from './Pages/CorporateTrainee/CorporateTrainee';
import CreateCourse from './components/CreateCourse/CreateCourse';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      { <Navbar/> }
      {/*<NavBarGeneric h1='sara' firstElement='ana hena' secondElement='wana kamaan' button='buttonnnnnn'/>*/}
        <Routes>
          <Route
          path='/'
          element={
            <Home/>
          }
          />
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
          path='/AddUsers'
          element={
            <AddUsers/>
          }
          />
          <Route
          path='/Reports'
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
          path='/instructor'
          element={
            <Instructor/>
          }
          />
          
          <Route
          path='/instructor/SelectCountry'
          element={
            <SelectCountry/>
          }
          />

          <Route path='/instructor/MyCourses' element={  <MyCourses/> }/>

          <Route path='/instructor/CourseDetails' element={  <CourseDetails/> }/>

          <Route path='/instructor/MyCourses/CourseDetails' element={  <CourseDetails/> }/>

          
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
