import {Link} from "react-router-dom";

const ProductCard = () => {
   return (
    <div className="alumno-card">
      <h3>{producto.nombre} {alumno.apellido}</h3>
      <p>Curso: {alumno.curso}</p>
      <Link to={`/alumnos/${alumno.id}`}>Ver Detalles</Link> | 
 
    </div>
  );
};

export default ProductCard;

