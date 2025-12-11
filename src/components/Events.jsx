import React from 'react'

const Events = () => {
  
    const handleclick = () => {
        alert('You click the buttton')
    }

    const addition = (a) => {
        alert(a+10)
    }

  return (
    <div>
      <h1>We are learning react </h1>
      <button onClick={handleclick}>Click this</button>
      <button onMouseOver={handleclick}>Click this</button>
      <button onClick={()=>addition(20)}>Button 2</button>

    </div>
  )
}
 
export default Events
