import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./Log/Logout";
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink exact to="/">
            <h3>ANDRY</h3>

          </NavLink>
        </div>

        <NavLink to='/' exact activeClassName="active-left-nav">
          <HolidayVillageIcon color="primary" />
        </NavLink>
        <NavLink to='/profil' exact activeClassName="active-left-nav">
          <PersonSearchIcon color="primary" />
        </NavLink>
        {
          uid ? (
            <ul>
              <li></li>
              <li className="welcome">
                <NavLink exact to="/profil">
                  <h5>Bienvenue {userData.pseudo}</h5>
                </NavLink>
              </li>
              <Logout />
            </ul>
          ) : (
            <ul>
              <li></li>
              <li>
                <NavLink exact to="/profil">
                  <img src="./img/icons/login.svg" alt="login" />
                </NavLink>
              </li>
            </ul>
          )
        }
      </div >
    </nav >
  );
};

export default Navbar;
