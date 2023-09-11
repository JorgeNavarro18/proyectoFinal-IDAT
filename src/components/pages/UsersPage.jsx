//import React from 'react'
import {useState, useEffect} from 'react';
import { useFetch } from '../../hooks/useFetch';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './UsersPage.css';
import imgUser from '../../assets/images/usuario-2.png';
import './TodosPage.css';

export const UsersPage = () => {
  const { error, isLoading } = useFetch(
		'https://jsonplaceholder.typicode.com/users'
	);
  const [users, setUsers] = useState([]);
  useEffect(() => {
      const fetchUsers = async () => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(data);
      }
      fetchUsers();
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
    <div className='card_us'>
        {users.map ((user)=>(
            <Card className='card_users' key={user.id} 
              style={{ width: '18rem' }}>
              <Card.Img variant="top" src={imgUser} />
              <Card.Body>
                <Card.Title>{user.name} </Card.Title>
                <Card.Text>
                    {user.username}
                </Card.Text>
                <Card.Text>
                     {user.email} 
                </Card.Text>
                <Button variant="primary">New Comment</Button>
              </Card.Body>
            </Card>
        )) }
       
        
    </div>
  )
}
