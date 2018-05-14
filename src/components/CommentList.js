import React, { Component } from "react";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faThumbsDown from "@fortawesome/fontawesome-free-solid/faThumbsDown";
import faThumbsUp from "@fortawesome/fontawesome-free-solid/faThumbsUp";

class CommentList extends Component {
  renderComment(comment) {
    return (
      <div className="comment" key={comment.id}>
        <p>
          <strong>{comment.author}</strong>
          {comment.body}
          <button
            className="remove-comment"
            onClick={e => this.props.deleteComment(comment.parentId, comment.id)}
            >
            &times;
          </button>
        </p>
        <div
          onClick={e => this.props.fetchUpVoteComment(comment.id)}
          className="post-comment-upvote"
        >
          <FontAwesomeIcon className="post-comment-upvote" icon={faThumbsUp} />
        </div>
        <p className="post-comment-votes-count">{comment.voteScore}</p>
        <div
          onClick={e => this.props.fetchDownVoteComment(comment.id)}
          className="post-comment-downvote"
        >
          <FontAwesomeIcon
            className="post-comment-downvote"
            icon={faThumbsDown}
          />
        </div>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, comment, author);
    this.refs.commentForm.reset();
  }

  render() {
    const { postId, postComments } = this.props;
    console.log("CommentList postId", postId);
    console.log("CommentList postComments", postComments);
    return (
      <div className="comments">
        {postComments &&
          postComments.map(comment => this.renderComment(comment))}
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={e => this.handleSubmit(e)}
        >
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default CommentList;
