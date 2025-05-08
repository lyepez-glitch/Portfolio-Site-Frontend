import { NavLink } from "react-router-dom";


function Nav(){
  return (
    <>
    <div className="navContainer">
    <span style={{fontWeight: 'normal'}}>Lucas Yepez</span>
      <NavLink className="about" to = "/about">About</NavLink>
      <br />
      <NavLink to = "/contact">Contact Me</NavLink>
      <br />
      <NavLink to = "/home">Projects</NavLink>
    </div>

    </>
  )
}
export default Nav;