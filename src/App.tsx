import React from 'react';
import { Route, Routes } from 'react-router-dom'

import Posts from './app/posts/Posts';
import SavePost from './app/posts/SavePost';

function App() {
  return (
    <div className="container mx-auto">
      <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/Posts" element={<Posts />} />
          <Route path="/Posts/:pId" element={<SavePost />} />
      </Routes>
    </div>
  );
} 

export default App;
