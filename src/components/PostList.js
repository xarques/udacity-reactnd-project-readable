import React, { Component } from "react";
//import PropTypes from 'prop-types';

import Post from './Post';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts, fetchUpVotePost, fetchDownVotePost } = this.props;
    return (
      <div className="my-posts">
          <ul className="post-list">
            {posts &&
              posts.map(post => (
                <Post
                  key={post.id}
                  post={post}
                  fetchUpVotePost={fetchUpVotePost}
                  fetchDownVotePost={fetchDownVotePost}
                />
              ))}
          </ul>
        </div>
    )
  }
}

export default PostList;
