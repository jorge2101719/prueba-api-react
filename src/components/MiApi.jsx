import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Badge, Table} from 'react-bootstrap'

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
      
      <Badge className="bg-primary p-3">
        <label htmlFor="select" className="my-2"><h4>Seleccione un Indicador de la lista</h4></label><br/>
        <select 
          value={indicador}
          onChange={handleIndicador} className="seleccion">
            <option value={'dolar'}>Dólar</option>
            <option value={'uf'}>UF</option>
            <option value={'euro'}>Euro</option>
            <option value={'utm'}>UTM</option>
            <option value={'ivp'}>IVP</option>
            <option value={'bitcoin'}>Bitcoin</option>
            <option value={'libra_cobre'}>Libra de Cobre</option>
        </select>
      </Badge>

      <div className="my-5">
        <h4>A continuación se deplegarán las estadísticas del indicador <b>{indicador}</b></h4>
        <Table className="my-5">
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