import React from "react";
import "./Sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/" className="sidebar__logo">
        <img src={logo} alt="" />
      </Link>
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <NavLink end className={({isActive}) => isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"} to="/admin">
            Main
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className={({isActive}) => isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"} to="/admin/create">
            Create
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className={({isActive}) => isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"} to="/admin/articles">
            Articles
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
