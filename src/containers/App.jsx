/* eslint-disable space-infix-ops */
/* eslint-disable semi */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable comma-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-indent */

import React,{ useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const App = () => {
    const initialState = useInitialState(API);

    return initialState.length === 0 ? <h1>Loading...</h1>: (
     <div className="App">
        <Header/>
        <Search/>
        
        {initialState.mylist.length > 0 &&
            <Categories title="Mi Lista">
                <Carousel>
                {initialState.mylist.map(item =>
                    <CarouselItem key={item.id} {...item}/>
                )}
                </Carousel>
            </Categories>
        }

        <Categories title="Tendencias">
            <Carousel>
                {initialState.trends.map(item =>
                    <CarouselItem key={item.id} {...item}/>
                )}
            </Carousel>
        </Categories>

        <Categories title="Originales de PlatziVideo">
            <Carousel>
                {initialState.originals.map(item =>
                    <CarouselItem key={item.id} {...item}/>
                )}
            </Carousel>
        </Categories>    
        <Footer/>
    </div>
    );
}

export default App;
