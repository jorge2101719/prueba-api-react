import { useState, useEffect } from "react"

const MiApi = ({ info, setInfo }) => {
  const [moneda, setMoneda] = useState('uf')

  useEffect(() => {
    consultarApi()
  })
    
  const consultarApi = async () => {
    console.log('dentro de la función consultarApi')
    const url = `https://mindicador.cl/api/${moneda}`
    const res = await fetch(url)
    const valores = await res.json();
    console.log('lo que muestra la función consultarApi', valores)
    setInfo(`${valores}`)
  }


  return (
    <div>
      <div>MiApi</div>

      Aquí debe verse la información 
      <p>{info}</p>

      <p>Datos ordenados</p>      
      <p>{info.serie}</p>

    </div>
  )
}

export default MiApi