//import React from 'react'
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import axios from 'axios';


export const CommentsPage = () => {
  const { error, isLoading } = useFetch(
		'https://jsonplaceholder.typicode.com/comments'
	);
  const [comments, setComments] = useState([]);
  useEffect(() => {
      const fetchAlbums = async () => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/comments');
        setComments(data);
      }
      fetchAlbums();
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
        <h1> Comments</h1>
        </div>

        <Link to="/">Ir a Home</Link>

        {comments.map ((comment)=>(
                <p key={comment.id}> 
                <div>
                Nombre: {comment.name} 
                </div>
                Correo: {comment.email}
                <div>
                Comments: {comment.body}
                </div>
                </p>    
              )) }
    
    </div>
  )
}
