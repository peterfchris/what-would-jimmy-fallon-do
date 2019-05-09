import React, {Component} from 'react'
import axios from 'axios'

// THIS DOESN'T WORK YET

class AddQuestion extends Component{
    constructor(){
        super()
        this.state = {
            question: '',
            answer: null  //remember to come back and fix this, it should be randomly generated
        }
    }

    handleUpdateInput = (e) => {
        this.setState({
            [e.target.question]: e.target.value //figure out what this line does
        })
    }

    handleAddEvent = (e) => {
        e.preventDefault()
        axios.post('/api/AddQuestion', {
            question: this.state.question,
            answer: this.state.answer
        })
    }

    render(){
        return(
            <div>
                <h1>Ask Jimmy Anything</h1>
                <form onSubmit={this.handleAddEvent}>
                    <input //this tag isn't working
                        placeholder="As long as it's PG rated..."
                        name="question"
                        onChange={this.handleUpdateInput}/>
                    <button>Ask Away!</button>
                </form>
            </div>
        )
    }
}

export default AddQuestion