import React, {Component} from 'react'
import axios from 'axios'
import Question from './Question'

// THIS IS DONE... I THINK...

class AllQuestions extends Component{
    constructor() {
        super()
        this.state = {
            questions: []
        }
    }

    componentDidMount(){
        axios.get('/api/questions').then((res) => {
            this.setState({
                questions: res.data
            })
        })
    }

    handleUpdateQuestion = (id, question, answer) => {
        
        axios.put(`/api/updateQuestion/${id}`, {question: question, answer: answer}).then(response => {
            console.log(response)
            this.setState({questions: response.data})
        })
    }

    render(){
        const questions = this.state.questions.map((q, index) => {
            return(
                <Question key={index}
                    question={q}
                    updateQuestion={this.handleUpdateQuestion}
                />
            )
        })
        return(
            <div>
                <h1>FAQ</h1>
                <ul>
                    {questions}
                </ul>
            </div>
        )
    }
}

export default AllQuestions