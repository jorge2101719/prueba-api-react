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
      <div className='contenedor-principal'>
        <h1>Índices económicos</h1>

        <div className='componentes'>
          <div className='miapi'>
            <MiApi indicador={indicador} filtro={filtro} setIndicador={setIndicador} />
          </div>

          <div className='buscador'>
            <Buscador setFiltro={setFiltro} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
