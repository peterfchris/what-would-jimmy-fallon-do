import React, {Component} from 'react'
import axios from 'axios'
import Buttons from './Buttons'


class QuestionsDisplay extends Component{
    constructor() {
        super()
        this.state = {
            questions: []
        }
    }

    componentDidMount(){
        axios
        .get('/api/questions')
        .then((res) => {
            this.setState({
                questions: res.data
            })
        })
    }

    handleUpdateQuestion = (id, question, answer) => { 
        axios
        .put(`/api/updateQuestion/${id}`, {question, answer})
        .then(response => {
            this.setState({questions: response.data})
        })
    }

    handleAddQuestion = (newQ) => {
        this.setState({questions:[...this.state.questions, newQ]})
    }

    handleDeleteQuestion = (data) => {
        this.setState({
            questions: data
        })
    }

    render(){
        const questions = this.state.questions.map((q, index) => {
            return(
                <Buttons key={index}
                    question={q}
                    updateQuestion={this.handleUpdateQuestion}
                    deleteQuestion={this.handleDeleteQuestion}
                />
            )
        })
        
        return(
            <div>
                <h1>Questions Jimmy Has Answered</h1>
                <ul>
                    {questions}
                </ul>
                
            </div>
        )
    }
}

export default QuestionsDisplay