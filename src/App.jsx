import { useState } from 'react'
import './App.css'

import MiApi from './components/MiApi'
import Buscador from './components/Buscador'
// import Listado from './components/Listado'

function App() {
  const [indicador, setIndicador] = useState('dolar')
  const [filtro, setFiltro] = useState('')

  const handleSelection = (e) => {
    e.preventDefault();
    setIndicador(e.target.value)
  }

  return (
    <>
      <div>
        <h1>App para buscar indicadores económicos</h1>

        {/* <Listado indicador={indicador} setIndicador={setIndicador} /> */}

        <Buscador setFiltro={setFiltro} />

        <select 
        value={indicador}
        onChange={handleSelection}>
          <option>Dólar</option>
          <option>UF</option>
          <option>Euro</option>
        </select><br/>

        <MiApi indicador={indicador} filtro={filtro} />

      </div>
    </>
  )
}

export default App
