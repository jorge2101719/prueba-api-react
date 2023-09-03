import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import MiApi from './components/MiApi'
import Buscador from './components/Buscador'
// import Listado from './components/Listado'

function App() {
  const [indicador, setIndicador] = useState('dolar')
  // const [year, setYear] = useState('2023')
  const [filtro, setFiltro] = useState('')

  // const handleSelection = (e) => {
    // e.preventDefault();
    // setIndicador(e.target.value)
  // }

  return (
    <>
      <div>
        <h1>App para buscar indicadores económicos</h1>

        {/* <Listado indicador={indicador} setIndicador={setIndicador} /> */}
        <div>
          <Buscador setFiltro={setFiltro} />
        </div>


        <MiApi indicador={indicador} filtro={filtro} setIndicador={setIndicador} />

      </div>
    </>
  )
}

export default App
