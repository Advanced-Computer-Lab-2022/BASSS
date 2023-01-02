import React, { useState, useEffect } from 'react';
import { Button } from '../../../components/Button/Button';
import { Link } from 'react-router-dom';
import '../../../components/Navbar/Navbar.css';
import SelectCountry from '../../../components/SelectCountry/SelectCountry';

const IndividualTraineeNavBar = (props) => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [isHovering, setIsHovering] = useState(false);

  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };

    const handleMouseOver = () => {
        setIsHovering(true);
    }
    
    const handleMouseOut = () => {
        setIsHovering(false);
    }
    
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);
  
    return (
      <>
      <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/IndividualTrainee' className='navbar-logo' onClick={closeMobileMenu}>
              BASSS Academy
              <i class='fab fa-typo3' />
            </Link >
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
              <li className='nav-item1' >
                <Link to='/traineeProfile' className='nav-links' onClick={closeMobileMenu}>
                  My Profile
                </Link>
              </li>
              <li className='nav-item1'>
                <Link
                  className='nav_links_Sara'
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
          
                >
                  Courses
                </Link>
                {isHovering && <div className='Hover_Div1' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <Link to='/IndividualTrainee/allcourses' className='nav_linksButton'>
                        AllCourses
                    </Link>
                    <Link to='/IndividualTrainee' className='nav_linksButton'>
                        My Courses
                    </Link>
                    </div>
                    }
              </li>
              <li className='nav_item_button'>
                <Button DropDown={true} buttonStyle = 'btn--outline' Text = '...' B1stLinkTo = '/individualTrainee/myReports' B1stLinkText = 'View Reports'/>  
              </li>
              <li className='nav_item_country'>
              <SelectCountry setCountry = {props.setCountry}/>
              </li>
            </ul>
          </div>
        </nav>
      </>
    )
}

export default IndividualTraineeNavBar