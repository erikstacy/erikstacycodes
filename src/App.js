import React, { Component } from 'react';
import Header from './layout/Header';
import About from './layout/About';
import Portfolio from './layout/Portfolio';
import Footer from './layout/Footer';
import Display from './layout/Display';
import Contact from './layout/Contact';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Display />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
