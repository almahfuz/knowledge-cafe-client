import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Newsblogs from './components/Newsblogs/Newsblogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='bg-base-300'>
      <Navbar></Navbar>
      </div>
      <Newsblogs></Newsblogs>
   

       
    </div>
  )
}

export default App
