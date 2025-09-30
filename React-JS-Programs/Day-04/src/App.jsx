
import { useState } from 'react'
import './App.css'
import { UseState } from './components/useState'
function App() {
const [count, setCount] = useState(0)
return (
    <>
<UseState></UseState>
</>
)
}
export default App