import {Link} from 'react-router-dom'
// import logo from '../images/logo.jpg'
const Navbar = () =>{
    return(
        <header>
            <div className='container'>
            {/* <img className='logo' src={} alt='logo'/> */}
                <Link to="/"> 
                    <h2>BASSS</h2>
                </Link>
            </div>
        </header>
    )
}
export default Navbar