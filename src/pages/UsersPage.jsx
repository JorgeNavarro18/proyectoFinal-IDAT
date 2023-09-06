import React from 'react'
import {useState} from 'react';
import {Link} from 'react-router-dom';

export const UsersPage = () => {
  const[ users, setUser] = useState ([]);
  const handleClick2 = async () =>{

    const request = await fetch ('https://jsonplaceholder.typicode.com/users');
    const response = await request.json();
    setUser(response);
  }

  return (
    <div>
        <div>  
        <h1> Users</h1>
        </div>
        <button onClick={handleClick2}> Ver Users</button>
        <Link to="/">Ir a Home</Link>

              {users.map ((user)=>(
              <p key={user.id}> 
              <div>
                  Nombres: {user.name}
                  Nombre de Usuario : {user.username}
                  Correo: {user.email}
                  Dirección: {user.address}
                  Teléfono: {user.phone}
              </div>
              </p>
              )) }
        
    </div>
  )
}
