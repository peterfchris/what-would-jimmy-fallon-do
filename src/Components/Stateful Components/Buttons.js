import React, { Component } from 'react'
import axios from 'axios'

class Buttons extends Component {
    constructor() {
        super()
        this.state = {
            edit: false,
            question: '',
            answer: ''
        }
    }

    handleToggleEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSave = () => {
        let {id} = this.props.question
        let {question, answer} = this.state
        this.props.updateQuestion(id, question, answer)
        this.handleToggleEdit()
    }

    handleDeleteQuestion = () => {
        axios.delete(`/api/deleteQuestion/${this.props.question.id}`)
        .then(res => {
            this.props.deleteQuestion(res.data)
        })
    }

    render() {
        return <li>
            <h2 className="JFQ">{this.props.question.question}</h2>
            <h3 className="JFQ-2">{this.props.question.answer}</h3>
            {
                this.state.edit ?
                    <div>
                        <input type="text" name="question" onChange={this.handleChange}/>
                        <input type="text" name="answer" onChange={this.handleChange} />
                        <button onClick={this.handleSave}>Save</button>
                    </div>
                    :
                    <button onClick={this.handleToggleEdit}>Edit</button>
            }
            <button onClick={this.handleDeleteQuestion}>Delete</button>
        </li>
    }
}

export default Buttons