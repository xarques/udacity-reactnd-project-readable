import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import PostList from "./containers/PostList";
import PostDetails from "./containers/PostDetails";
import Header from "./components/Header";

class App extends Component {
  // state = {
  //   posts: []
  // };

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

  render() {
    console.log("App props = ", this.props);
    console.log("App state = ", this.state);
    const { posts } = this.props;
    console.log("App posts = ", posts);

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <PostList posts={posts} />} />
          {/* <Route exact path="/:categoryId/:postId"
            render={() => (<Post posts={posts} />)
            }
          /> */}
          <Route
            exact
            path="/:categoryId/:postId"
            component={PostDetails}
            {...this.props}
          />
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

export default withRouter(App);
