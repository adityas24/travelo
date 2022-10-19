// import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import pageLogo from "../img/logo.png";

import { toggleActions } from "../store/toggle-Slice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const btnToggleHandler = () => {
    dispatch(toggleActions.toggle());
  };
  const isToggle = useSelector((state) => state.toggle.isToggle);
  return (
    <>
      <header>
        <div className="container">
          <div className={`header-box ${isToggle ? "header-fix" : ""}`}>
            <div className="header-logo">
              <div className="header-logo__img">
                <img src={pageLogo} alt="logo" />
              </div>
              <div className="header-logo__text">
                <span>Travelo</span>
              </div>
            </div>

            <nav className="header-nav">
              <ul
                className={`header-nav__list ${isToggle ? "nav-list-fix" : ""}`}
              >
                <li className="header-nav__list-item">
                  <NavLink className="active-nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="header-nav__list-item">
                  <NavLink to="/">About</NavLink>
                </li>{" "}
                <li className="header-nav__list-item">
                  <NavLink to="/">Places</NavLink>
                </li>{" "}
                <li className="header-nav__list-item">
                  <NavLink to="/">Careers</NavLink>
                </li>{" "}
                <li className="header-nav__list-item">
                  <NavLink to="/">Blog</NavLink>
                </li>
              </ul>
            </nav>

            <button className="header-btn-connect">Connect</button>
          </div>
          <div className="mobile-header">
            <button onClick={btnToggleHandler} className="toggle-btn">
              <span
                className={`toggle-btn-inner ${
                  isToggle
                    ? "toggle-btn-inner-rotate hide-toggle-btn-inner"
                    : ""
                }`}
              ></span>
            </button>
            <div className="header-logo">
              <div className="header-logo__text">
                <span>Travelo</span>
              </div>
              <div className="header-logo__img">
                <img src={pageLogo} alt="logo" />
              </div>
            </div>
          </div>

          {isToggle && (
            <div className="mobile-header-new">
              <button onClick={btnToggleHandler} className="toggle-btn-mobile">
                <span
                  className={`toggle-btn-inner ${
                    isToggle
                      ? "toggle-btn-inner-rotate hide-toggle-btn-inner"
                      : ""
                  }`}
                ></span>
              </button>
              <div className="header-logo">
                <div className="header-logo-mobile__text">
                  <span>Travelo</span>
                </div>
                <div className="header-logo__img">
                  <img src={pageLogo} alt="logo" />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
