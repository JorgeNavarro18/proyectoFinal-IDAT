//import React from 'react'
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

export const CommentsPage = () => {

  const { error, isLoading } = useFetch(
		'https://jsonplaceholder.typicode.com/comments'
	);
    const[comments, setComments] = useState ([]);
    const handleClick2 = async () =>{
  
      const request = await fetch ('https://jsonplaceholder.typicode.com/comments');
      const response = await request.json();
      setComments(response);
    }

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

        <button onClick={handleClick2}>   Ver Comments</button>

        <Link to="/">Ir a Home</Link>

        {comments.map ((post)=>(
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
