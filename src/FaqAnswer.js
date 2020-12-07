import React, { useState } from "react";
import data from "./data";
import Question from "./Question";
function FaqAnswer() {
  const [questions] = useState(data);
  return (
    <main>
      <section className="contain-question">
        <section className="info">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </section>
    </main>
  );
}

export default FaqAnswer;
