import React, { Component } from 'react';
import * as ReadableAPI from '../utils/ReadableAPI';


class App extends Component {

  componentDidMount() {
    ReadableAPI.getAllCategories().then(categories => {
      console.log(categories);
    });
    ReadableAPI.getPostsByCategory('react').then(categories => {
      console.log(categories);
    });
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
