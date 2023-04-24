import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar/Navbar'
import Newsblogs from './components/Newsblogs/Newsblogs'
import Answer from './components/Answer/Answer';

function App() {
  return (
    <div className="App">
      <div className='bg-base-300'>
      <Navbar></Navbar>
      </div>
      <Newsblogs></Newsblogs>

      <Toaster />
      <Answer></Answer>
    </div>
  )
}

export default App
