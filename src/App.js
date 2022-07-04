import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner.js'
import RowPost from './Components/RowPost/RowPost'
import {originals,action, documentary, romance, horror, comedy} from './Urls'

function App() {
  return (
    <div className='app'>
      <NavBar/>
      <Banner/>
      <RowPost title="Netflix Originals"  url= {originals}/>
      <RowPost title="Action" url={action} isSmall/>
      <RowPost title="Documentary" url={documentary} isSmall/>
      <RowPost title="Romance" url={romance} isSmall/>
      <RowPost title="Horror" url={horror} isSmall/>
      <RowPost title="Comedy" url={comedy} isSmall/>
    </div>
  )
}

export default App
