import React from "react";
import { Link } from "react-router-dom";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faComment from "@fortawesome/fontawesome-free-solid/faCommentAlt";
import faTrash from "@fortawesome/fontawesome-free-solid/faTimes";
import faEdit from "@fortawesome/fontawesome-free-solid/faPencilAlt";
import faThumbsDown from "@fortawesome/fontawesome-free-solid/faCaretDown";
import faThumbsUp from "@fortawesome/fontawesome-free-solid/faCaretUp";

import { getPostedTime } from '../utils/Helpers';

const Post = ({ post, fetchUpVotePost, fetchDownVotePost, deletePost }) => (
  <div className="post" key={post.id}>
    {post && (
      <div className="post-item">
        <div className="post-vote-container">
          <div className="post-vote">
            <div
              onClick={e => fetchUpVotePost(post.id)}
              className="post-upvote"
            >
              <FontAwesomeIcon icon={faThumbsUp} />
            </div>
            <div>{post.voteScore} </div>
            <div
              onClick={e => fetchDownVotePost(post.id)}
              className="post-downvote"
            >
              <FontAwesomeIcon icon={faThumbsDown} />
            </div>
          </div>
        </div>
        <div className="post-body-container">
          <div className="post-header">
            <Link to={`/${post.category}`}>
              <p className={`post-category post-category-${post.category}`} />
            </Link>
            <div className="post-author">
              Posted by <strong> {post.author} </strong> {getPostedTime(post.timestamp)}
            </div>
            <Link
              className="post-edit"
              to={`/${post.category}/${post.id}/edit`}
            >
              <FontAwesomeIcon icon={faEdit} />
            </Link>
            <div onClick={e => deletePost(post.id)} className="post-delete">
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
          <div className="post-body">
            <Link to={`/${post.category}/${post.id}`}>
              <div className="post-title">{post.title}</div>
            </Link>
          </div>
          <div className="post-comments">
            <FontAwesomeIcon className="post-comments-icon" icon={faComment} />
            <div className="post-comments-count">
              {post.commentCount > 1
                ? `${post.commentCount} Comments`
                : "Comment"}{" "}
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);

export default Post;
