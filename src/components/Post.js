import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faComment from '@fortawesome/fontawesome-free-solid/faCommentAlt';
//import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import faThumbsDown from '@fortawesome/fontawesome-free-solid/faThumbsDown';
import faThumbsUp from '@fortawesome/fontawesome-free-solid/faThumbsUp';

class Post extends Component {
  render() {
    // console.log('Post Params', this.props);
    // const { posts, fetchUpVote, fetchDownVote } = this.props;
    // const { categoryId, postId } = this.props.match.params;
    // console.log('categoryId', categoryId);
    // console.log('postId', postId);
    // const i = posts.findIndex(post => post.id === postId);

    // const post = posts[i];
    const post = {
      author: 'xavier',

    }
    ;
    return (
      <div className="my-post">
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
          {/* <div onClick={e => fetchUpVote(post)} className="post-upvote" >
            <FontAwesomeIcon className="post-upvote" icon={faThumbsUp} />
          </div>
          <p className="post-votes-count">
            {post.voteScore}
          </p>
          <div onClick={e => fetchDownVote(post)} className="post-downvote">
            <FontAwesomeIcon className="post-downvote" icon={faThumbsDown} />
          </div> */}
        </div>
      </div>
    )
  }
}

export default Post;