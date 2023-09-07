import {useState} from 'react'
import {Link} from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

export const PhotosPage = () => {

  const {  error, isLoading } = useFetch(
		'https://jsonplaceholder.typicode.com/photos'
	);
    const[photos, setPhotos] = useState ([]);
    const handleClick2 = async () =>{
  
      const request = await fetch ('https://jsonplaceholder.typicode.com/photos');
      const response = await request.json();
      setPhotos(response);
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
        <h1> Photos </h1>
        </div>
        <button onClick={handleClick2}> Ver Photos</button>
        <Link to="/">Ir a Home</Link>

        <div>
          <ul>
            {photos.map((photo) => (
              <li key={photo.id}>
                <img src={photo.thumbnailUrl} alt={photo.title}/>
                <p>{photo.title}</p>
              </li>
            ))}
          </ul>
        </div>
    </div>


  )
}
