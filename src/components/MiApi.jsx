import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'

const MiApi = ({ indicador, setIndicador, filtro }) => {
  const [info, setInfo] = useState([])

  useEffect(() => {
    fetchIndicadores()
  }, [indicador])

  const fetchIndicadores = async () => {
    const url = `https://mindicador.cl/api/${indicador}`
    const response = await fetch(url);
    const data = await response.json();

    if(data.serie) {
        const resultados = data.serie.map(dato => dato);
        setInfo(resultados)
      }
    }

    const handleIndicador = (e) => {
      setIndicador(e.target.value);
    }

  const indicadoresFiltrados = info.filter(dato => {
    return (
      dato.fecha.slice(0,10).split('-').reverse().join('-').toLowerCase().includes(filtro.toLowerCase())
    )
  })

  return (
    <div>
      
      <div>
        <label htmlFor="select"><h4>Seleccione un Indicador</h4></label><br/>
        <select 
          value={indicador}
          onChange={handleIndicador} className="seleccion">
            <option value={'dolar'}>Dólar</option>
            <option value={'uf'}>UF</option>
            <option value={'euro'}>Euro</option>
            <option value={'utm'}>UTM</option>
        </select>
      </div>

      <div>
        <h3>A continuación se deplegarán las estadísticas del indicador {indicador}</h3>
        <Table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {indicadoresFiltrados.map(dato => <tr key={dato.fecha}>
              <td>{dato.fecha.slice(0,10).split('-').reverse().join('-')}</td>
              <td>{dato.valor.toFixed(2).replace('.', ',')}</td>
            </tr>)}
          </tbody>          
        </Table>
      </div>
    </div>
  )
}

export default MiApi