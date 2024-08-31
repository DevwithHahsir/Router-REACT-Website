import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="navbar">
        <div className="nav-img">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZlaUXIWozu3xqknYB3S9nknCPGFPAEVZLA&s" alt="" />
        </div>

        <div className="nav-items">
          <ul>
            <NavLink className={(e)=>{return e.isActive? "red":"black"}} to="/home">Home</NavLink>
            <NavLink className={(e)=>{return e.isActive? "red":"black"}} to="/aboutus">About Us</NavLink>
            <NavLink className={(e)=>{return e.isActive? "red":"black"}} to="/contact">Contact</NavLink>
            <NavLink className={(e)=>{return e.isActive? "red":"black"}} to="/user">User</NavLink>
            <NavLink className={(e)=>{return e.isActive? "red":"black"}} to="/github">Github</NavLink>
          </ul>
        </div>
      </div>
    </>
  );
}
