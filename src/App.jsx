//import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes} from 'react-router-dom';
import {Home} from './components/pages/home/HomePage';
import {PostsPage} from './components/pages/PostsPage';
import {CommentsPage} from './components/pages/CommentsPage';
import {AlbumsPage} from './components/pages/AlbumsPage';
import {PhotosPage} from './components/pages/PhotosPage';
import {TodosPage} from './components/pages/TodosPage';
import {UsersPage} from './components/pages/UsersPage';
import {NavBar} from "./components/NavBar";
import "./App.css";

//import './PostsPage.css';

export const App = () => {
  
    return (
     <>
          <NavBar /> 
            <div className='pages'>
              <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<PostsPage/>} />
                    <Route path="/comments" element={<CommentsPage/>} />
                    <Route path="/albums" element={<AlbumsPage/>} />
                    <Route path="/photos" element={<PhotosPage/>} />
                    <Route path="/todos" element={<TodosPage/>} />
                    <Route path="/users" element={<UsersPage/>} />
              </Routes>
            </div>
     </>
    );
}
