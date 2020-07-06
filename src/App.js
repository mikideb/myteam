import React from 'react';
import { Router } from '@reach/router';

import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Homepage path="/" />
        <About path="/about" />
        <Contact path="/contact" />
      </Router>
    </div>
  );
}

export default App;
