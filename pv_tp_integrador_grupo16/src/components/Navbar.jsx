import { AppBar, Toolbar, Button} from '@mui/material'; // Importa componentes de Material UI para la barra de navegación
import { Link } from 'react-router-dom';// Importa Link para la navegación entre rutas

const Navbar = () => {
  return (
    <AppBar position='static'>{/* Barra de navegación fija en la parte superior */}
      <Toolbar>{/* Contenedor para los elementos -------------------dentro de la AppBar */}
        <Button color='inherit' component={Link} to="/">INICIO</Button> {/* Botón que navega a la ruta raíz (inicio) */}
        <Button color="inherit" component={Link} to="/favoritos"> {/* Botón que navega a la página de favoritos */}
          Favoritos
        </Button>
        <Button color="inherit" component={Link} to="/crear"> {/* Botón que navega a la página para crear un producto */}
          Crear Producto
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;// Exportamos el componente para poder usarlo en otros archivos
