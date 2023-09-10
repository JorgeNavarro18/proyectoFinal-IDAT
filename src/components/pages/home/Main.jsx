//import React from "react";
//import frontMan from '../assets/img/front.jpg';
export const Main = (props) => {
  return (
    <main className='container d-flex' id="home" style={{height:"100vh"}}>
      <div className='container-fluid d-flex flex-row flex-wrap align-items-center justify-content-around'>
        <figure style={{width:"25rem"}}>
          <img
            src={props.frontMan}
            alt='front man'
            className='rounded img-fluid shadow'></img>
        </figure>
        <div style={{width:"30rem"}}>
          <h1 className='text-dark'>
          I am a student of Idat, I like to develop web pages and I´m a frontend developper
          </h1>
 
          <p className='text-secondary'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ut!,
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
            voluptates quam quo, harum dolorum provident!
          </p>
        </div>
      </div>
    </main>
  )
}