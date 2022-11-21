import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SearchBar from './components/SearchBar';
import AddUsers from './components/Admin/AddUsers/AddUsers';
import AdminHome from './components/Admin/AdminHome/AdminHome';
import AdminProfile from './components/Admin/AdminProfile/AdminProfile';
import CoursesAdmin from './components/Admin/CoursesAdmin/CoursesAdmin';
import Reports from './components/Admin/Reports/Reports';
//import Navbar from './components/GuestNavbar/GuestNavBar';
//import AdminHome from './components/Admin/AdminHome/AdminHome'
import Courses from './components/Courses';
import NavBarGeneric from './components/NavBarComponent/NavBarGeneric'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      { /*<Navbar/>*/ }
      {/*<NavBarGeneric h1='sara' firstElement='ana hena' secondElement='wana kamaan' button='buttonnnnnn'/>*/}
        <Routes>
          <Route
          path='/'
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
        </Routes>
      </BrowserRouter>

    </div>
  );
}
function Home() {
  return <div className="Home">
    {/* <Navbar  /> */}
    <Courses/>
    <SearchBar/>
    </div>
}


export default App;
