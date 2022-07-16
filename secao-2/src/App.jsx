import React, { Component } from 'react';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        { id: 1, title: 'Titulo 1', content: 'daisdoiahsdoiahosdhi' },
        { id: 2, title: 'Titulo 2', content: 'daisdoiahsdoiahosdhi' },
        { id: 3, title: 'Titulo 3', content: 'daisdoiahsdoiahosdhi' },
      ],
    };
  }

  addNewPost = () => {
    const { posts } = this.state;
    const id = posts[posts.length - 1].id + 1;

    const newPost = { id, title: `Titulo ${id}`, content: 'daisdoiahsdoiahosdhi' };
    this.setState({ posts: [...posts, newPost] });
  };

  render() {
    const { posts } = this.state;
    return (
      <>
        {
          posts.map((post) => (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.content}</p>
            </div>
          ))
        }

        <button type="button" onClick={this.addNewPost}>
          Add new post
        </button>
      </>
    );
  }
}

export default App;
