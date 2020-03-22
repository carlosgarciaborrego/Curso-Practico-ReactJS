/* eslint-disable jsx-quotes */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */

import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children, title }) => (
    <div className="categories">
        <h3 className="categories__title">{title}</h3> 
        { children }    
    </div>
);

export default Categories;
