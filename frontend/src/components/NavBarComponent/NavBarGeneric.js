import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './navbarCss';

const NavBarGeneric = (props) => {
  return (
    <>
        <Nav>
          <Bars />
          <NavLink to={props.Lh1}>
              <h1> {props.h1}</h1>
          </NavLink>
          <NavMenu>
            <NavLink to={props.L1} activeStyle>
              {props.firstElement}
            </NavLink>
          <NavLink to={props.L2} activeStyle>
          {props.secondElement}
          </NavLink>
          <NavLink to={props.L3} activeStyle>
          {props.thirdElement}
          </NavLink>
          <NavLink to={props.L4} activeStyle>
          {props.fourthElement}
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to={props.LB1}>{props.button}</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavBarGeneric;