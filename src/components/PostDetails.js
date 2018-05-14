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

import CommentList from "./CommentList";

class PostDetails extends Component {
  componentDidMount = () => {
    const { postId, fetchPost, fetchComments } = this.props;
    fetchPost(postId);
    fetchComments(postId);
  };

  render() {
    const {
      posts,
      comments,
      postId,
      fetchUpVotePost,
      fetchDownVotePost
    } = this.props;
    const postComments = comments[postId] ? comments[postId] : [];
    const post = posts && posts.find(post => post.id === postId);
    console.log("PostDetails props ", this.props);
    console.log("PostDetails comments ", comments);
    return <div className="my-post">
        {post && <div className="post-details-item" key={post.id}>
            <div className="post-details-title">{post.title}</div>
            <p className="post-details-author">
              by <strong>{post.author}</strong>
            </p>
            <div className="post-details-body">{post.body}</div>
            <p className={`post-category post-category-${post.category}`}>
              T
            </p>
            <FontAwesomeIcon className="post-details-comments" icon={faComment} />
            <p className="post-comments-count">{post.commentCount}</p>
            <div onClick={e => fetchUpVotePost(post.id)} className="post-details-upvote">
              <FontAwesomeIcon className="post-details-upvote" icon={faThumbsUp} />
            </div>
            <p className="post-details-votes-count">{post.voteScore}</p>
            <div onClick={e => fetchDownVotePost(post.id)} className="post-details-downvote">
              <FontAwesomeIcon className="post-details-downvote" icon={faThumbsDown} />
            </div>
            <CommentList postComments={postComments} {...this.props} />
          </div>}
      </div>;
  }
}

export default PostDetails;
