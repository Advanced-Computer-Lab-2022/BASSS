import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = (props) => {
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
          <Link to={props.LogoLink} className='navbar-logo' onClick={closeMobileMenu}>
            BASSS Academy
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          
            <li className='nav-item'>
              <Link to={props.FirstLinkTo} className='nav-links' onClick={closeMobileMenu}>
                {props.FirstLinkText}
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to={props.SecondLinkTo}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                {props.SecondLinkText}
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to={props.ThirdLinkTo}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                {props.ThirdLinkText}
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to={props.FourthLinkTo}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                {props.FourthLinkText}
              </Link>
            </li>
{/* 
            <li className='nav-item'>
              <Link
                to={props.FifthLinkTo}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                {props.FifthLinkText}
              </Link>
            </li> */}

            <li>
              <Link
                to={props.ButtonLinkTo}
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                {props.ButtonLinkText}
              </Link>
            </li>
          </ul>
          {button && <Button B1stLinkTo = {props.B1stLinkTo} B1stLinkText = {props.B1stLinkText}
          B2ndLinkTo = {props.B1stLinkTo} B2ndLinkText = {props.B1stLinkText}
          B3rdLinkTo = {props.B1stLinkTo} B3rdLinkText = {props.B1stLinkText}
           buttonStyle='btn--outline'>{props.ButtonLinkText}</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;