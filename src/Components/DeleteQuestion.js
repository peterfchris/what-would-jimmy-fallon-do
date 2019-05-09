import React, {Component} from 'react'
import axios from 'axios'

class DeleteQuestions extends Component{
    constructor(props) {
        super(props)
        this.state = {
            questions: [],
            question: '',
            answer: ''
        }
    }

    handleDeleteQuestion = (data) => {
        this.setState({
            questions: data
        })
    }

    render(){
        // const mappedQuestions = this.state.questions.map((element, i) => {
        //     return(
        //         < //Identifier goes here
        //             key={i}
        //             questions={element}
        //             deleteQuestion={this.handleDeleteQuestion} />
        //     )
        // })
        return(
            <div>
                
            </div>
        )
    }
}

export default DeleteQuestions