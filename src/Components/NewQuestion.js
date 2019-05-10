import React, {Component} from 'react'
import axios from 'axios'

class NewQuestion extends Component{
    constructor(){
        super()
        this.state = {
            question: '',
            answer: null  
        }
    }

    handleUpdateInput = (e) => {
        this.setState({
            [e.target.question]: e.target.value 
        })
    }

    handleAddEvent = (e) => {
        e.preventDefault()
        axios.post('/api/AddQuestion', {
            question: this.state.question,
            answer: this.state.answer
        })
    }

    handleRandomAnswer = () => {
        axios.get('/api/random').then((res) => {
            this.setState({answer: res.data.a})
        })
    }

    render(){
        return(
            <div>
                <h1>What Would Jimmy Fallon Do?</h1>
                <form onSubmit={this.handleAddEvent}>
                    <input
                        placeholder="But keep it PG..."
                        name="question"
                        onChange={this.handleUpdateInput}/>
                    <button onClick={this.handleRandomAnswer}>Ask Jimmy Anything</button>
                </form>
                <h1>{this.state.answer}</h1>
            </div>
        )
    }
}

export default NewQuestion