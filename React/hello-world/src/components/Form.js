import React, { Component } from 'react'

class Form extends Component {
    
    constructor(props) {
        super(props)
        this.state ={// adding a new state property that is the intializing it to an empty string  
            username: '',
            comments: '',
            topic: 'react'
        }
    }

    handlerUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) =>{
        this.setState({
            comments: event.target.value
        })  
    }

    handleTopicChange  = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault() // to prevent the default behaviour of the form which is to refresh the page
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                <label> Username: </label>
                <input type ='text' value = {this.state.username} onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <label> Comments:  </label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <label> Topic: </label>
                <select value={this.state.topic} onChange={this.handleTopicChange} >
                    <option value="react"> React </option>
                    <option value="angular">Angular</option>
                    <option value="vue"> Vue </option>
                </select>
                <button type="submit"> Submit </button>
            </form>
        )
    }
}

export default Form