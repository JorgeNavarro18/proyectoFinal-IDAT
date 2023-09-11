//import React from 'react'
import {useState, useEffect} from 'react';
import { useFetch } from '../../hooks/useFetch';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import imgTodo from '../../assets/images/fondo.jfif';

export const TodosPage = () => {

  const { error, isLoading } = useFetch(
		'https://jsonplaceholder.typicode.com/todos'
	);
  const [todos, setTodos] = useState([]);
  useEffect(() => {
      const fetchTodos = async () => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setTodos(data);
      }
      fetchTodos();
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
    <div className='card_to'>
      {todos.map((todo) => (
        <Card className="card_todos bg-dark text-white" key={todos.id}>
        <Card.Img src={imgTodo} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
             {todo.title} 
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
      )) }
    </div>
  )
}
