import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './Pages/Home'
import Instructor from './Pages/Instructor/Instructor'
import SelectCountry from './components/SelectCountry/SelectCountry';
import IndividualTrainee from './Pages/IndividualTrainee/IndividualTrainee';
import CorporateTrainee from './Pages/CorporateTrainee/CorporateTrainee';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/> 
        <Routes>  
          <Route path='/' element = { <Home/> } /> 
          <Route path='/instructor' element = { <Instructor/> } /> 
          <Route path='/instructor/SelectCountry' element = { <SelectCountry/> } /> 
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
