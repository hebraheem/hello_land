import React from 'react'
import {NavLink } from 'react-router-dom'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import RLogo from './images/RLogo.png'

const Footer =()=>{
    return (
      <footer className="footer">
        <div className="social">
          <img src={RLogo} alt="logo" />
          <p className="social-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque felis
            commodo ut nisi
          </p>
          <NavLink target="blank" to="" className="s-media">
            <AiFillLinkedin />
          </NavLink>
          <NavLink target="blank" to="" className="s-media">
            <AiFillFacebook />
          </NavLink>
          <NavLink target="blank" to="" className="s-media">
            <AiFillTwitterCircle />
          </NavLink>
          <NavLink target="blank" to="" className="s-media">
            <AiFillInstagram />
          </NavLink>
        </div>
        <div className="quick-links">
          <h2>Quick links</h2>
          <NavLink className="q-links" to="/">
            Home
          </NavLink>
          <NavLink className="q-links" to="/blog">
            Blog
          </NavLink>
          <NavLink className="q-links" to="/company">
            About Us
          </NavLink>
          <NavLink className="q-links" to="/contact">
            Contact
          </NavLink>
        </div>
        <div className="contact-add">
          <h2>Contact Us</h2>
          <p>
            Info@reatent.net (+234) 123456252287 1 Ayodele close, off mose-sofun
            Adekoya Estate, Ogba Lagos, Nigeria.
          </p>
        </div>
        <div className="content">
          <NavLink className="terms" to="/faq">
            FAQ
          </NavLink>
          <NavLink className="terms" to="privacy-policy">
            Privacy Policy
          </NavLink>
          <NavLink className="terms" to="tems-and-condition">
            Terms and Condition
          </NavLink>
        </div>
      </footer>
    );
}

export default Footer;