import React, { Component } from "react";
// import { bindActionCreators } from 'redux';

// import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
// import { Route, Switch, withRouter } from 'react-router-dom';

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faComment from "@fortawesome/fontawesome-free-solid/faCommentAlt";
//import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import faThumbsDown from "@fortawesome/fontawesome-free-solid/faThumbsDown";
import faThumbsUp from "@fortawesome/fontawesome-free-solid/faThumbsUp";

// import * as actionCreators from "../actions";

class PostDetails extends Component {
  componentDidMount = () => {
    const { postId } = this.props.match.params;
    this.props.fetchPost(postId);
  };

  render() {
    const { posts, fetchUpVotePost, fetchDownVotePost } = this.props;
    const { postId } = this.props.match.params;
    const post = posts && posts.find(post => post.id === postId);

    return (
      <div className="my-post">
        {post && (
          <div className="post-item" key={post.id}>
            <div className="post-title">{post.title}</div>
            <p className="post-author">
              by <strong>{post.author}</strong>
            </p>
            <p className={`post-category post-category-${post.category}`}>T</p>
            <FontAwesomeIcon className="post-comments" icon={faComment} />
            <p className="post-comments-count">{post.commentCount}</p>
            <div onClick={e => fetchUpVotePost(post)} className="post-upvote">
              <FontAwesomeIcon className="post-upvote" icon={faThumbsUp} />
            </div>
            <p className="post-votes-count">{post.voteScore}</p>
            <div
              onClick={e => fetchDownVotePost(post)}
              className="post-downvote"
            >
              <FontAwesomeIcon className="post-downvote" icon={faThumbsDown} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default PostDetails;
