//import React from 'react'
import {Route,Routes} from 'react-router-dom';
import {Home} from './pages/HomePage';

import {PostsPage} from './pages/PostsPage';
import {CommentsPage} from './pages/CommentsPage';
import {AlbumsPage} from './pages/AlbumsPage';
import {PhotosPage} from './pages/PhotosPage';
import {TodosPage} from './pages/TodosPage';
import {UsersPage} from './pages/UsersPage';

//import './PostsPage.css';

export const App = () => {
  
    return (
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsPage/>} />
        <Route path="/comments" element={<CommentsPage/>} />
        <Route path="/albums" element={<AlbumsPage/>} />
        <Route path="/photos" element={<PhotosPage/>} />
        <Route path="/todos" element={<TodosPage/>} />
        <Route path="/users" element={<UsersPage/>} />
          
      </Routes>
    );
}
