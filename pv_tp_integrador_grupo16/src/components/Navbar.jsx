import React from 'react';
import { AppBar, Toolbar, Button, Typography, Avatar, IconButton, Tooltip, Menu, MenuItem} from '@mui/material'; // Importa componentes de Material UI para la barra de navegación
import { Link, useNavigate } from 'react-router-dom';// Importa Link para la navegación entre rutas
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice.js';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    handleClose();
    dispatch(logout());
    navigate('/login'); 
  };

  return (
    <AppBar position='static'
    sx={{backgroundColor:'#1065c0',boxShadow:' 0 4px 6px rgba(0.0.0.0.1)'}}>
      <Toolbar sx={{ display: 'flex', justifyContent:'space-between'}}> {/* Contenedor para los elementos -------------------dentro de la AppBar */}
        {/* Sección izquierda */}
        <div>
        <Button sx={{color: 'white', textTransform: 'none', mr: 3}} color='inherit' component={Link} to="/">INICIO</Button> {/* Botón que navega a la ruta raíz (inicio) */}
        <Button sx={{color: 'white', textTransform: 'none', mr: 0}}color="inherit" component={Link} to="/favoritos"> {/* Botón que navega a la página de favoritos */}
          Favoritos </Button>
        <Button sx={{color: 'white', textTransform: 'none', mr: 0}}color="inherit" component={Link} to="/crear"> {/* Botón que navega a la página para crear un producto */}
          Crear Producto </Button>
        </div>

        {/* Sección derecha: login / usuario */} 
        {/*Login*/}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {user ? (
            <>
              <Typography variant="body1" sx={{ color: '#ecf0f1', mr: 1 }}> Binvenido! {user.email}</Typography>
              <Tooltip title={user.name}>
                <IconButton onClick={handleAvatarClick} size="small" sx={{ ml: 1 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 28, height: 28 }}>
                    {user.name.charAt(0).toUpperCase()}
                  </Avatar>
                </IconButton>
              </Tooltip>

              <Menu anchorEl={anchorEl} id="account-menu" open={open} onClose={handleClose} disableScrollLock
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }} transformOrigin={{ horizontal: 'left', vertical: 'top' }}
              >
                <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Tooltip title="LogIn/Register">
                <IconButton onClick={handleAvatarClick} size="small" sx={{ ml: 1 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar  sx={{ width: 35, height: 35 }}>+</Avatar>
                </IconButton>
              </Tooltip>

              <Menu anchorEl={anchorEl} id="account-menu" open={open} onClose={handleClose}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }} transformOrigin={{ horizontal: 'left', vertical: 'top' }}
              >
                <MenuItem onClick={() => { handleClose(); navigate('/login'); }}>Iniciar Sesión</MenuItem>
                <MenuItem onClick={() => { handleClose(); navigate('/register'); }}>Registrar</MenuItem>
              </Menu>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;// Exportamos el componente para poder usarlo en otros archivos
