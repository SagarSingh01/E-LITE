import React, { useContext } from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import { newContext } from './Context/Context';
import Cart from './Cards/Cart';
import Footer from './Components/Footer';
import ScrollProgress from './Scroll Progress/Scroll';

function App() {

  return (
    <>
      <Header />
      <ScrollProgress />
      <Hero />
      <Footer />
    </>
  )
}

export default App;