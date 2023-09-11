//import React from 'react'
import {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import './AlbumsPage.css';
import { useFetch } from '../../hooks/useFetch';
import axios from 'axios';

export const AlbumsPage = () => {
  const { error, isLoading } = useFetch(
		'https://jsonplaceholder.typicode.com/albums'
	);
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
      const fetchAlbums = async () => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/albums');
        setAlbums(data);
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
    <div className='card_al'>

        {albums.map((album) => (
        <Card className='card_albums'
          key={album.id}
          style={{ width: '18rem' }}
        >
          <Card.Header>Albums Song</Card.Header>
          <Card.Body>
            <Card.Title>{album.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card is content.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}

    </div>
  )
}
