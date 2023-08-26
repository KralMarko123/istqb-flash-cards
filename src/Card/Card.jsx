import React from "react";
import './Card.css'

const Card = ({ id, question, answer }) => {
	return (
		<div className="card">
			<div className="card_content">
				<div className="card_front">
					<span className="card_id">{id}</span>
					<h1 className="card_question">{question}</h1>
				</div>

				<div className="card_back">
					<p className="card_answer">{answer}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
