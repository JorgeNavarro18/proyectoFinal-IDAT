//import React from 'react'
import {useState} from 'react';
import {Link} from 'react-router-dom';

export const AlbumsPage = () => {
  const[ albums, setAlbum] = useState ([]);
  const handleClick2 = async () =>{

    const request = await fetch ('https://jsonplaceholder.typicode.com/albums');
    const response = await request.json();
    setAlbum(response);
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
