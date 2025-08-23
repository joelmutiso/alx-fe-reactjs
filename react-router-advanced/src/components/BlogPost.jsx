import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  // useParams() hook extracts parameters from the URL
  const { postId } = useParams();

  // In a real app, you would use this ID to fetch post data from an API
  const posts = {
    1: { title: 'First Blog Post', content: 'This is the content of the first blog post.' },
    2: { title: 'Second Blog Post', content: 'This is the content of the second blog post.' },
    3: { title: 'Third Blog Post', content: 'This is the content of the third blog post.' },
  };

  const post = posts[postId];

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center min-h-[calc(100vh-64px)]">
        <h1 className="text-3xl font-bold text-gray-900">Post Not Found</h1>
        <p className="text-gray-600 mt-2">The requested post does not exist.</p>
      </div>
    );
  }

  return (
    <div className="p-8 min-h-[calc(100vh-64px)] max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-lg text-gray-700 leading-relaxed">{post.content}</p>
    </div>
  );
};

export default BlogPost;