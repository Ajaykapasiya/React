import React, { useState } from 'react'
import { useEffect } from 'react'

const Ue = () => {
  const[counters, setCounters] = useState(0)

     useEffect(() => {
document.title = counters
    }, [counters])
  return (
    <div>
      <h1>{counters}</h1>
      <button onClick={()=> setCounters(counters+1)}>Increase</button>
      <button onClick={() => setCounters(counters-1)}>Decrease</button>
    </div>
  )
}

export default Ue
