import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from "./components/homepage/Homepage"
import Project from "./components/projects/Projects"
import Contact from './components/contact/Contact';
import Quote from './components/quotes/Quote'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    console.log('hai!~', isOpen)
    if (isOpen) {
      console.log('dsadasdsad');
    
    }
  }, [isOpen])

  return (
    <Router>
      <main>
      <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
              {/* <a class="navbar-brand" href="#">Rifqi</a> */}
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon" />
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                  <a class="nav-link" href="/projects">Projects</a>
                  <a class="nav-link" href="#" onClick={() => {setIsOpen(!isOpen)}}>Contact</a>
                  <a class="nav-link" href="#"><button className='btn-nb'><a href='https://drive.google.com/file/d/1l-iKz77xfB0wu1QCLfo8WC6Zvw-K-05p/view?usp=sharing' target='_blank'>Download CV</a></button></a>
                  <a class="nav-link" href="/quotes">Need Quotes?</a>
              </div>
              </div>
          </div>
      </nav>
      {(isOpen === true) 
        ? <Contact isOpen={isOpen} setIsOpen={setIsOpen}/>
        : null
      }
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/projects' element={<Project/>} />
          <Route path='/quotes' element={<Quote/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;