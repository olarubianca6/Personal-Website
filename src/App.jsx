import React from 'react';
import './index.css';
import { Helmet } from 'react-helmet';

import about from './files/about';
import cv from './files/cv';
import contact from './files/contact';

import About from './components/About';
import Cv from './components/Cv';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      
      <div className="foreground">
        <h1 className="header">
          <About about={about} />
          <Cv cv={cv} />
          <Contact contact={contact} />
        </h1>
      </div>
    </div>
  );
}

export default App;