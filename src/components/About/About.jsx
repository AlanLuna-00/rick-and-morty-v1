// page about

import React from 'react';
import './About.css';
import alan from './about.png'

export default function About() {
    return (
        <div className='about'>
            <h1 className='about_title'>Alan 🤓</h1>
            <img className='about_img' src={alan} alt='Alan' />
            <p className='about_description'>Soy un simple programador en aprendizaje.</p>
            <p className='about_version'>Rick and Morty app v1.0.5</p>
        </div>
    );
}