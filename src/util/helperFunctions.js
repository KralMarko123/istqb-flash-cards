import questionsAndAnswers from "../data/QuesionsAndAnswers.json";

export const getRandomArbitraryWithinRange = (min, max) => Math.random() * (max - min) + min;
export const filterQuestions = (filters) => {
	const isAnyfilterApplied = Object.values(filters).some((v) => v === true);

	if (!isAnyfilterApplied) return questionsAndAnswers;

	let filteredQuestionsAndAnswers = [];
	for (const [key, value] of Object.entries(filters)) {
		if (value === true) {
			filteredQuestionsAndAnswers = filteredQuestionsAndAnswers.concat(
				questionsAndAnswers.filter((q) => q.ChapterKey === key)
			);
		}
	}

	console.log(filteredQuestionsAndAnswers);
	return filteredQuestionsAndAnswers;
};
