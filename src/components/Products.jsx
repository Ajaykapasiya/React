import React from 'react'

const Products = ({name,brand,price}) => {
  return (
    <div>
      <h1>Car name = {name}</h1>
      <h2>Car brand = {brand}</h2>
      <h3>Car price = {price}</h3>
    </div>
  )
}

export default Products
