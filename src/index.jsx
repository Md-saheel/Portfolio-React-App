import Header from './components/Header';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  return (
    <>
      <header id='about'>
        <Header />
        <Welcome />
      </header>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
