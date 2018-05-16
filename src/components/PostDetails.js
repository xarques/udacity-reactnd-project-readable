import React, { Component } from "react";
import { Link } from 'react-router-dom';

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faComment from "@fortawesome/fontawesome-free-solid/faCommentAlt";
import faThumbsDown from "@fortawesome/fontawesome-free-solid/faThumbsDown";
import faThumbsUp from "@fortawesome/fontawesome-free-solid/faThumbsUp";
import faTrash from "@fortawesome/fontawesome-free-solid/faTrash";
import faEdit from "@fortawesome/fontawesome-free-solid/faEdit";

import CommentList from "./CommentList";
import NoMatch from "./NoMatch";

class PostDetails extends Component {
  componentDidMount = () => {
    const { postId, fetchPost, fetchComments } = this.props;
    fetchPost(postId);
    fetchComments(postId);
  };

  handleDelete(post) {
    this.props.deletePost(post.id);
    // Don't know how to remove the current root from the history
    // this.props.history.replace(`/${post.category}/${post.id}`, "/");
    this.props.history.push('/');
  }

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
    return <div className="post-details">
        {post && <div>
            <div className="post-details-item" key={post.id}>
              <p className={`post-details-category post-category-${post.category}`}>
                T
              </p>
              <div className="post-details-title">
                <p>{post.title}</p>
                <p className="post-details-author">
                  {post.voteScore} vote{Math.abs(post.voteScore) > 1 ? "s" : ""} - Submitted by <strong
                  >
                    {post.author}
                  </strong>
                </p>
              </div>
              <div onClick={e => fetchUpVotePost(post.id)} className="post-details-upvote">
                <FontAwesomeIcon icon={faThumbsUp} />
              </div>
              <div onClick={e => fetchDownVotePost(post.id)} className="post-details-downvote">
                <FontAwesomeIcon icon={faThumbsDown} />
              </div>
              <Link to={`/${post.category}/${post.id}/edit`}>
                <FontAwesomeIcon className="post-details-edit" icon={faEdit} />
              </Link>
              <div onClick={e => this.handleDelete(post)} className="post-details-delete">
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </div>
            <div className="post-details-body">
              <p>{post.body}</p>
            </div>
            <div className="post-comments-list">
              <CommentList postComments={postComments} {...this.props} />
            </div>
            <div className="post-details-comments">
              <FontAwesomeIcon className="post-details-comments-icon" icon={faComment} />
              <span className="post-details-comments-count">{post.commentCount}</span>
            </div>
          </div>}
        {!post && <NoMatch />}
      </div>;
  }
}

export default PostDetails;
