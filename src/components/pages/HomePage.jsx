//import React from 'react'
import {Link} from 'react-router-dom';

export const Home = () => {
  return (
    <div>

    <div>  
    <h1> Pagina de Inicio</h1>
    </div>

    <Link to="/posts"> Ir a Posts </Link>     

    <div>  
    <Link to="/comments"> Ir a Comments </Link>
    </div>

    <div>     
    <Link to="/albums"> Ir a Albums </Link>
    </div>

    <div>     
    <Link to="/photos"> Ir a Photos </Link>
    </div>

    <div>     
    <Link to="/todos"> Ir a Todos </Link>
    </div>

    <div>     
    <Link to="/users"> Ir a Users </Link>
    </div>
       
    
    </div>


  )
}

 


/*return (
    <div
       style={{
        display: 'flex',
        gap:'1rem',
        flexDirection:'colum',

       }   }
    
    
    >
       <Link to="/paginaPrueba">Ir a pagina de pagina de Prueba</Link>
    
    
    </div>*/