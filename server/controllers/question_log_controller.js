let questions = [
    {id: 1, question: 'What is the worst advice you\' ever been given?', answer: 'Don\'t wear an apron while cooking bacon.'},
    {id: 2, question: 'What\'s the best way to cook oatmeal?', answer: 'With a microwave. Stoves suck.'},
    {id: 3, question: 'What\'s your favorite bedtime story?', answer: 'The Monster at The End of This Book.'}
]

const randomAnswers = [
    {id: 1, a: 'I like to settle these sorts of issues with a good old fashioned game of catchphrase'},
    {id: 2, a: 'Never eat mayonaise.  It\'s disgusting.'},
    {id: 3, a: 'Yes'},
    {id: 4, a: 'No, that\'s a bad idea.'},
    {id: 5, a: 'When in doubt, annoy your mentors.'},
    {id: 6, a: 'Maybe'},
    {id: 7, a: 'I wouldn\'t say no.'},
    {id: 8, a: 'If you have to'}
]

module.exports = {
    getAllQuestions: (req, res) => {
        res.status(200).send(questions)
    },
    addQuestion: (req, res) => {
        let id = questions[questions.length - 1].id + 1
        const newQuestion = {
            id: id,
            question: req.body.question,
            answer: req.body.answer
        }
        questions = [...questions, newQuestion]
        res.status(200).send(newQuestion)
    },
    updateQuestion: (req, res) => {
        let {id} = req.params
        let {question, answer} = req.body
        console.log(questions)

        for(let i = 0; i < questions.length; i++) {
            if (questions[i].id === +id) {
                questions[i].question = question;
                questions[i].answer = answer;
            }
        }
        console.log(questions)
        res.status(200).send(questions)
    },
    deleteQuestion: (req, res) => {
        let {id} = req.params
        let index = questions.findIndex(question => question.id === parseInt(id))
        if (index !== -1) books.splice(index, 1)
        res.send(questions)
        
        // console.log(questions)
        // const {id} = req.params
        // questions = questions.filter((questions) => questions.id !== +id)
        // res.status(200).send(questions)
    }
}