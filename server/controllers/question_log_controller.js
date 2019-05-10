



let questions = [
    {id: 1, question: 'What is the worst advice you\'ve ever been given?', answer: 'If you see a shark, swim towards it to establish dominance.'},
    {id: 2, question: 'How do you cook oatmeal?', answer: 'With a microwave. If you need to ask, you should not be using a stove.'},
    {id: 3, question: 'What\'s your favorite song?', answer: 'Poop in a jar'}
]

const randomAnswers = [
    {id: 1, a: 'Just play a game of catchphrase'},
    {id: 2, a: 'Never eat mayonaise.  It\'s disgusting.'},
    {id: 3, a: 'Yes'},
    {id: 4, a: 'No, that\'s a bad idea.'},
    {id: 5, a: 'When in doubt, annoy your mentors.'},
    {id: 6, a: 'Maybe'},
    {id: 7, a: 'I wouldn\'t say no.'},
    {id: 8, a: 'If you have to'},
    {id: 9, a: 'Fake News'},
    {id: 10, a: `https://giphy.com/embed/gMDKyrWInxOhO`}
]

module.exports = {
    getAllQuestions: (req, res) => {
        res.status(200).send(questions)
    },
    getRandomAnswer: (req, res) => {
        let random = Math.floor(Math.random()*(randomAnswers.length)) 
            res.status(200).send(randomAnswers[random])
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
        for(let i = 0; i < questions.length; i++) {
            if (questions[i].id === +id) {
                questions[i].question = question;
                questions[i].answer = answer;
            }
        }
        res.status(200).send(questions)
    },
    deleteQuestion: (req, res) => {
        let {id} = req.params
        let index = questions.findIndex(question => question.id === parseInt(id))
        if (index !== -1) questions.splice(index, 1)
        res.send(questions)
    }
}