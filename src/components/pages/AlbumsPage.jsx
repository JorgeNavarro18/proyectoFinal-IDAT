//import React from 'react'
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

export const AlbumsPage = () => {
    const { error, isLoading } = useFetch(
		'https://jsonplaceholder.typicode.com/albums'
	);
    const[albums, setAlbums] = useState ([]);
    const handleClick2 = async () =>{
  
      const request = await fetch ('https://jsonplaceholder.typicode.com/albums');
      const response = await request.json();
      setAlbums(response);
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
        <h1> Albums</h1>
        </div>
        <button onClick={handleClick2}> Ver Albums</button>
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
