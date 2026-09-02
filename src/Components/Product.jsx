import React, { useContext } from 'react'
import Filter from '../Cards/Filter'
import Card from '../Cards/Card'
import Cart from '../Cards/Cart'
import { newContext } from '../Context/Context'

function Product() {
  
  return (
    <>
      <Filter />
      <Card />
    </>
  )
}

export default Product