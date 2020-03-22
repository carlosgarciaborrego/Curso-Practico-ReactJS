/* eslint-disable arrow-parens */
/* eslint-disable jsx-quotes */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */
// eslint-disable-next-line object-curly-spacing

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(''API'')
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  return (
  <div className="App">
         <Header />
         <Search />
         <Categories title="Mi lista">
           <Carousel>
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
           </Carousel>
         </Categories>
         <Categories title="Tendencias">
           <Carousel>
              <CarouselItem />
              <CarouselItem />
           </Carousel>
         </Categories>
         <Categories title="Originales de Platzi Video">
           <Carousel>
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
           </Carousel>
         </Categories>
         <Footer />
 </div>
);
}

export default App;