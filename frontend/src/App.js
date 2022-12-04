import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddUsers from './Pages/Admin/AddUsers/AddUsers';
import AdminHome from './Pages/Admin/AdminHome/AdminHome';
import AdminProfile from './Pages/Admin/AdminProfile/AdminProfile';
import CoursesAdmin from './Pages/Admin/CoursesAdmin/CoursesAdmin';
import Reports from './Pages/Admin/Reports/Reports';
import CourseDetails from './components/CourseDetails/CourseDetails';
//import Navbar from './components/GuestNavbar/GuestNavBar';
//import AdminHome from './components/Admin/AdminHome/AdminHome'
//import Courses from './components/Courses';
import NavBarGeneric from './components/NavBarComponent/NavBarGeneric'
import MyCourses from './components/MyCourses/MyCourses';
import AllCourses from './components/Courses/Courses';
//adham's
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Instructor from './Pages/Instructor/Instructor'
import SelectCountry from './components/SelectCountry/SelectCountry';
import Home from './Pages/Home'
//import EditmyInfo from './components/EditmyInfo/EditmyInfo';
import EditPass from './components/EditPass/EditPass';
import EditmyInfo from './components/EditmyInfo/EditmyInfo';
import Contract from './components/Contract/Contract';

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
          <Route 
          path='/instructor/MyCourses' 
          element={  <MyCourses/> }/>
          <Route path='/instructor/myInfo' element={  <EditmyInfo/> }/>
          <Route path='/instructor/contract' element={  <Contract/> }/>
          <Route path='/instructor/CourseDetails' element={  <CourseDetails/> }/>
          <Route path='/individualtrainee/CourseDetails' element={  <CourseDetails/> }/>
          <Route path='/corporatetrainee/CourseDetails' element={  <CourseDetails/> }/>
          <Route path='/individualtrainee/myInfo' element={  <EditPass/> }/>
          <Route path='/corporatetrainee/myInfo' element={  <EditPass/> }/>
          <Route path='/instructor/forgetpass' element={  <EditPass/> }/>
          <Route path='/AllCourses/CourseDetails' element={  <CourseDetails/> }/>
          <Route path='/AllCourses' element={  <AllCourses Link = "/AllCourses/CourseDetails"/> }/>

        </Routes>
        
      </BrowserRouter>

    </div>
  );
}



export default App;
