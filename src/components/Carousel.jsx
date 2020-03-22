/* eslint-disable jsx-quotes */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */

import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }) => (
    <section className="carousel">
        <div className="carousel__container">
            { children }
        </div>
    </section>    
);

export default Carousel;
