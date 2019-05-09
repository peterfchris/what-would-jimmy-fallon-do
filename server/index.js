const express = require('express')
const {json} = require('body-parser')
const qstn_ctrl = require('./controllers/question_log_controller')
const app = express()

app.use(express.json())



const PORT = 4040
app.listen(PORT, () => console.log(`nothing is screwed up on ${PORT}`))