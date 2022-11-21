import React,{useState} from 'react';
import './Navbar.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
// import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from './navbarElements';
const learn = require ('../../images/learn.png')

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button,setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = ()=> setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to="/" className="navbar-logo">
              <h3>logo</h3>
            </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'> 
            <Link to='/' className='nav-Links' onClick={closeMobileMenu}>
              home
            </Link>
            </li>

            <li className='nav-item'> 
            <Link to='/Services' className='nav-Links' onClick={closeMobileMenu}>
              Services
            </Link>
            </li>

            <li className='nav-item'> 
            <Link to='/courses' className='nav-Links' onClick={closeMobileMenu}>
              our courses 
            </Link>
            </li>

            <li className='nav-item'> 
            <Link to='/sign-up' className='nav-Links-mobile' onClick={closeMobileMenu}>
              Sign Up 
            </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
       </div>

      </nav>
    </>
  );
};


// <Bars />
// <NavLink to='/' className={'home'}>
//   <img src={learn} className='logo' />
//     <h1> Learners.</h1>
// </NavLink>
// <NavMenu className='navmenu'>
//   <NavLink to='/about' activeStyle>
//     About
//   </NavLink>
// <NavLink to='/services' activeStyle>
//   Services
// </NavLink>
// <NavLink to='/contact-us' activeStyle>
//   Contact Us
// </NavLink>
// <NavLink to='/sign-up' activeStyle>
//   Sign Up
// </NavLink>
// </NavMenu>
// <NavBtn className='navbtn'>
// <NavBtnLink to='/signin'>Sign In</NavBtnLink>
// </NavBtn>

export default Navbar;