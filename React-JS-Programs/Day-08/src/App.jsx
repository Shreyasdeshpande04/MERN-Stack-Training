import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GetCard } from './GetCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<GetCard/>
  

    </>
  )
}

export default App
