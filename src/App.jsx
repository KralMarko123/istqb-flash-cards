import React from "react";
import questionsAndAnswers from "./data/QuesionsAndAnswers.json";
import Card from "./Card/Card";
import "./styles.css";
const App = () => {
	return (
		<div className="page">
			<h1 className="page_title">ISTQB Flash Cards</h1>

			<div className="card_container">
				{questionsAndAnswers.map((q) => (
					<Card
						key={q.Id}
						id={q.Id}
						question={q.Question}
						answer={q.Answer}
						multipleAnswers={q.Answers}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
