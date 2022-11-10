import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';

import Courses from './components/Courses';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/> 
        <Routes>
          <Route
          path='/'
          element={
            <Home/>
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
    {/* <Courses/> */}
    </div>
}


export default App;
