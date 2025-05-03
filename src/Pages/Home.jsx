
import React, { useState } from 'react';
import MainHome from "../componentes/MainHome";
import LengProgramacion from "../Data/LengProgramacion";
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

const Home = () => {
  const [lenguajes] = useState(LengProgramacion);

  return (
    <>
    <Header/>
    <MainHome lenguajes={lenguajes} />
    <Footer/>
    </>
  );
};

export default Home;

