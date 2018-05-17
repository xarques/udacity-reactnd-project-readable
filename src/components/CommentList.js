import React, { Component } from "react";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faThumbsDown from "@fortawesome/fontawesome-free-solid/faThumbsDown";
import faThumbsUp from "@fortawesome/fontawesome-free-solid/faThumbsUp";
import faTrash from "@fortawesome/fontawesome-free-solid/faTrash";
import faEdit from "@fortawesome/fontawesome-free-solid/faEdit";

class CommentList extends Component {
  state = {
    editIndex: -1
  };

  handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props;
    const author = this.refs.author.value;
    const body = this.refs.body.value;
    this.props.addComment(postId, body, author);
    this.refs.commentForm.reset();
  }

  handleClick(e) {
    e.preventDefault();
    const commentId = this.refs.id.value;
    const body = this.refs.body.value;
    this.props.editComment(commentId, body);
    // Reset the state
    this.handleEditComment(-1);
  }

  handleEditComment(i) {
    this.setState(state => ({
      editIndex: i
    }));
  }

  renderComment(comment, i) {
    return <div className="comment" key={comment.id}>
        <p className="comment-author">
          <strong>{comment.author}</strong>
          <br />
          <span className="post-comment-votes-count">
            {" "}
            {comment.voteScore} vote{Math.abs(comment.voteScore) > 1 ? "s" : ""}
          </span>
        </p>
        <p className="comment-body">{comment.body}</p>
        <div onClick={e => this.props.fetchUpVoteComment(comment.id)} className="post-comment-upvote">
          <FontAwesomeIcon icon={faThumbsUp} />
        </div>
        <div onClick={e => this.props.fetchDownVoteComment(comment.id)} className="post-comment-downvote">
          <FontAwesomeIcon icon={faThumbsDown} />
        </div>
        <div onClick={e => this.handleEditComment(i)} className="post-comment-edit">
          <FontAwesomeIcon icon={faEdit} />
        </div>
        <div onClick={e => this.props.deleteComment(comment.parentId, comment.id)} className="post-comment-delete">
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>;
  }

  renderEditComment(comment) {
    if (comment) {
      return <form key={comment.id} ref="commentForm" className="comment-form" onSubmit={e => this.handleClick(e)}>
          <input type="text" ref="id" defaultValue={comment.id} hidden />

          <input className="comment-form-author" type="text" ref="author" defaultValue={comment.author} readOnly />
          <input className="comment-form-body" type="text" ref="body" defaultValue={comment.body} required/>
          <input type="submit" hidden />
        </form>;
    }
    return <form ref="commentForm" className="comment-form" onSubmit={e => this.handleSubmit(e)}>
        <input className="comment-form-author" type="text" ref="author" placeholder="author" required/>
        <input className="comment-form-body" type="textarea" ref="body" placeholder="Your comment" required/>
        <input type="submit" hidden />
      </form>;
  }

  render() {
    const { postComments } = this.props;
    const { editIndex } = this.state;
    return (
      <div className="comments">
        {postComments &&
          postComments.map(
            (comment, i) =>
              i === editIndex
                ? this.renderEditComment(comment, i)
                : this.renderComment(comment, i)
          )}
        {this.renderEditComment()}
      </div>
    );
  }
}

export default CommentList;
