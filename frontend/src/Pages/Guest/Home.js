import '../../App.css'
import { useState} from 'react';
import Landing from '../../components/Landing/Landing'
import GuestNavBar from '../Guest/GuestNavBar/GuestNavBar'
import Cards from '../../components/Cards/Cards'
import Footer from '../../components/Footer/Footer'
import Login from '../../components/Login/Login'
import Signup from '../SignUp/Signup'
function Home (){
    
    const [Login1, setLogin1] = useState(false);
    const [Signup1, setSignup1] = useState(false);


    const handleLogin = () => {
        setLogin1(!Login1);
        setSignup1(false);
      };

      const handleSignup = () => {
        setSignup1(!Signup1);
        setLogin1(false);
      };
      
    return(
        <>
        <div className='home-body'>

        <GuestNavBar handleLogin = {handleLogin} handleSignup = {handleSignup}/>
        {Login1 && <Login/>}
        {Signup1 && <Signup setSignup1 = {setSignup1}/>}
        <Landing/>
        <Cards/>
        <Footer/>
        </div>
        </>
    )
}
export default Home