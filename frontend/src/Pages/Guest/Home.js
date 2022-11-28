import '../../App.css'
import Landing from '../../components/Landing/Landing'
import GuestNavBar from '../Guest/GuestNavBar/GuestNavBar'
import Cards from '../../components/Cards/Cards'
import Footer from '../../components/Footer/Footer'
function Home (){
    return(
        <>
        <GuestNavBar/>
        <Landing/>
        <Cards/>
        <Footer/>
        </>
    )
}
export default Home