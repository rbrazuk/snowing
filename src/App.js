import React from 'react';
import MenuIcon from './components/MenuIcon';
import Home from './components/Home';
import IconsBar from './components/IconsBar';
import './App.css';

function App() {
  return (
    <div className="app">
      <MenuIcon />
      <Home />
      <IconsBar />
    </div>
  );
}

export default App;
