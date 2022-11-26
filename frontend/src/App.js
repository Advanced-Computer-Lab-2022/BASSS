import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home'
import Instructor from './Pages/Instructor/Instructor'
import SelectCountry from './components/SelectCountry/SelectCountry';

import AddUsers from './components/Admin/AddUsers/AddUsers';
import AdminHome from './components/Admin/AdminHome/AdminHome';
import AdminProfile from './components/Admin/AdminProfile/AdminProfile';
import CoursesAdmin from './components/Admin/CoursesAdmin/CoursesAdmin';
import Reports from './components/Admin/Reports/Reports';
import Navbar from './components/NavBarComponent/Navbar';
//import Navbar from './components/GuestNavbar/GuestNavBar';
//import AdminHome from './components/Admin/AdminHome/AdminHome'
// import NavBarGeneric from './components/NavBarComponent/NavBarGeneric'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      { <Navbar/> }
      {/*<NavBarGeneric h1='sara' firstElement='ana hena' secondElement='wana kamaan' button='buttonnnnnn'/>*/}
        <Routes>
          <Route path='/' element = { <Home/> } /> 
          <Route path='/instructor' element = { <Instructor/> } /> 
          <Route path='/instructor/SelectCountry' element = { <SelectCountry/> } /> 
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
