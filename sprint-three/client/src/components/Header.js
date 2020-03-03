import React, { Component } from "react";
import Logo1 from "../Assets/Logo/Logo-brainflix.svg";
import propic from "../Assets/Images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";
// import searchlogo from "../Assets/Icons/PNG/Icon-search.png";

export default class header extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="header__title">
            <Link to="/" className="header__title--logo">
              <img src={Logo1} alt="brainflix-logo" />
            </Link>
          </div>
          <div className="header__search">
            <input
              className="header__searchbar"
              type="text"
              name="search"
              placeholder="Search"
            ></input>
          </div>
          <div className="header__uploadandpropic">
            <Link to="/upload" className="header__upload">
              + Upload
            </Link>
            <img className="header__propic" src={propic} alt="propic" />
          </div>
        </div>
      </>
    );
  }
}
