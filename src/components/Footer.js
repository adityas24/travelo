import LinkedIn from "../img/LinkedIn.svg";
import "./Footer.scss";



import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-box">
          <p className="footer__copyright footer-child__1">
            Copyright © 2020 Travelo. All rights reserved
          </p>
          <nav className="footer__nav footer-child__2">
            <ul>
              <li>
                <NavLink className="active-footer-link" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/">About</NavLink>
              </li>
              <li>
                <NavLink to="/">Places</NavLink>
              </li>
              <li>
                <NavLink to="/">Careers</NavLink>
              </li>
              <li>
                <NavLink to="/">Blogs</NavLink>
              </li>
            </ul>
          </nav>

          <div className="footer__social-icons footer-child__3">
            <a href="">
              <img src={LinkedIn} alt="" />
            </a>
            <a href="">
              {" "}
              <img src={LinkedIn} alt="" />
            </a>
            <a href="">
              <img src={LinkedIn} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
