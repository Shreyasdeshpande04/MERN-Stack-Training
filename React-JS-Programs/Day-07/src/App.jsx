import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Applayout from './components/Applayout'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Applayout />,
      children: [
        { index: true, element: <Home /> }, // default when "/" is visited
        { path: 'about', element: <About /> }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
