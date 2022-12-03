import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddUsers from './Pages/Admin/AddUsers/AddUsers';
import AdminHome from './Pages/Admin/AdminHome/AdminHome';
import AdminProfile from './Pages/Admin/AdminProfile/AdminProfile';
import CoursesAdmin from './Pages/Admin/CoursesAdmin/CoursesAdmin';
import Reports from './Pages/Admin/Reports/Reports';

//import Navbar from './components/GuestNavbar/GuestNavBar';
//import AdminHome from './components/Admin/AdminHome/AdminHome'
//import Courses from './components/Courses';
//import NavBarGeneric from './components/NavBarComponent/NavBarGeneric'
//adham's
//import Navbar from './components/Navbar/Navbar';
import './App.css';
import Instructor from './Pages/Instructor/Instructor'
import SelectCountry from './components/SelectCountry/SelectCountry';
import Home from './Pages/Guest/Home'
import AddAdmin from './Pages/Admin/AddUsers/AddAdmin';
import AddInstructor from './Pages/Admin/AddUsers/AddInstructor';
import AddCoTrainee from './Pages/Admin/AddUsers/AddCoTrainee';
//import Meow from './Pages/Admin/Meow';
import CreateCourse from './Pages/Instructor/CreateCourse/CreateCourse';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* { <Navbar FirstLinkTo = '/Admin' FirstLinkText = 'Sara' SecondLinkTo = '/' /> } */}
      {/*<NavBarGeneric h1='sara' firstElement='ana hena' secondElement='wana kamaan' button='buttonnnnnn'/>*/}
        <Routes>
        {/* <Route
          path='/sara'
          element={
            <Meow/>
          }
          /> */}
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
