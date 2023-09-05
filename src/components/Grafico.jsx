import { useMemo, useEffect, useState } from 'react'

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js"
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

const Grafico = ({ indicador }) => {
  const [infoGrafico, setInfoGrafico] = useState([])
  const options = {
    responsive: true,
  }

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
        setInfoGrafico(resultados);
      }
    } catch (error) {() => setError(error)}
  }

  console.log(infoGrafico)

  const labels = infoGrafico.map(dato => dato.fecha.slice(0,10).split('-').reverse().join('-')).slice(0,7)
  const valores = infoGrafico.map(dato => dato.valor).slice(0,7)

  console.log(valores)
  console.log(labels)


  console.log(labels)

  const data = useMemo(() => {
    return {
      datasets: [
        {
            label: `${indicador} (últimos 7 días)`,
            data: valores,
        }
      ],
      labels
    }
  }, [indicador]);

  return <Line data={data} options={options} />
}

  

export default Grafico