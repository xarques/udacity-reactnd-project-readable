import React, { Component } from "react";

class EditPost extends Component {
  componentDidMount = () => {
    const { postId, fetchPost } = this.props;
    fetchPost(postId);
  };

  handleSubmit(e) {
    e.preventDefault();
    const id = this.refs.id.value;
    const title = this.refs.title.value;
    const body = this.refs.body.value;
    this.props.editPost({ id, title, body });
    this.props.history.push("/");
  }

  render() {
    const { postId, posts } = this.props;
    const post = posts && posts.find(post => post.id === postId);
    return <div className="create-post">
    {post &&
        <form ref="postForm" className="post-form" onSubmit={e => this.handleSubmit(e)}>
          <input type="text" ref="id" defaultValue={post.id} hidden />
          <input type="text" ref="title" defaultValue={post.title} />
          <input type="text" ref="body" defaultValue={post.body} />
          <input type="text" ref="author" value={post.author} readOnly/>
          <input type="text" ref="category" value={post.category} readOnly/>
          <input type="submit" />
        </form>
    }
      </div>
  }
}

export default EditPost;
