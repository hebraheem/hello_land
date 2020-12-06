import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Modal from "./Modal";
import { useGlobalContext } from "./context";


const GetStarted = ()=>{
  const { OpenModal} = useGlobalContext();
    return (
      <section>
        <Navbar />
        <div className="get-started-section">
          <div className="getstarted-form">
            <h1>Get started</h1>
            <p>To get our amazing offers we’ve got to know you.</p>
            <h3>Personal Information</h3>
            
              <button className="get-started-btn" onClick={() => OpenModal()}>
                Get Started
              </button>

          </div>
        </div>
        <Modal />
        <Footer />
      </section>
    );
}

export default GetStarted;