//import React from 'react'
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
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
    <div>
        <div>  
        <h1> Albums</h1>
        </div>
        
        <Link to="/">Ir a Home</Link>

        {albums.map ((album)=>(
                <p key={album.id}> 
                <div>
                TITULO: {album.title} 
                </div>
                </p>
              )) }

    </div>
  )
}
