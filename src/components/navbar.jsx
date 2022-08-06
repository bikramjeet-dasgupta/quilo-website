import React from "react";
import "./navbar.css";
import { logo, search, dpplaceholder } from "../constants/images";
import { FcLike } from "react-icons/fc";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar-pc">
        <div className="logo">
          <a href="https://github.com/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="nav-search">
          <form action="search" className="nav-search-form">
            <input
              type="text"
              
              placeholder="Search"
              className="nav-search-box"
            />
            <button type="search" className="nav-search-btn">
              <img
                src={search}
                alt="nav-Search-icon"
                className="nav-search-icon"
              />
            </button>
          </form>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <a href="default.asp">Home</a>
            </li>
            <li>
              <a href="news.asp">Chat</a>
            </li>
            <li>
              <a href="contact.asp">Explore</a>
            </li>
          </ul>
        </div>
        <div className="dp">
          <a href="dp.asp">
            <img src={dpplaceholder} alt="dp" className="dp-image" />
          </a>
        </div>
        <div className="activity">
          <a href="activity.asp">
            <button type="activity" className="activity-btn">
              <FcLike className="activity-icon"></FcLike>
            </button>
          </a>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
