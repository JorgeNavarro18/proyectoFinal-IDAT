//import React from 'react'
import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useFetch } from '../../hooks/useFetch';
import axios from 'axios';
import img from '../../assets/images/usuario.png';
import './CommentsPage.css';

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
    <div className='card_comm'>
        {comments.map ((comment)=>(
            <Card className='card_comments' key={comment.id} 
              style={{ width: '18rem' }}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{comment.name} </Card.Title>
                <Card.Text>
                    {comment.body}
                </Card.Text>
                <Card.Text>
                   {comment.email} 
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
        )) }
    </div>
  )
}
