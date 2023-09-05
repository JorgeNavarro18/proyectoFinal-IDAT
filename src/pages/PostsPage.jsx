//import React from 'react'
import {useState} from 'react';
import {Link} from 'react-router-dom';
import './PostsPage.css';

export const PostsPage = () => {

  const[ post, setPost] = useState ([]);


  const handleClick2 = async () =>{

    const request = await fetch ('https://jsonplaceholder.typicode.com/posts');
    const response = await request.json();
    setPost(response);
  }

  return (
    <div>

     <div>  
     <h1> Posts</h1>
     </div>

     
     <button onClick={handleClick2}> Ver Posts</button>
     <div>
     <Link to="/">Ir a Home</Link>
     </div>

     {post.map ((post)=>(
            <p key={post.id}> 
            <div>
             TITULO: {post.title} 
             </div>
             CUERPO: {post.body}
             
             </p>
                    
           
           )) }

     <div>  
     
     
     </div>



     



     

    </div>
  )
}


/*export const FetchData = () =>{
    
   
   const[ post, setPost] = useState ([]);

    
   
   
      const handleClick2 = async () =>{

      const request = await fetch ('https://jsonplaceholder.typicode.com/posts');
      const response = await request.json();
      setPost(response);

    }
   
   
      
    return(
        <div> 
           <h1>Pagina de Inicio</h1>

         

           <button onClick={handleClick2}> Post</button>
           

           {post.map ((post)=>(
            <p key={post.id}> 
            <div>
             TITULO: {post.title} 
             </div>
             CUERPO: {post.body}
             
             </p>
                    
           
           )) }

             
        </div>

    );
};  
*/