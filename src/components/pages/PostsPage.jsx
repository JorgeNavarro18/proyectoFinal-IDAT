//import React from 'react'
import {useState, useEffect} from 'react';
import { useFetch } from '../../hooks/useFetch';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import './PostsPage.css';

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
    <div className='card_po'>
       {posts.map((post) => (
        <Card className='card_posts'
          key={post.id}
          style={{ width: '18rem' }}
        >
          <Card.Header>Posts User</Card.Header>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
                {post.body}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
       
   
    </div>
  )
}