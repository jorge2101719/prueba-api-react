import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import MiApi from './components/MiApi'
import Buscador from './components/Buscador'

function App() {
  const [indicador, setIndicador] = useState('dolar')
  const [filtro, setFiltro] = useState('')


  return (
    <>
      <div>
        <h1>App para buscar indicadores económicos</h1>

        <div>
          <Buscador setFiltro={setFiltro} />
        </div>

        <MiApi indicador={indicador} filtro={filtro} setIndicador={setIndicador} />

      </div>
    </>
  )
}

export default App
