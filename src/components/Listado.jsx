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
    if(data.codigo) {
        setIndicadores(data.map(dato => dato.valor))
      }
    }

    const handleIndicador = (e) => {
      setIndicaddor(e.target.value);
    }

    return (
      <>
        <h3>Listado</h3>
        <select
          value={indicador} 
          onChange={handleIndicador}
        >
          <option placeholder="Unidad de Fomento" defaultValue={indicador}></option>
          {indicadores.map(op => <option key={op} value={op} > {op} </option>)}
        </select>
      </>
      
    )



}

export default Listado