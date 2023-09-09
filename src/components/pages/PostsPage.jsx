//import React from 'react'
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import axios from 'axios';

export const PostsPage = () => {

  const { error, isLoading } = useFetch(
		'https://jsonplaceholder.typicode.com/posts'
	);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
      const fetchPosts = async () => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(data);
      }
      fetchPosts();
  }, []);

	if (isLoading) {
		return (
			<div>
				<p>Cargando...</p>
			</div>
		);
	}

	if (error) {
		<div>
			<p>Ocurrió un error {JSON.stringify(error)}</p>
		</div>;
	}
  return (
    <div>

        <div>  
        <h1> Posts</h1>
       
        <Link to="/">Ir a Home</Link>
        </div>

        {posts.map ((post)=>(
                <p key={post.id}> 
                <div>
                TITULO: {post.title} 
                </div>
                CUERPO: {post.body}
                </p>
              )) }
   
    </div>
  )
}