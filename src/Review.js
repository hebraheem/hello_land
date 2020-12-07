import React, { useState } from "react";
import { reviews } from "./data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {ImQuotesLeft} from 'react-icons/im';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, text } = reviews[index];

  const checkLength = (length) => {
    if (length > reviews.length - 1) {
      return 0;
    }
    if (length < 0) {
      return reviews.length - 1;
    }
    return length;
  };

  const nextPerson = () => {
    setIndex((index) => {
      const newPerson = index + 1;
      return checkLength(newPerson);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      const newPerson = index - 1;
      return checkLength(newPerson);
    });
  };

  return (
    <article className="review">
      <span className="quote-icon">
        <ImQuotesLeft />
      </span>
      <div>
        <p className="info">{text}</p>
        <div className="card-person">
          <p className="card-avatar"></p>
          <h4 className="author">{name}</h4>
        </div>
        <button onClick={prevPerson} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={nextPerson} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};

export default Review;
