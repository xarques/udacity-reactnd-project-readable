import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PostList from './PostList';
import * as ReadableAPI from '../utils/ReadableAPI';


class App extends Component {
  state = {
    posts: []
  }

  upVote = post => {
    ReadableAPI.upVoteForPost(post).then(result => {
      console.log("Upvote", result);
      this.componentDidMount();
    });
  }
  
  downVote = post => {
    ReadableAPI.downVoteForPost(post).then(result => {
      console.log("downvote", result);
      this.componentDidMount();
    });
  }

  componentDidMount() {
    ReadableAPI.getAllPosts().then(posts => {
      //console.log(posts);
      this.setState({ posts });
    });
    // ReadableAPI.getPostsByCategory('react').then(categories => {
    //   console.log(categories);
    // });
  }

  render() {
    return (
      <div className="App">
        <PostList
          posts={this.state.posts}
          upVote={this.upVote}
          downVote={this.downVote}
        />
        {/* <Route exact path='/' render={() => (
        )}
        /> */}
      </div>
    );
  }
}

export default App;
