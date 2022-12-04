import '../App.css'
import Landing from '../components/Landing/Landing'
import { Link } from 'react-router-dom'
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