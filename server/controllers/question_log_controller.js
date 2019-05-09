let questions = [
    {id: 1, question: 'What is the worst advice you\' ever been given?', answer: 'Don\'t wear an apron while cooking bacon.'},
    {id: 2, question: 'What\'s the best way to cook oatmeal?', answer: 'With a microwave. Stoves suck.'},
    {id: 3, question: 'What\'s your favorite bedtime story?', answer: 'The Monster at the End of This Book.'}
]
let id = 0

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
    // updateQuestion: (req, res) => {
    //     let {questions} = req.params
        // FIGURE OUT HOW THIS WORKS 
    // },
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