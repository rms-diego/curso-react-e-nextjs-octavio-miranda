import React, { Component } from 'react';
import './style/App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      posts: [
        { id: 1, title: 'Titulo 1', content: 'daisdoiahsdoiahosdhi' },
        { id: 2, title: 'Titulo 2', content: 'daisdoiahsdoiahosdhi' },
        { id: 3, title: 'Titulo 3', content: 'daisdoiahsdoiahosdhi' },
      ],
    };
  }

  componentDidMount() {
    console.log('componente montado !');
  }

  componentDidUpdate() {
    console.log('estado atualizado !');
  }

  addPost = () => {
    const { posts, counter } = this.state;
    const id = posts[posts.length - 1].id + 1;

    const newPost = { id, title: `Titulo ${id}`, content: 'daisdoiahsdoiahosdhi' };
    this.setState({ posts: [...posts, newPost], counter: counter + 1 });
  };

  render() {
    const { posts, counter } = this.state;
    return (
      <div className="App">
        <h1 style={{ color: 'black' }}>
          {`counter:  ${counter} `}
        </h1>
        {
          posts.map((post) => (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.content}</p>
            </div>
          ))
        }

        <button type="button" onClick={this.addPost}>
          Add post and increment counter
        </button>
      </div>
    );
  }
}

export default App;
