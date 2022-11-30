import '../App.css'
import { Link } from 'react-router-dom'
import Landing from '../components/Landing/Landing'

function Home (){
    return(
        <>
        <Landing/>

        <Link to ="/AllCourses">
            <button>
                View All Courses</button>
            </Link>
        </>

        
    )
}
export default Home