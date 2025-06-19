import { AppBar, Toolbar, Button} from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Button color='inherit' component={Link} to="/">INICIO</Button>
        <Button color="inherit" component={Link} to="/favoritos">
          Favoritos
        </Button>
        <Button color="inherit" component={Link} to="/crear">
          Crear Producto
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;