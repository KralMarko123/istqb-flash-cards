import React from "react";
import questionsAndAnswers from "./data/QuesionsAndAnswers.json";
import "./styles.css";
import Card from "./Card/Card";
const App = () => {
	return (
		<div className="page">
			<h1 className="page_title">ISTQB Flash Cards</h1>

			<div className="card_container">
				{questionsAndAnswers.map((q) => (
					<Card id={q.Id} question={q.Question} answer={q.Answer} />
				))}
			</div>
		</div>
	);
};

export default App;
