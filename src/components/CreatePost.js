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
    this.props.addPost({ title, body, author, category });
    this.props.history.push("/");
  }

  render() {
    const { categories } = this.props;
    return (
      <div className="create-post">
        <form
          ref="postForm"
          className="post-form"
          onSubmit={e => this.handleSubmit(e)}
        >
          <input type="text" ref="title" placeholder="title" />
          <input type="text" ref="body" placeholder="body" />
          <input type="text" ref="author" placeholder="author" />
          {categories && (
            <select className="categories-list" ref="category">
              {categories.map((category,i) => (
                <option key={i} value={category.name} className="category-option">
                  {category.name}
                </option>
              ))}
            </select>
          )}
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default CreatePost;
