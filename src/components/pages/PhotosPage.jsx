import {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./PhotosPage.css";
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
    <div className='card_ph'>
    
      <Row xs={2} md={4} className="g-4">
      {photos.map((photo) => (
        <Col key={photo.id}>
          <Card className='card_photos'>
            <Card.Img variant="top" src={photo.thumbnailUrl} alt={photo.title} />
            <Card.Body>
              <Card.Title>{photo.title}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    </div>
  )
}
