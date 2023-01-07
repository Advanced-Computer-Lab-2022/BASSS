import React, { useState, useEffect } from 'react';
import { Button } from '../../../components/Button/Button';
import { Link, Navigate } from 'react-router-dom';
import '../../../components/Navbar/Navbar.css';
import SelectCountry from '../../../components/SelectCountry/SelectCountry';
const InstructorNavBar = (props) => {
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
            <Link to='/instructor' className='navbar-logo' >
              BASSS Academy
              <i class='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
              <li className='nav-item1'>
                <Link className='nav-links' onClick={props.profileHandler} >
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
                    <Link to='/instructor/allCourses' className='nav_linksButton'>
                        AllCourses
                    </Link>
                    <Link to='/instCourses' className='nav_linksButton'>
                        My Courses
                    </Link>
                    <Link to='/instructor/CreateCourse' className='nav_linksButton'>
                        Create Courses
                    </Link>

                    </div>
                    }
              </li>
              <li className='nav_item_button'>
                <Button DropDown={true} buttonStyle = 'btn--outline' Text = '...' B1stLinkTo = '/instructor/myReports' B1stLinkText = 'View Reports'/>  
              </li>
              <li className='nav_item_country'>
              <SelectCountry setCountry = {props.setCountry}/>
              </li>
            </ul>
          </div>
        </nav>
      </>
    )
    // return <div>
    // <Navbar  FirstLinkText='Home' SecondLinkText='My Courses' 
    // ThirdLinkText='Select Country' FourthLinkText='My Profile'  
    // ButtonLinkText='Logout' 

    // LogoLink='/'  FirstLinkTo='/instructor' SecondLinkTo='/instructor/MyCourses'
    // ThirdLinkTo='/instructor/SelectCountry' FourthLinkTo='/instructor/myInfo' 
    // ButtonLinkTo='/logout'/>
    // </div>
}

export default InstructorNavBar
