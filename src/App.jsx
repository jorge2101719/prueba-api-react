import { useState } from 'react'
import './App.css'

import MiApi from './components/MiApi'
import Buscador from './components/Buscador'
import Listado from './components/Listado'

function App() {
  const [indicador, setIndicador] = useState('uf')
  const [filtro, setFiltro] = useState('')

  return (
    <>
      <div>
        <h1>App para buscar indicadores económicos</h1>

        <Listado indicador={indicador} setIndicador={setIndicador} />

        <Buscador setFiltro={setFiltro} />
        
        <MiApi indicador={indicador} filtro={filtro} />

      </div>
    </>
  )
}

export default App
