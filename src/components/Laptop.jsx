import React from 'react'

const Laptop = ({model, brand, price}) => {

    const obj = {
               backgroundColor:'green',
               padding:"10px",
               margin:"20px",
               borderRadius:"10px",
               border:"2px solid yellow"
               
    }


  return (
    <div


    // Inline css
    // style={{backgroundColor:'gray',
    //              padding:"10px",
    //              margin:"20px",
    //              borderRadius:"10px",
    //              border:"2px solid yellow",\
    // }}
    style={obj}
    >
      <h2>Brand = {brand}</h2>
      <h3>Model = {model}</h3>
      <h4>Price = {price}</h4>
    </div>
  )
}

export default Laptop
