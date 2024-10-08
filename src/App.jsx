// App.jsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Planet1 from './components/Planet1';
import Planetscards from './components/Planetscards';



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planet/1" element={<Planet1/>} />
      <Route path="/planet/:planetName" element={<Planetscards/>}/>
      <Route path="/planet/" element={<Planetscards name={"Venus"} description={"Venus is the second planet from the Sun, and Earth's closest planetary neighbor."} image={'https://science.nasa.gov/wp-content/uploads/2024/03/venus-mariner-10-pia23791-fig2-16x9-1.jpg?w=1536&format=webp'} />}/>
    </Routes>
  );
};

export default App;


