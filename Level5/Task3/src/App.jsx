// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import "./App.css";

const blogPosts = [
  {
    id: "1",
    title: "Introduction to React",
    shortDescription: "Learn the basics of React and how to create components.",
    content: "React is a JavaScript library for building user interfaces. It allows you to create reusable UI components..."
  },
  {
    id: "2",
    title: "React Router in Depth",
    shortDescription: "Understand how to use React Router for navigation.",
    content: "React Router enables dynamic routing in a React application. It helps in rendering different components based on the URL..."
  },
  {
    id: "3",
    title: "State Management with Redux",
    shortDescription: "Learn how to manage complex state using Redux.",
    content: "Redux is a predictable state container for JavaScript apps. It helps in managing the state of the application in a scalable way..."
  }
];

function Home() {
  return (
    <div className="container">
      <h1 className="title">Simple Blog</h1>
      <ul className="post-list">
        {blogPosts.map((post) => (
          <li key={post.id} className="post-item">
            <Link to={`/post/${post.id}`} className="post-title">{post.title}</Link>
            <p className="post-description">{post.shortDescription}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return <h2 className="not-found">404 - Blog Post Not Found</h2>;
  }

  return (
    <div className="container">
      <h1 className="post-title-full">{post.title}</h1>
      <p className="post-content">{post.content}</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="*" element={<h2 className="not-found">404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;