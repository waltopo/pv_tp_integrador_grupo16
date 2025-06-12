import ProductCard from "../components/ProductCard";

const ListaProductos = ({ productos }) => {
  return (
    <div className="lista-productos">
      <h2>Lista de Productos</h2>
      {productos.length === 0 ? (
        <p>No hay alumnos registrados.</p>
      ) : (
        productos.map((producto) => (
          <ProductCard  />
        ))
      )}
    </div>
  );
};

export default ListaProductos;
