import React, { Component } from 'react';
import './style/App.css';
import getPosts from './service/getPosts';
import getPhotos from './service/getPhotos';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    const [allPosts, photos] = await Promise.all([getPosts(), getPhotos()]);

    const posts = allPosts.map((post, index) => ({ ...post, image: photos[index].thumbnailUrl }));

    this.setState({ posts });
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="container-card">
        {
          posts.length > 1 && posts.map((post) => (
            <div key={post.id} className="card">
              <h1 style={{ color: 'black' }}>{post.title}</h1>
              <img src={post.image} alt="thumbnail" />
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
