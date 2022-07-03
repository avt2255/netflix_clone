import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner.js'
import RowPost from './Components/RowPost/RowPost'

function App() {
  return (
    <div className='app'>
      <NavBar/>
      <Banner/>
      <RowPost title="Netflix Originals"/>
      <RowPost title="Action" isSmall/>
    </div>
  )
}

export default App
