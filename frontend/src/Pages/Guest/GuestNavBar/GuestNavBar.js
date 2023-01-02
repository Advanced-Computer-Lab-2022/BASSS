import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../../components/Navbar/Navbar.css';
import SelectCountry from '../../../components/SelectCountry/SelectCountry';

const GuestNavBar = (props) =>{
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);
  
    return (
      <>
      <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              BASSS Academy
              <i class='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
              <li className='nav-item'>
                <Link to={props.FirstLinkTo} className='nav-links' onClick={closeMobileMenu}>
                  Courses
                </Link>
              </li>
  
              <li className='nav-item'>
                <Link
                  to={props.SecondLinkTo}
                  className='nav-links'
                  onClick={props.handleSignup}
                >
                  Signup
                </Link>
              </li>
  
              <li className='nav-item'>
                <Link
                  className='nav-links'
                  onClick={props.handleLogin}
                >
                  Login
                </Link>
              </li>
  
              <li className='nav-item'>
              <SelectCountry setCountry = {props.setCountry}/>
              </li>
            </ul>
          </div>
        </nav>
      </>
    )
}

export default GuestNavBar;