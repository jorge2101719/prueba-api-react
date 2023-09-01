import { useState, useEffect, useRef } from 'react'
import './App.css'

import MiApi from './components/MiApi'

function App() {
  const [data, setData] = useState([])



  return (
    <>
      <div>
        <h1>Elemento App</h1>

        <MiApi data={data} setData={setData} />
      </div>
    </>
  )
}

export default App
