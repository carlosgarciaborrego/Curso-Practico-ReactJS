/* eslint-disable jsx-quotes */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */

import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = () => (
    <section className="main">
        <h2 className="main__title">¿Qué quieres ver hoy?</h2>
        <input type="text" className="input" placeholder="Buscar..." />
    </section>
);

export default Search;
