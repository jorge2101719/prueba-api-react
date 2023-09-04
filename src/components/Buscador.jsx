const Buscador = ({ setFiltro }) => {
  return (
    <>
      <h4>Ingrese una fecha específica para la búsqueda</h4>
        <input 
          type="text"
          placeholder="Ingrese una fecha"
          onChange={(e) => setFiltro(e.target.value)}
        />
    </>
  )
}

export default Buscador