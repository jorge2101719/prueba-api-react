
import { useState, useEffect } from "react"

const MiApi = ({ info, setInfo }) => {
  // const [moneda, setMoneda] = useState('uf')


  useEffect(() => {
    consultarApi()
  }, [])
    
  const consultarApi = async () => {
    // let moneda = 'uf'
    console.log('dentro de la función consultarApi')
    // const url = `https://mindicador.cl/api/`
    const url = 'https://jsonplaceholder.typicode.com/users'
    // const res = await fetch(url)
    // const info = await res.json()
    // 
    fetch(url)
      .then((res) => res.json())
      .then((info) => {
        // console.log(info)
        setInfo(info)})
        // 
  }

  return (
    <div>
      <div>MiApi</div>

      Aquí debe verse la información 
      {/* <p>{info}</p> */}
      
      <div className="card">
        <ul>
          {info?.map((dato) => <li key={dato.id}> {dato.name} -- {dato.username} </li>)}
        </ul>
      </div>
      

      <p>Datos ordenados</p>      
      {/* <p>{info.serie}</p> */}

    </div>
  )
}

export default MiApi