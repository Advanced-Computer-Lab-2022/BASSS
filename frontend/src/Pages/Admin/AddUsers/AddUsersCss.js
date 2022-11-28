import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import AdminAddUser from '../../../images/systemadmin_text_2.jpg';

//background
export const Nav = styled.nav`
  background: #16354D;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

//links
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  margin-right:50px;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover{
    color: #15cdfc;
  }
  &.active {
    color: #15cdfc;
  }
`;

//??
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;


export const Body = styled.body`
background-image: url(${AdminAddUser});
background-size:cover ;
height: 100vh;


`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const Button = styled.button`

width:39.5%;
appearance: none;
background-color: transparent;
border-width: 0;
box-sizing: border-box;
color: #ebebeb;
cursor: pointer;
display: inline-block;
font-family: Clarkson,Helvetica,sans-serif;
font-size: 30px;
font-weight: 600;
letter-spacing: 0;
line-height: 1em;
margin: 0;
opacity: 1;
outline: 0;
padding: 1.5em 2.2em;
position: relative;
text-align: center;
text-decoration: none;
text-rendering: geometricprecision;
text-transform: uppercase;
transition: opacity 300ms cubic-bezier(.694, 0, 0.335, 1),background-color 100ms cubic-bezier(.694, 0, 0.335, 1),color 100ms cubic-bezier(.694, 0, 0.335, 1);
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
vertical-align: baseline;
white-space: nowrap;

&:before {
    animation: opacityFallbackOut .5s step-end forwards;
    backface-visibility: hidden;
    background-color: rgba(1,1,1,0.2);
    clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateZ(0);
    transition: clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1), -webkit-clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1);
    width: 100%;
  }

&:hover:before {
    animation: opacityFallbackIn 0s step-start forwards;
    clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
  }

&:after {
    background-color: rgba(0,0,0,0.2);
  }

&:span {
    z-index: 1;
    position: relative;
  }
`;


export const ButtonLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  
`;

// &:hover {
//   transition: all 0.2s ease-in-out;
//   background: #fff;
//   color: #010606;
// }
