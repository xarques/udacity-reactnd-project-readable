import React, { Component } from "react";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faTrash from "@fortawesome/fontawesome-free-solid/faTimes";
import faEdit from "@fortawesome/fontawesome-free-solid/faPencilAlt";
import faThumbsDown from "@fortawesome/fontawesome-free-solid/faCaretDown";
import faThumbsUp from "@fortawesome/fontawesome-free-solid/faCaretUp";

import { getPostedTime } from "../utils/Helpers";

class CommentList extends Component {
  state = {
    editIndex: -1
  };

  handleCreate(e) {
    e.preventDefault();
    const { postId } = this.props;
    const author = this.refs.author.value;
    const body = this.refs.body.value;
    this.props.addComment(postId, body, author);
    this.refs.commentForm.reset();
  }

  handleUpdate(e) {
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
    const { fetchUpVoteComment, fetchDownVoteComment } = this.props;
    return <div className="comment" key={comment.id}>
        <div className="comment-vote-container">
          <div className="comment-vote">
            <div onClick={e => fetchUpVoteComment(comment.id)} className="comment-upvote">
              <FontAwesomeIcon icon={faThumbsUp} />
            </div>
            <div>{comment.voteScore} </div>
            <div onClick={e => fetchDownVoteComment(comment.id)} className="comment-downvote">
              <FontAwesomeIcon icon={faThumbsDown} />
            </div>
          </div>
        </div>
        <div className="comment-body-container">
          <div className="comment-header">
            <div className="comment-author">
              Commented by <strong> {comment.author} </strong> {getPostedTime(comment.timestamp)}
            </div>
            <div onClick={e => this.handleEditComment(i)} className="comment-edit">
              <FontAwesomeIcon icon={faEdit} />
            </div>
            <div onClick={e => this.props.deleteComment(comment.parentId, comment.id)} className="comment-delete">
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
          <div className="comment-body">{comment.body}</div>
        </div>
      </div>;
  }

  renderEditComment(comment) {
    if (comment) {
      return <form key={comment.id} className="comment-form" ref="commentForm" onSubmit={e => this.handleUpdate(e)}>
          <input type="text" ref="id" defaultValue={comment.id} hidden />
          <div>
            <label htmlFor="author">Comment from </label>
            <input className="comment-form-author" type="text" ref="author" defaultValue={comment.author} readOnly />
          </div>
          <textarea className="comment-form-body" type="text" ref="body" defaultValue={comment.body} required />
          <input className="comment-form-submit" type="submit" value="Modify Comment" />
        </form>;
    }
    return <form ref="commentForm" className="comment-form" onSubmit={e => this.handleCreate(e)}>
        <div>
          <label htmlFor="author">Comment as </label>
          <input className="comment-form-author" type="text" ref="author" placeholder="author" required/>
        </div>
        <textarea className="comment-form-body" ref="body" placeholder="What are your thoughts ?" required/>
        <input className="comment-form-submit" type="submit" value="Comment"/>
      </form>;
  }

  render() {
    const { postComments } = this.props;
    const { editIndex } = this.state;
    return (
      <div className="comments">
        {this.renderEditComment()}
        {postComments &&
          postComments.map(
            (comment, i) =>
              i === editIndex
                ? this.renderEditComment(comment, i)
                : this.renderComment(comment, i)
          )}
      </div>
    );
  }
}

export default CommentList;
