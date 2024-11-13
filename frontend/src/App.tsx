import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button className='bg-red-200'>
        Join Room
      </button>
    </>
  )
}

export default App
