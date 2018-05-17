import React, { Component } from "react";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faPlus from "@fortawesome/fontawesome-free-solid/faPlus";

import Post from "./Post";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchCategories();
  }

  render() {
    const { posts, category, categories } = this.props;
    return (
      <div className="my-posts">
        {categories &&
          <ul className="categories-list">
          {categories.map((c,i) => <li key={c.name} className="category-link"><Link className={(!category && i === 0) || (c.name === category) ? "category-active": ""} to={`/${c.path}`}>{c.name}</Link></li>)}
          </ul>
        }
        {posts &&
          <ul className="post-list">
            {posts.map(post => (
              <Post
                {...this.props}
                key={post.id}
                post={post}
              />
            ))}
        </ul>
      }
        <div className="post-create-button">
          <Link to={"/post/create"}>
            <FontAwesomeIcon icon={faPlus} />
          </Link>
      </div>
    </div>
    );
  }
}

export default PostList;
