import React, {Component} from 'react'
import axios from 'axios'

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

    render(){
        const questions = this.state.questions.map((q) => {
            return(
                <li key={q.id}><h3>{q.question}</h3><p>{q.answer}</p></li>
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