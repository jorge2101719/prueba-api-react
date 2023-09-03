import { useState, useEffect } from "react"

const Listado = ({indicador, setIndicaddor}) => {
  const [indicadores, setIndicadores] = useState([])

  useEffect(() => {
    fetchIndicadores()
  }, [])

  const fetchIndicadores = async () => {
    const url = `https://mindicador.cl/api/${indicador}`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    console.log('código del indicador', data.codigo)
    console.log('nombre del indicador', data.nombre)
    console.log('serie del indicador', data.serie)
    if(data.serie != []) {
        const resultados = data.map(dato => dato.serie);
        console.log('contenido de resultados', resultados)
        setIndicadores(resultados)
        console.log('datos del actual indicador',indicadores)
      }
    }

    const handleIndicador = (e) => {
      setIndicaddor(e.target.value);
    }

    return (
      <>
        <h3>Listado</h3>
        <p>Esta por revisar las estadísticas del indicador {indicador}</p>
        <ul>
            {<li>{indicadores.fecha}</li>}
        </ul>
        {/* <select
          value={indicador} 
          onChange={handleIndicador}
        >
          {indicadores.map(op => <option key={op} value={op} > {op} </option>)}
        </select> */}
      </>
      
    )



}

export default Listado