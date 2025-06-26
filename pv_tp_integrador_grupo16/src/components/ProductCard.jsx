import {Card, CardMedia, CardContent, Typography, IconButton, CardActions, Menu, MenuItem} from '@mui/material'; // aquí implementamos  de Material UI
import StarIcon from '@mui/icons-material/Star'; // Icono de estrella llena (favorito)
import StarBorderIcon from '@mui/icons-material/StarBorder';// Icono de estrella vacía (no favorito)
import { Link } from 'react-router-dom';// Para crear enlaces entre páginas
import { useDispatch, useSelector } from 'react-redux';// estos serian los Hooks de Redux para acceder y modificar el estado
import { toggleFavorite } from '../redux/productSlice';// Acción para alternar si un producto es favorito o no
import MoreVertIcon from '@mui/icons-material/MoreVert';// Icono de más opciones (menú desplegable)
import { useState} from 'react'; // Hook de estado para manejar el menú desplegable de opciones

const ProductCard = ({product}) => {
  const dispatch = useDispatch(); // Hook para poder enviar acciones a Redux
  const favorites = useSelector(state => state.products.favorites.includes(product.id));// aquí lo que nos encargamos Verifica si el producto actual está en la lista de favoritos
  const [anchorEl, setAnchorEl] = useState(null);//variable de estado para manejar el menú desplegable de opciones
  const open = Boolean(anchorEl);// verifica si el menú está abierto o cerrado

  const handleMenuClick = (event) =>{// Función para manejar el clic en el botón de opciones
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = ()=>{// Función para cerrar el menú
    setAnchorEl(null);
  };

   return (
    <Card sx={{ maxWidth: 250, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'contain', padding: 2 }}
      />
      <CardContent>
        <Typography variant="h6" component="div" noWrap>
          {product.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <IconButton onClick={() => dispatch(toggleFavorite(product.id))} aria-label="toggle favorite">
          {favorites ? <StarIcon color="warning" /> : <StarBorderIcon />}
        </IconButton>
        <IconButton onClick={handleMenuClick}>
            <MoreVertIcon />
         </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
          >
            <MenuItem
              component={Link}
              to={`/producto/${product.id}`}
              onClick={handleMenuClose}
            >
              Ver más
            </MenuItem>
            <MenuItem
              component={Link}
              to={`/producto/editar/${product.id}`}
              onClick={handleMenuClose}
            >
              Editar
            </MenuItem>
          </Menu>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

