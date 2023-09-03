
import { useState, useEffect } from "react"

const MiApi = ({ indicador, filtro }) => {

  const [indicadores, setIndicadores] = useState([])

  useEffect(() => {
      fetchIndicadores()
  }, [indicador])
    
  const fetchIndicadores = async () => {
    const url = `https://mindicador.cl/${indicador}`
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    console.log(data);
    if(data.length > 0 || data != '') {
      setIndicadores(...indicadores, data)
    }
  }

  const indicadoresFiltrados = indicadores.filter(dato => dato.toLoweCase().includes(filtro.toLoweCase()))

  return (
    <div>
      <div>MiApi</div>
      <div>
        {indicadoresFiltrados.map((dato) => <p>
          {dato}
        </p>)}
      </div>
    </div>
  )
}

export default MiApi