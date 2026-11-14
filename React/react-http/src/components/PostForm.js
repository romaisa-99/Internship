
import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: '',
            post: null,
            errorMessage: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault()

        console.log(this.state)

        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response)
                this.setState({ post: response.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    errorMessage: 'Error Retrieving Data'
                })
            })
    }

    render() {
        const { userId, title, body, post, errorMessage } = this.state

        return (
            <div>
                <form onSubmit={this.submitHandler}>

                    <div>
                        <input
                            type="text"
                            name="userId"
                            value={userId}
                            onChange={this.changeHandler}
                            placeholder="Enter User ID"
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={this.changeHandler}
                            placeholder="Enter Title"
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            name="body"
                            value={body}
                            onChange={this.changeHandler}
                            placeholder="Enter Body"
                        />
                    </div>

                    <button type="submit">Submit</button>

                </form>

                {post && <p>Post submitted successfully! ID: {post.id}</p>}

                {errorMessage && <p>{errorMessage}</p>}
            </div>
        )
    }
}

export default PostForm
