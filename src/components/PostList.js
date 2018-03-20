import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faComment from '@fortawesome/fontawesome-free-solid/faCommentAlt';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import faThumbsDown from '@fortawesome/fontawesome-free-solid/faThumbsDown';
import faThumbsUp from '@fortawesome/fontawesome-free-solid/faThumbsUp';

const PostList = props => {
  const { posts, upVote, downVote } = props;
  console.log("Posts", posts);
  return (
    <div className="my-posts">
      <ul className="post-list">
        { posts.map(post => 
            <div className="post-item" key={post.id}>
              <div className="post-title">
                {post.title}
              </div>
              <p className="post-author">
                by <strong>{post.author}</strong>
              </p>
              <p className={`post-category post-category-${post.category}`}>T</p>
              <FontAwesomeIcon className="post-comments" icon={faComment}/>
              <p className="post-comments-count">
                {post.commentCount}
              </p>
              <div onClick={e => upVote(post)} className="post-upvote" >
                <FontAwesomeIcon className="post-upvote" icon={faThumbsUp} />
              </div>
              <p className="post-votes-count">
                {post.voteScore}
              </p>
              <div onClick={e => downVote(post)} className="post-downvote">
                <FontAwesomeIcon className="post-downvote" icon={faThumbsDown} />
              </div>
            </div>
          )
        }  
      </ul>
    </div>
  )
}

export default PostList;