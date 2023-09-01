import React from 'react';
import { getRandomArbitraryWithinRange } from '../util/helperFunctions';
import './Card.css';

const Card = ({ id, question, answer, multipleAnswers }) => {
  const classNames = `card ${multipleAnswers ? 'multiple' : ''}`;
  const xCoordinateTranslation = getRandomArbitraryWithinRange(-1000, 1000);
  const yCoordinateTranslation = getRandomArbitraryWithinRange(-1000, 1000);
  const delayFactor = getRandomArbitraryWithinRange(1, 20);

  return (
    <div
      className={classNames}
      style={{
        transform: `translate(${xCoordinateTranslation}px, ${yCoordinateTranslation}px)`,
        animationDelay: `${delayFactor * 0.05}s`
      }}
    >
      <div className="card_content">
        <div className="card_front">
          <span className="card_id">{id}</span>
          <h1 className="card_question">{question}</h1>
        </div>

        <div className="card_back">
          <p className="card_answer">{answer}</p>

          <ul className="multiple_container">
            {multipleAnswers?.map((a) => (
              <li key={a} className="mutliple_answer">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
