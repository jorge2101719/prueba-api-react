const Buscador = ({ setFiltro }) => {
  return (
    <>
      <h3>Ingrese una fecha específica para la búsqueda</h3>
        <input 
          type="text"
          placeholder="Ingrese una fecha"
          onChange={(e) => setFiltro(e.target.value)}
        />
    </>
  )
}

export default Buscador