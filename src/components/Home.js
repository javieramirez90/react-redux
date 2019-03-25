import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
 
class Home extends Component {

  state = {
    posts: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({
          posts: res.data.slice(0,10)
        })
      })
      .catch(e => console.log(e))
  }

  render(){
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return(
          <Link to={'/'+ post.id} key={post.id}>
            <div className="post card " >
              <img src={ Pokeball } alt="A pokeball"/>
              <div className="card-content"> 
                <span className="card-title red-text">{post.title}</span>
                <p>{post.body}</p>
              </div>
            </div>
          </Link>
        )
      })
    )
    : ( 
    <div className="center">
      No post yet
    </div>
    )

    return(
      <div className="container home">
        <h4 className="center">Home</h4>
        { postList }
      </div>
    )
  }
  
}

export default Home