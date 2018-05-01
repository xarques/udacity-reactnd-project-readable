import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import PostList from './PostList';
import Post from './Post';
import Header from './Header';
//import * as ReadableAPI from '../utils/ReadableAPI';
import * as actionCreators from '../actions';


class App extends Component {
  state = {
    posts: []
  }

  // upVote = post => {
  //   ReadableAPI.upVoteForPost(post).then(result => {
  //     console.log("Upvote", result);
  //     this.componentDidMount();
  //   });
  // }

  // downVote = post => {
  //   ReadableAPI.downVoteForPost(post).then(result => {
  //     console.log("downvote", result);
  //     this.componentDidMount();
  //   });
  // }

  // componentDidMount() {
  //   ReadableAPI.getAllPosts().then(posts => {
  //     console.log(posts);
  //     posts.forEach(post => {
  //       ReadableAPI.getComments(post).then(comments => {
  //         console.log(comments);
  //       })
  //     })
  //     this.setState({ posts });
  //   });
  //   ReadableAPI.getAllCategories().then(categories => {
  //     console.log('categories' ,categories);
  //   });
  // }

  componentDidMount() {
    console.log("componentDidMount", this.props);
    this.props.fetchPosts();
    // ReadableAPI.getAllPosts().then(posts => {
    //   console.log(posts);
    //   posts.forEach(post => {
    //     ReadableAPI.getComments(post).then(comments => {
    //       console.log('comments', comments);
    //     })
    //   })
    //   this.setState({ posts });
    // });
    // ReadableAPI.getAllCategories().then(categories => {
    //   console.log('categories' ,categories);
    // });
  };

  render() {
    console.log('App props = ', this.props);
    const { posts } = this.props;
    console.log('App posts = ', posts);

    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/"
            render={
            () => (
              <PostList
                {...this.props}
                />
              )
            }
          />
          {/* <Route exact path="/:categoryId/:postId"
            render={() => (<Post posts={posts} />)
            }
          /> */}
          <Route exact path="/:categoryId/:postId"
            component={Post} {...this.props}>
          </Route>
        </Switch>

        {/* <PostList
          {...this.props}
          // posts={this.props.posts}
          // upVote={this.upVote}
          // downVote={this.downVote}
        /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
};

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
