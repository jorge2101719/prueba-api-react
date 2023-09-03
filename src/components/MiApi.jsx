
import { useState, useEffect } from "react"

const MiApi = ({ indicador, filtro }) => {

  const [indicadores, setIndicadores] = useState([])

  useEffect(() => {
      fetchIndicadores()
  }, [indicador])
    
  const fetchIndicadores = async () => {
    const url = `https://mindicador.cl/${indicador}`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    console.log('código del indicador', data.codigo)
    console.log('nombre del indicador', data.nombre)
    console.log('serie del indicador', data.serie)

    if(data.serie != []) {
      const resultados = data.map(dato => dato.serie);
      console.log('contenido de resultados', resultados)
      // setIndicadores(...indicadores, resultados)
      console.log('datos del actual indicador',indicadores)
    }
  }

  const indicadoresFiltrados = indicadores.filter(dato => dato.toLoweCase().includes(filtro.toLoweCase()))

  return (
    <div>
      <h3>A continuación se deplegarán las estadísticas del indicador {indicador}</h3>
      <ul>
        <li>Datos</li>
        {indicadoresFiltrados.map(dato => <li>{dato.serie.fecha}</li>)}
      </ul>
    </div>
  )
}

export default MiApi