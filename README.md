# ISTQB Flash Cards

> A simple site which contains flashcards covering different sections of the [CTFL syllabus](https://www.istqb.org/certifications/certified-tester-foundation-level). The questions and materials used when writing the same are alligned with version 4.0 of the certification.

## [Link to the live site here](https://kralmarko123.github.io/istqb-flash-cards/)

### How to use:

The site is simple, hovering over each card reveals its answer and using the different filters present ( _work in progress_ ) shows only cards which relate to that specific chapter of the syllabus.

If you wish to add your own question feel free to download the code and add objects to the [Questions and Answers](./src/data/QuesionsAndAnswers.json) array in the format:

#### Example Question:

```js
    {
		"Id": 1,
		"Question": "This would be on the front of the card?",
		"Answer": "Yes, also this piece of text would show up on the back as a single paragraph",
		"Answers": [
			"Each answer here",
			"Will show up as a bullet point",
			"On the back of the card"
		],
		"ChapterKey": "FOT"
	}
```

#### Variables:

- `Id` is a unique integer which should be incremented by one for each question present in the array
- `Question` is a string which appears as the title on the front of the card, posing as the question
- `Answer` is a single paragraph which appears at the back of the card
- `Answers` is an array of strings in which every string appears as a bullet point at the back of the card
- `ChapterKey` should be one of the keys present in the [Chapters array](./src/data/Chapters.json). This enables filtering cards by their respective chapter

_Note_: If any of these variables are not defined, then that element will simply not be rendered on the screen for that card.
