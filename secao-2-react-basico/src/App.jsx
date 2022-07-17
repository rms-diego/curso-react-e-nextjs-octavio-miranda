import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Teste from './pages/Teste';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/teste" element={<Teste />} />
      </Routes>
    );
  }
}

export default App;
