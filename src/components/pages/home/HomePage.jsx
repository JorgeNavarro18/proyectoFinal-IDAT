//import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SectionContact } from '../home/SectionContact';
import { Footer } from '../home/Footer';
import { Main } from '../home/Main';
import imgFrontMan from '../../../assets/img/front-main.jpg';
import { SectionProyects } from '../home/SectionProyects';

export const Home = () => {
  return (
   
    <>  
       <Main frontMan={imgFrontMan} />
       <SectionProyects />
       <SectionContact />
       <Footer />
    </>
    
  )
};

