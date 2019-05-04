import React, { Component } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Config from '../config';

class PostIndex extends Component {
  static defaultProps = {
    limit: 5
  }

  state = {
    posts: [],
  }
  
  async componentDidMount() {
    const {limit} = this.props;
    const postsResults = await fetch(`${Config.apiUrl}/wp/v2/posts?per_page=${limit}`);
    const posts = await postsResults.json();
    this.setState({
      posts
    })
  }

  render() {
    const { posts } = this.state;
    return (
      <section>
        <h3>Archive</h3>
        <ul>
          {posts.map(post => 
            <li key={post.id}>
              <Link 
                href={`/post?slug=${post.slug}&apiRoute=post`} 
                as={`/post/${post.slug}`}
              >
                <a>{post.title.rendered}</a>
              </Link>
            </li> )}
        </ul>
      </section>    
    );
  }
}

export default PostIndex;


