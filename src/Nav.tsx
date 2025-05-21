import { NavLink } from "react-router-dom";
import { useState,useEffect } from 'react';

function Nav(){
  const [menuOpen, setMenuOpen] = useState(false);
  const [xOpen, setXOpen] = useState(false);
  const [iconOpen, setIconOpen] = useState(true);




  const handleIconClick = (menuFlag,iconFlag,xFlag) =>{
    setMenuOpen(menuFlag);
    setIconOpen(iconFlag);
    setXOpen(xFlag);
  }

  return (
    <>
    <div className={`navContainer ${menuOpen ? 'show' : 'hide'}`}>
    <span style={{fontWeight: 'normal'}}>Lucas Yepez</span>
      <NavLink className="about" to = "/about">About</NavLink>
      <br />
      <NavLink to = "/contact">Contact Me</NavLink>
      <br />
      <NavLink to = "/home">Projects</NavLink>
    </div>
    <span onClick={() => handleIconClick(!menuOpen,!iconOpen,!xOpen)} className={`closeBtn ${xOpen? 'show' : 'hide'}`}>x</span>
    <i onClick={() => handleIconClick(!menuOpen,!iconOpen,!xOpen)} className={`menuIcon fa-solid fa-bars ${iconOpen ? 'show' : 'hide'}`}></i>



    </>
  )

}
export default Nav;