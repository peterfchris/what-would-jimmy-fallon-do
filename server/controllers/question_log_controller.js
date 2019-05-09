let questions = [
    {id: 1, question: 'What is the worst advice you\' ever been given?', answer: 'Don\'t wear an apron while cooking bacon.'},
    {id: 2, question: 'What\'s the best way to cook oatmeal?', answer: 'With a microwave. Stoves suck.'},
    {id: 3, question: 'What\'s your favorite bedtime story?', answer: 'The Monster at the End of This Book.'}
]

module.exports = {
    getAllQuestions: (req, res) => {
        res.status(200).send(questions)
    }

}