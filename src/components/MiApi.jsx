import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Badge, Table} from 'react-bootstrap'
import { indicadores } from './Indicadores'

const MiApi = ({ indicador, setIndicador, filtro, error, setError }) => {
  const [info, setInfo] = useState([]);
  const [listaIndicadores, setListaIndicadores] = useState(indicadores)
  
  useEffect(() => {
    fetchDatosIndicador()
  }, [indicador]);

  const fetchDatosIndicador = async () => {
    const url = `https://mindicador.cl/api/${indicador}`;
    try{
      const response = await fetch(url);
      const data = await response.json();
      if(data.serie != []) {
        const resultados = data.serie.map(dato => dato);
        setInfo(resultados)
      }
    } catch (error) {() => setError(error)}
  }

  const handleIndicador = (e) => {
    setIndicador(e.target.value);
  }

  const Lista = ({fecha, valor}) => {
    return (
      <tr>
        <td>{fecha.slice(0,10).split('-').reverse().join('-')}</td>
        <td>{valor.toFixed(2).replace('.', ',')}</td>
      </tr>
    )
  }

  const indicadoresFiltrados = info.filter(dato => {
    return (
      dato.fecha.slice(0,10).split('-').reverse().join('-').toLowerCase().includes(filtro.toLowerCase())
    )
  })

  return (
    <div className="miapi p-5">
      <Badge className="bg-primary p-3">
        <label htmlFor="select" className="my-2"><h4>Seleccione un Indicador de la lista</h4></label><br/>
        <select 
          value={indicador}
          onChange={handleIndicador} className="seleccion">
            {listaIndicadores.map(index => <option key={index.clave} value={index.clave}> {index.nombre} </option> )}
        </select>
      </Badge>

      <div className="my-5">
        <h4>Estadísticas del indicador <b>{indicador}</b></h4>
        <p>{error ? <p>Error: {error}</p> : null}</p>
        <Table className="my-5" hover striped variant="dark">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {indicadoresFiltrados.map(dato => <Lista key={dato.fecha} fecha={dato.fecha} valor={dato.valor} />)}
          </tbody>          
        </Table>
      </div>
    </div>
  )
}

export default MiApi