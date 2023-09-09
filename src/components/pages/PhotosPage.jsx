import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import axios from 'axios';

export const PhotosPage = () => {

  const { error, isLoading } = useFetch(
		'https://jsonplaceholder.typicode.com/photos'
	);
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
      const fetchPhotos = async () => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/photos');
        setPhotos(data);
      }
      fetchPhotos();
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
        <h1> Photos </h1>
        </div>
     
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
