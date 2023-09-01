import { useEffect } from "react"

const MiApi = ({ data, setData }) => {

  useEffect(() => {
    consultarApi()
  }, [])
    
  const consultarApi = async () => {
    const url = 'https://api.gameofthronesquotes.xyz/v1/random'
    const response = await fetch(url)
    const data = await response.json()
    setData(`${data.sentence} --- ${data.character.name}`)
  }

  return (
    <div>
      <div>MiApi</div>

      {data}

    </div>
  )
}

export default MiApi