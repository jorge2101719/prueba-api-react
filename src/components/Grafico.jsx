import { useMemo, useEffect, useState } from 'react'

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js"
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

const Grafico = ({ indicador }) => {
  const [infoGrafico, setInfoGrafico] = useState([])
  const options = {
    responsive: true,
    fill: true,
    // scales: {
    //   y: {
        // min: 0,
    //   },
    // }
  }

  const labels = infoGrafico.map(dato => dato.fecha.slice(0,10).split('-').reverse().join('-')).slice(0,7)
  const valores = infoGrafico.map(dato => dato.valor)

//   console.log(labels.slice(0,5))

  

//   labels.reverse()

  const data = useMemo(() => {
    return {
      datasets: [
        {
          label: `${indicador} (últimos 7 días)`,
          data: valores,
          tension: .3,
          borderColor: 'blue',
          pointBackgroundColor: 'yellow',
          backgroundColor: 'rgba(50,10,256,.2)',
        }
      ],
      labels
    }
  }, [indicador]);

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

  return <Line data={data} options={options} />
}

  

export default Grafico