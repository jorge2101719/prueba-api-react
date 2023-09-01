const Buscador = ({ setFiltro }) => {
  return (
    <>
      <h3>Buscador</h3>
        <input 
          type="text"
          placeholder="Buscador"
          onChange={(e) => setFiltro(e.target.value)}
        />
    </>
  )
}

export default Buscador