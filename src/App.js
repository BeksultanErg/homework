import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

// Components
import Header from "./components/Header/Header";

// Pages
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contacts';
import Cart from './pages/Cart';
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contacts' element={<Contact />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;