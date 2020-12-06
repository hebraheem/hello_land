import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactUs from './images/ContactUs.png'
import {NavLink } from 'react-router-dom';
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import Ellipse24 from "./images/Ellipse24.png";
import Ellipse25 from "./images/Ellipse25.png";

const Contact = ()=>{
    return (
      <section>
        <Navbar />
        <div className="contact-us">
          <div className="contact-text">
            <h1>Contact Us</h1>
            <p className="light">
              Get in touch with our ever ready customer agents.
            </p>
            <p className="bold">Phone call and Whatsapp (Lagos)</p>

            <p className="light">
              <a href="tel:">+234-00000000000</a>
            </p>
            <p className="bold">Phone call and Whatsapp (Oyo)</p>
            <p className="light">
              <a href="tel:">+234-00000000000</a>
            </p>
            <p className="bold">Phone call and Whatsapp (Ogun)</p>
            <p className="light">
              <a href="tel:">+234-00000000000</a>
            </p>
            <p className="bold">General Enquires</p>
            <p className="light">
              <a href="mailto:">info@reatent.com</a>
            </p>
            <p className="bold">Customer Care Service</p>
            <p className="light">
              <a href="mailto:">Support@reatent.com</a>
            </p>
            <NavLink target="blank" to="" className="c-media">
              <AiFillLinkedin />
            </NavLink>
            <NavLink target="blank" to="" className="c-media">
              <AiFillFacebook />
            </NavLink>
            <NavLink target="blank" to="" className="c-media">
              <AiFillTwitterCircle />
            </NavLink>
            <NavLink target="blank" to="" className="c-media">
              <AiFillInstagram />
            </NavLink>
          </div>
          <div className="contact-img">
            <div className="img-box">
              <img src={ContactUs} alt="contact us" />
              <img
                src={Ellipse24}
                alt=""
                className="elipse4"
                style={{ width: "15%", height: "18%" }}
              />
              <img
                src={Ellipse25}
                alt=""
                className="elipse5"
                style={{ width: "10%", height: "13%" }}
              />
            </div>
          </div>
        </div>
        <Footer />
      </section>
    );
}

export default Contact;