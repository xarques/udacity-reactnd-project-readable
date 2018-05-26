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
    this.props.history.goBack();
  }

  render() {
    const { postId, posts } = this.props;
    const post = posts && posts.find(post => post.id === postId);
    return <div>
        {post && <form ref="postForm" className="post-create-form" onSubmit={e => this.handleSubmit(e)}>
          <div className="post-create-author-title">
            <input type="text" ref="id" defaultValue={post.id} hidden />
            <div className="post-create-author-title">
              <input className="post-create-author" type="text" ref="author" value={post.author} readOnly />
              <input className="post-create-title" type="text" ref="title" defaultValue={post.title} />
              <input className="post-create-author" type="text" ref="category" value={post.category} readOnly />
            </div>
          </div>
          <textarea className="post-create-body" ref="body" defaultValue={post.body} />
          <input className="button-form-submit" type="submit" value="Update Post"/>
        </form>}
      </div>;
  }
}

export default EditPost;
