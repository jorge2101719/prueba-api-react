import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import MiApi from './components/MiApi'
import Buscador from './components/Buscador'
import Grafico from './components/Grafico'

function App() {
  const [indicador, setIndicador] = useState('dolar')
  const [filtro, setFiltro] = useState('')
  const [error, setError] = useState(null)


  return (
    <>
      <div className='contenedor-principal bg-primary p-1'>
        <h1 className='my-1'>Indicadores económicos</h1>
        <h5 className='mb-5'>(API mindicador.cl)</h5>

        <div className='componentes bg-secondary'>
          <div className='miapi bg-info m-1'>
            <MiApi indicador={indicador} filtro={filtro} setIndicador={setIndicador} error={error} setError={setError} />
          </div>

          <div className='buscador bg-info m-1 pt-5'>
            <div><Buscador setFiltro={setFiltro} /></div>
            <div><Grafico indicador={indicador} /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
