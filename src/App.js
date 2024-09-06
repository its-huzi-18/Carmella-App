import React from 'react'
import Header from './Components/Header'
import Data from './Components/Data'
import IcoOption from './Components/IcoOption'

function App() {
  return (
    <div className=''>
      <Header />
      <div className='flex px-10  transform hover:-translate-x-14 transition-transform duration-300  '>
        <Data />
      </div>
      <IcoOption />
    </div>
  )
}

export default App