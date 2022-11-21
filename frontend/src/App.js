import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Guest from './components/guest/Guest';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/> 
        <Routes>
          <p>assc</p>
        </Routes>  
      </BrowserRouter>  

    </div>
  );
}


export default App;
