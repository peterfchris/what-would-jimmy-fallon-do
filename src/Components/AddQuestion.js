import React, {Component} from 'react'
import axios from 'axios'

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
            [e.target.name]: e.target.value //figure out what this line does
        })
    }

    handleAddEvent = (e) => {
        e.preventDefault()
        axios.post('/api/AddQuestion', {
            name: this.state.question,
            answer: this.state.answer
        })
    }

    render(){
        return(
            <div>
                <h1>Asky Jimmy Anything</h1>
                <form onSubmit={this.handleAddEvent}>
                    <indput //this tag isn't working
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