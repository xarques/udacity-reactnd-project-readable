import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import PostList from "./containers/PostList";
import PostDetails from "./containers/PostDetails";
import Header from "./components/Header";
import CreatePost from "./containers/CreatePost";
import EditPost from "./containers/EditPost";
import NoMatch from "./components/NoMatch";

class App extends Component {
  render() {
    return <div className="App">
        <Header />
        <Switch>
          <Route exact path="/post/create" component={CreatePost}/>
          <Route exact path="/:category/:postId/edit" component={EditPost} />
          <Route exact path="/:category/:postId" component={PostDetails} />
          <Route exact path="/:category?" render={() => <PostList />} />
          <Route component={NoMatch} />
        </Switch>
      </div>;
  }
}

export default withRouter(App);
