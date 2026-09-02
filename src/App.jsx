import React, { useContext } from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import { newContext } from './Context/Context';
import Cart from './Cards/Cart';

function App() {
  const { cart } = useContext(newContext);

  if (cart) {
    return <Cart />
  }

  return (
    <>
      <Header />
      <Hero />
    </>
  )
}

export default App