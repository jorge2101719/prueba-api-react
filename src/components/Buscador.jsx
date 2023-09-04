import Badge from 'react-bootstrap/Badge'

const Buscador = ({ setFiltro }) => {
  return (
    <Badge className='bg-success pill'>
      <h4>Ingrese una fecha específica para la búsqueda</h4>
        <input
          type="text"
          placeholder="Ingrese una fecha"
          onChange={(e) => setFiltro(e.target.value)}
        />
        <p className="my-5">Tenga presente que no todos los indicadores presentan valores diarios</p>
    </Badge>
  )
}

export default Buscador