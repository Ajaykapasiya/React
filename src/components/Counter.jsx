import React, { useState } from 'react'

const Counter = () => {
  //let counter = 0 

  const[counter,setCounter] = useState(0)

  const inc1 = () =>{
    //counter++;
    setCounter(counter+1)

    console.log("Counter = ",counter);
  }

  const dec1 = () => {
    //counter--;
    setCounter(counter-1)
    console.log("Counter = ",counter);
    
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={inc1}>Increse</button>
      <button onClick={dec1}>Decrese</button>
    </div>
  )
}

export default Counter
