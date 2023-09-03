
import { useState, useEffect } from "react"

const MiApi = ({ indicador, setIndicador,filtro }) => {
  const [info, setInfo] = useState([])

  useEffect(() => {
    fetchIndicadores()
  }, [indicador])

  const fetchIndicadores = async () => {
    const url = `https://mindicador.cl/api/${indicador}`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    console.log('código del indicador', data.codigo)
    console.log('nombre del indicador', data.nombre)
    console.log('serie del indicador', data.serie)
    if(data.serie) {
        const resultados = data.serie.map(dato => dato);
        console.log('contenido de resultados', resultados)
        setInfo(resultados)
        console.log('datos del actual indicador', info)
      }
    }

    const handleIndicador = (e) => {
      setIndicador(e.target.value);
    }

  const indicadoresFiltrados = info.filter(dato => dato.fecha.toLowerCase().includes(filtro.toLowerCase()))

  return (
    <div>
      <h3>A continuación se deplegarán las estadísticas del indicador {indicador}</h3>
      <select 
        value={indicador}
        onChange={handleIndicador}>
          <option value={'dolar'}>dolar</option>
          <option value={'uf'}>uf</option>
          <option value={'euro'}>euro</option>
        </select><br/>

      <ul>
        {/* {<li>{info.fecha}</li>} */}
        {indicadoresFiltrados.map(dato => <li key={dato.fecha}>{dato.fecha} ----- ${dato.valor}</li>)}
      </ul>
    </div>
  )
}

export default MiApi