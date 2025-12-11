import React from 'react'

const Map = () => {

let Product = [
   {id:1, title:'Iphone-11', price:15000},
   {id:2, title:'Iphone-12', price:40000},
   {id:3, title:'Iphone-13', price:50000},
   {id:4, title:'Iphone-14', price:60000},
   {id:5, title:'Iphone-15', price:70000},
]

  return (
    <div>
      {Product.map((data) => (
      <div key={data.id}> 
        <h1>Title = {data.title}</h1>
        <h2>Price = {data.price}</h2>
      </div>
      ))}
    </div>
  )
}

export default Map
