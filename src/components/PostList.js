import React, { Component } from "react";
import { Link } from "react-router-dom";
//import PropTypes from 'prop-types';

import Post from "./Post";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchCategories();
  }

  filterPosts(posts, category) {
    if (!category) return posts;
    return posts.filter(post => post.category === category);
  }

  render() {
    const {
      posts,
      category,
      categories,
      fetchUpVotePost,
      fetchDownVotePost
    } = this.props;
    const filteredPosts = this.filterPosts(posts, category);

    return (
      <div className="my-posts">
        {categories &&
          <ul className="categories-list">
          {categories.map(category => <li key={category.name} className="category-link"><Link to={`/${category.path}`}>{category.name}</Link></li>)}
          </ul>
        }
        {posts &&
          <ul className="post-list">
            {filteredPosts.map(post => (
              <Post
                {...this.props}
                key={post.id}
                post={post}
                fetchUpVotePost={fetchUpVotePost}
                fetchDownVotePost={fetchDownVotePost}
              />
            ))}
        </ul>
      }
      </div>
    );
  }
}

export default PostList;
