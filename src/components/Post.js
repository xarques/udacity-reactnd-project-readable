import React from "react";
import { Link } from "react-router-dom";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faComment from "@fortawesome/fontawesome-free-solid/faCommentAlt";
import faTrash from "@fortawesome/fontawesome-free-solid/faTrash";
import faEdit from "@fortawesome/fontawesome-free-solid/faEdit";
import faThumbsDown from "@fortawesome/fontawesome-free-solid/faThumbsDown";
import faThumbsUp from "@fortawesome/fontawesome-free-solid/faThumbsUp";

const Post = ({ post, fetchUpVotePost, fetchDownVotePost, deletePost }) => (
  <div className="post" key={post.id}>
    {post && <div className="post-item">
        <Link to={`/${post.category}/${post.id}`}>
          <div className="post-title">{post.title}</div>
          <p className="post-author">
        {post.voteScore} vote{Math.abs(post.voteScore) > 1 ? "s" : ""} - Submitted by <strong>
              {post.author}
            </strong>
          </p>
        </Link>
        <Link to={`/${post.category}/${post.id}/edit`}>
          <FontAwesomeIcon className="post-edit" icon={faEdit} />
        </Link>
        <div onClick={e => deletePost(post.id)} className="post-delete">
          <FontAwesomeIcon icon={faTrash} />
        </div>
        <Link to={`/${post.category}`}>
          <p className={`post-category post-category-${post.category}`} />
        </Link>
        <FontAwesomeIcon className="post-comments" icon={faComment} />
        <p className="post-comments-count">{post.commentCount}</p>
        <div onClick={e => fetchUpVotePost(post.id)} className="post-upvote">
          <FontAwesomeIcon icon={faThumbsUp} />
        </div>
        <div onClick={e => fetchDownVotePost(post.id)} className="post-downvote">
          <FontAwesomeIcon icon={faThumbsDown} />
        </div>
      </div>}
  </div>
)

export default Post;
