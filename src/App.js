import './App.css';
import React from 'react';
import Cards from './components/Cards/Cards';
import DarkMode from'./components/DarkMode/DarkMode';
import Filter from './components/Filter/Filter';
import Nav from './components/Nav/Nav'; 
import SearchBox from './components/SearchBox/SearchBox';

function App() {
  return (
    <div className="App">
      <Nav/>
      <SearchBox/>
      <Filter/>
      <Cards/>
    </div>
  );
}

export default App;
