// Ternary operator 
// (condition) ? (statement 1 ) : (statement 2)

import React from 'react'

const Person3 = ({name, age,pancard}) => {

  (age > 18) ? (console.log("Age is valid ")) : ("Age is not valid")


  return (
    <div>
      <h1>Name = {name}</h1>
      <h3>
        {age > 18 ? <h1>You can drive</h1> : <h1> You can not drive </h1>}
      </h3>
      <h2>{pancard && <p>You can open account</p> }</h2>
    </div>
  )
}

export default Person3
