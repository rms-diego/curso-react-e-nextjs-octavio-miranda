import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import '../style/App.css';
import getPosts from '../service/getPosts';
import getPhotos from '../service/getPhotos';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      canRedirect: false,
    };
  }

  async componentDidMount() {
    const [allPosts, photos] = await Promise.all([getPosts(), getPhotos()]);

    const posts = allPosts.map((post, index) => ({ ...post, image: photos[index].thumbnailUrl }));

    this.setState({ posts });
  }

  handleRedirect = () => this.setState({ canRedirect: true });

  render() {
    const { posts, canRedirect } = this.state;

    return (
      <div className="container-card">
        <button type="button" onClick={this.handleRedirect}>
          Ir para outra pagina
        </button>
        {
          posts.length > 1 && posts.map((post) => (
            <div key={post.id} className="card">
              <img src={post.image} alt="thumbnail" />
              <h1>{post.title}</h1>
            </div>
          ))
        }
        { canRedirect && <Navigate to="/teste" />}
      </div>
    );
  }
}

export default Home;
