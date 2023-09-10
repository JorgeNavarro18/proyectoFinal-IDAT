//import React from 'react'
import {useState, useEffect} from 'react';
//import {Link} from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import axios from 'axios';

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
    <div>
      <div>  
      <h1> Todos</h1>
      </div>
      {todos.map ((todo)=>(
                <p key={todos.id}> 
                <div>
                TITULO: {todo.title} 
                </div>
                {todo.completed}
                </p>    
              )) }
    </div>
  )
}
