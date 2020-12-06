import React from "react";
import { useGlobalContext } from "./context";
import Ellipse23 from './images/Ellipse23.png';
import Ellipse24 from "./images/Ellipse24.png";
import Ellipse25 from "./images/Ellipse25.png";

const Modal = () => {
  const { isModalOpen, CloseModal } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h1>Congratulations!</h1>
        <p>
          Welcome onboard, <br /> We would contact you via Email, within the
          next 12 hours.
        </p>
        <p>
          if you need to speak to an agent urgently, kindly call either <br />
          of the number on our contact.
        </p>
        <img src={Ellipse23} alt="" className="elipse23" style={{width: "25%"}}/>
        <img src={Ellipse24} alt="" className="elipse24" style={{width: "17%"}}/>
        <img src={Ellipse25} alt="" className="elipse25" style={{width: "9%"}}/>
        <button className="close-modal-btn" onClick={CloseModal}>
          Done
        </button>
      </div>
    </div>
  );
};

export default Modal;
