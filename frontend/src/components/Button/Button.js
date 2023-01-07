import './Button.css';
import { Link } from 'react-router-dom';
import React, {useState } from 'react';
import '../Navbar/Navbar.css'

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  ButtonLink,
  B1stLinkTo,
  B1stLinkText,
  B2ndLinkTo,
  B2ndLinkText,
  B3rdLinkTo,
  B3rdLinkText,
  Text,
  DropDown,
  sara
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const [isHovering, setIsHovering] = useState(false);


  const handleMouseOver = () => {
    setIsHovering(true);
}

const handleMouseOut = () => {
    setIsHovering(false);
}

  return (<div className='Button_Div'>
    <Link to={ButtonLink} className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        type={type}
      >
        {Text}
      </button>
    </Link>
    {DropDown && isHovering && <div className='Hover_Div' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      { sara && <Link to={B1stLinkTo} className='nav_linksButton'>
          {B1stLinkText}
      </Link>
      }
      {/* <Link to={B2ndLinkTo} className='nav_linksButton'>
          {B2ndLinkText}
      </Link>
      <Link to={B3rdLinkTo} className='nav_linksButton'>
          {B3rdLinkText}
      </Link> */}
      <Link to='/logout' className='nav_linksButton'>
          Logout
      </Link>
    </div>}
    </div>
  );
};
