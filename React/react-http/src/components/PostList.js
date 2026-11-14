import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor (props){
        super(props)

        this.state = {
            post: []
        }
    }

    componentDidMount() {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        axios.get('https://jsonplaceholder.typicode.com/postttts')
        .then(response => {
            console.log(response)
            // we are going to set response data to the posts array so this dot set state posts
            this.setState({post: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMessage: 'Error Retriving data'})
     } )
    }
  render() {
    //in the render method first destructuree the state property
    const {post} = this.state
    return(
      <div>
        Lists of Posts 
        {
            post.length ? 
            post.map(post => <div key={post.id}> {post.title} </div>) :
            null
        }
      </div>
    )
  }
}

export default PostList
