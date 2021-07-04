import React, { useState } from 'react'

const Counter: React.VFC = () => {
  const [count, setCount] = useState(10);
  return (
    <button onClick={() => {
      setCount((prevCount: number) => prevCount + 1);
      setCount((prevCount: number) => prevCount + 1);
    }}>
      {count}
    </button>
  )
}

export default Counter
