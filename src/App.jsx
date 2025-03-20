import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';  // Solid icons
import { far } from '@fortawesome/free-regular-svg-icons'; // Regular icons
import { fab } from '@fortawesome/free-brands-svg-icons';  // Brand icons

// Add all icon styles to the library
library.add(fas, far, fab);

import './App.css'
import { Routes, Route } from "react-router-dom";

import NavBar from './Components/NavBar'

import Footer from './Components/Footer';
import About from './Components/Routers/About'
import Pricing from './Components/Routers/Pricing'
import Customers from './Components/Routers/Customers'
import Solutions from './Components/Routers/Solutions'


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
      
      <Footer />
      

    </>
  )
}

export default App
