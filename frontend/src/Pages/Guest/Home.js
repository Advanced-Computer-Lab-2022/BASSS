import '../../App.css'
import './Home.css'
import Landing from '../../components/Landing/Landing'
import GuestNavBar from '../Guest/GuestNavBar/GuestNavBar'
import Cards from '../../components/Cards/Cards'
import Footer from '../../components/Footer/Footer'
function Home (){
    return(
        <>
        <div className='home-body'>

        <GuestNavBar/>
        <Landing/>
        <Cards/>
        <Footer/>
        </div>
        </>
    )
}
export default Home