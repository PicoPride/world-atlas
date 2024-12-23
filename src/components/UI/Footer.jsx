
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsBrowserChrome } from "react-icons/bs";
import { NavLink } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">

            <div className="col-lg-12">
              <div className="footer-upper-content">
                <div className="footer-logo">
                <NavLink to={"/"}>
                {" "}
                <h2>WorldAtlas</h2>{" "}
              </NavLink>
                </div>
                <div className="footer-menu">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/country">Country</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </div>
              </div>
            </div>


          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 footer-content">
            <div className="footer-content">
              <p>&copy; 2024 WorldAtlas. All rights reserved.</p>
            </div>
            <div className="footer-social">
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="social-icon">
              <FaXTwitter />
              </a>
              <a href="https://www.shashank.thedigibuild.com" target="_blank" rel="noreferrer" className="social-icon">
              <BsBrowserChrome />
              </a>
              </div>
          </div>
        </div>
      </div>
      
    </footer>
  )
}


