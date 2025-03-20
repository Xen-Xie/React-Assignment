import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';  // Solid icons
import { far } from '@fortawesome/free-regular-svg-icons'; // Regular icons
import { fab } from '@fortawesome/free-brands-svg-icons';  // Brand icons

// Add all icon styles to the library
library.add(fas, far, fab);

import './App.css'
import Hero from './Components/Hero'
import NavBar from './Components/NavBar'
import Partners from './Components/Partners'
import CardArea from './Components/CardArea';
import Train from './Components/Train';
import SliderArea from './Components/SliderArea';
import PercentageArea from './Components/PercentageArea';
import GetStart from './Components/GetStart';
import Footer from './Components/Footer';


function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <Partners />
      <CardArea />
      <Train />
      <SliderArea />
      <PercentageArea />
      <GetStart />
      <Footer />
      

    </>
  )
}

export default App
