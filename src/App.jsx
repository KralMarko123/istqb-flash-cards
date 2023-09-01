import React, { useEffect, useState } from 'react';
import questionsAndAnswers from './data/QuesionsAndAnswers.json';
import chapters from './data/Chapters.json';
import Card from './Card/Card';
import { filterQuestions } from './util/helperFunctions';
import './styles.css';

const App = () => {
  const [cards, setCards] = useState(questionsAndAnswers);
  const [chapterFilters, setChapterFilters] = useState({
    FOT: false,
    TTSDLC: false,
    ST: false,
    TAD: false,
    MTA: false,
    TT: false
  });
  const toggleChapterFilter = (chapterKey) => {
    setChapterFilters({
      ...chapterFilters,
      [`${chapterKey}`]: !chapterFilters[`${chapterKey}`]
    });
  };

  useEffect(() => {
    setCards(filterQuestions(chapterFilters));
  }, [chapterFilters]);

  return (
    <div className="page">
      <h1 className="page_title">ISTQB Flash Cards</h1>

      <div className="chapters_container">
        {chapters.map((c) => (
          <div
            key={c.Key}
            className={`chapter ${
              chapterFilters[`${c.Key}`] === true ? 'selected' : ''
            }`}
            onClick={() => toggleChapterFilter(c.Key)}
          >
            {c.Chapter}
          </div>
        ))}
      </div>

      <div className="card_container">
        {cards.map((q) => (
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
