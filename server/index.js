const express = require('express')
const {json} = require('body-parser')
const qstn_ctrl = require('./controllers/question_log_controller')
const app = express()

app.use(express.json())

app.get('/api/questions', qstn_ctrl.getAllQuestions)
app.post('/api/addQuestion', qstn_ctrl.addQuestion)
app.put('/api/updateQuestion/:id', qstn_ctrl.updateQuestion)
app.delete('/api/deleteQuestion/:id', qstn_ctrl.deleteQuestion)

const PORT = 4040
app.listen(PORT, () => console.log(`nothing is screwed up on ${PORT}`))