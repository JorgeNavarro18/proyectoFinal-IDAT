import {useState} from 'react'
import {Link} from 'react-router-dom';

export const PhotosPage = () => {

  const[ photo, setPhoto] = useState ([]);
  const handleClick2 = async () =>{
    const request = await fetch ('https://jsonplaceholder.typicode.com/photos');
    const response = await request.json();
    setPhoto(response);
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
            {photo.map((photo) => (
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
