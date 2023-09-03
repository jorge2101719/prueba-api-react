import { useState } from 'react'
import './App.css'

import MiApi from './components/MiApi'
// import Buscador from './components/Buscador'

function App() {
  const [infos, setInfos] = useState([])
  // const [filtro, setFiltro] = useState('')

  // console.log('lo que recibe App', info)

  // const filtrados = info.filter((dato) => {
    // return (
      // dato.serie.toLowerCase().includes(filtro.toLowerCase())
      // datoCol.correo.toLowerCase().includes(filtro.toLowerCase()) ||
      // datoCol.edad.toLowerCase().includes(filtro.toLowerCase()) ||
      // datoCol.cargo.toLowerCase().includes(filtro.toLowerCase()) ||
      // datoCol.telefono.toLowerCase().includes(filtro.toLowerCase())
  // )})



  return (
    <>
      <div>
        <h1>Elemento App</h1>

        {/* <Buscador setFiltro={setFiltro} /> */}

        <MiApi infos={infos} setInfos={setInfos} />

      </div>
    </>
  )
}

export default App
