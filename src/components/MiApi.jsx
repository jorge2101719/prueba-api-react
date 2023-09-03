
import { useState, useEffect } from "react"

const MiApi = ({ infos, setInfos }) => {
  // const [moneda, setMoneda] = useState('uf')
  const [indicador, setIndicador] = useState('')


  useEffect(() => {
      consultarApi()
  }, [indicador])
    
  const consultarApi = async () => {
    const url = `https://mindicador.cl/api/${indicador}`
    // const url = 'https://jsonplaceholder.typicode.com/users'
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    // console.log(data.serie)
    setInfos([...infos,
       data ])
  }

  const handleChange = (e) => {
    setIndicador(e.target.value)
  }

  return (
    <div>
      <div>MiApi</div>

      Aquí debe verse la información 
      {/* <p>{info}</p> */}
      
      <div className="card">

        <input
          type='text'
          name="indicador"
          value={indicador}
          onChange={handleChange}
        />
        
        <ul>
          {infos.map((info) => <li key={info.fecha}> {info.fecha} -- ${info.uf.valor}</li>)}
        </ul>
      </div>
      

      <p>Datos ordenados</p>      
      {/* <p>{info.serie}</p> */}

    </div>
  )
}

export default MiApi