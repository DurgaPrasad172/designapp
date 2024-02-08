// BlogPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from the backend
    axios.get('/blogs')
      .then(response => setBlogPosts(response.data))
      .catch(error => console.error('Error fetching blog posts:', error));
  }, []);

  return (
    <div>
      <h2>Blog</h2>
      {blogPosts.map(post => (
        <div key={post._id}>
          <img src={post.featuredImage} alt={post.title} />
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <Link to={`/blogs/${post._id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
