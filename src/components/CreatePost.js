import React, { Component } from "react";

class CreatePost extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = this.refs.title.value;
    const body = this.refs.body.value;
    const author = this.refs.author.value;
    const category = this.refs.category.value;
    this.props.addPost({ title, body, author, category })
      .then(res => {
        // success callback here
        this.props.history.push("/");
      }, error => {
        console.log("addPost Error", error.message);
        // error callback here
      });
  }

  render() {
    const { categories } = this.props;
    return <div className="post-create">
        <form ref="postForm" className="post-create-form" onSubmit={e => this.handleSubmit(e)}>
          <div className="post-create-author-title">
          <input className="post-create-author" type="text" ref="author" placeholder="author" required/>
          <input className="post-create-title" type="text" ref="title" placeholder="title" required/>
          {categories && <select className="categories-list" ref="category" required>
                {categories.map((category) => (
                  <option
                    key={category.name}
                    value={category.name}
                    className="category-option"
                  >
                    {category.name}
                  </option>
                ))}
              </select>}
          </div>
        <textarea className="post-create-body" ref="body" placeholder="Your post" required/>
          <input className="post-create-submit" type="submit" />
        </form>
      </div>;
  }
}

export default CreatePost;
