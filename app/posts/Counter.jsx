'use client'
import { useState } from 'react'
function Counter () {
  const [count, setCount] = useState(0)
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Agregar</button>
    </div>
  )
}

export default Counter
