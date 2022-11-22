import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './Pages/Home'
import Instructor from './Pages/Instructor/Instructor'
import SelectCountry from './components/SelectCountry/SelectCountry';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/> 
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
