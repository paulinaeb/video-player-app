import React from 'react';
import '../assets/styles/components/NotFound.scss'
import error from '../assets/static/error.png';

const NotFound = () => (
    <>
        <img className="imagen" src={error} alt="error" />
        <h1>No encontrado</h1>
        <h3>Regresa el <a href="/">home</a></h3>
    </>
);

export default NotFound; 