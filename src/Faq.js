import React from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import FaqAnswer from './FaqAnswer'
import StylishFeel from './images/StylishFeel.png'
import FaqPage from './images/FaqPage.png'

const Faq = () => {
  return <section>
      <Navbar />
      <div className="faq-banner">
          <img src={FaqPage} alt="faq-banner" />
          <h1>Frequently Asked Question</h1>
      </div>
      <div className="faq-section" style={{ background: `url(${StylishFeel})` }}>
        <FaqAnswer />
      </div>
      <Footer />
  </section>;
};

export default Faq;
