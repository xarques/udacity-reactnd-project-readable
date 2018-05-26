import React, { Component } from "react";
import { Link } from 'react-router-dom';

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faComment from "@fortawesome/fontawesome-free-solid/faCommentAlt";
import faTrash from "@fortawesome/fontawesome-free-solid/faTimes";
import faEdit from "@fortawesome/fontawesome-free-solid/faPencilAlt";
import faThumbsDown from "@fortawesome/fontawesome-free-solid/faCaretDown";
import faThumbsUp from "@fortawesome/fontawesome-free-solid/faCaretUp";

import CommentList from "./CommentList";
import NoMatch from "./NoMatch";
import { getPostedTime } from "../utils/Helpers";

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
    
    return <div className="container">
        <div className="post-details">
          {post && <div className="post-details-item">
              <div className="post-details-vote-container">
                <div className="post-details-vote">
                  <div onClick={e => fetchUpVotePost(post.id)} className="post-details-upvote">
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </div>
                  <div>{post.voteScore} </div>
                  <div onClick={e => fetchDownVotePost(post.id)} className="post-details-downvote">
                    <FontAwesomeIcon icon={faThumbsDown} />
                  </div>
                </div>
              </div>
              <div className="post-details-body-container">
                <div className="post-details-header">
                  <Link to={`/${post.category}`}>
                    <p className={`post-details-category post-category-${post.category}`} />
                  </Link>
                  <div className="post-details-author">
                    Posted by <strong> {post.author} </strong> {getPostedTime(post.timestamp)}
                  </div>
                  <Link className="post-details-edit" to={`/${post.category}/${post.id}/edit`}>
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                  <div onClick={e => this.handleDelete(post)} className="post-details-delete">
                    <FontAwesomeIcon icon={faTrash} />
                  </div>
                </div>
                <div className="post-details-content">
                  <Link className="post-details-title" to={`/${post.category}/${post.id}`}>
                <div><strong>{post.title}</strong></div>
                  </Link>
                  <div className="post-details-body">{post.body}</div>
                </div>
                <div className="post-details-comments">
                  <FontAwesomeIcon className="post-details-comments-icon" icon={faComment} />
                  <div className="post-details-comments-count">
                    {post.commentCount > 1
                      ? `${post.commentCount} Comments`
                      : "Comment"}{" "}
                  </div>
                </div>
                <div className="post-comments-container">
                  <CommentList postComments={postComments} {...this.props} />
                </div>
              </div>
            </div>}
        </div>
      </div>;
  }
}

export default PostDetails;
