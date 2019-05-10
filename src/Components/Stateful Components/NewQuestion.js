import React, {Component} from 'react'
import axios from 'axios'

class NewQuestion extends Component{
    constructor(){
        super()
        this.state = {
            question: '',
            answers: null,  
            id: null
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
            this.setState({
                answer: res.data.a,
                id: res.data.id
            })
        })
    }

    render(){
        return(
            <div>
                <header>
                <nav></nav>
                    <h1>What Would Jimmy Fallon Do?</h1>
                    <iframe  src="https://giphy.com/embed/l3q2tkUqM3SangJj2" width="960" height="476" frameBorder="0" allowFullScreen></iframe>  
                </header>
                <form onSubmit={this.handleAddEvent}>
                    <input
                        placeholder="But keep it PG..."
                        name="question"
                        onChange={this.handleUpdateInput}/>
                    <button className="AJA" onClick={this.handleRandomAnswer}>Ask Jimmy Anything</button>
                </form>
                    {
                    this.state.id === 10 ? <iframe src={this.state.answer} className="Ew" width="480" height="236" frameBorder="0" allowFullScreen></iframe>
                    :
                    <h3 className="random">{this.state.answer}</h3>
                    
                    }
            </div>
        )
    }
}

export default NewQuestion