import {Card, CardMedia, CardContent, Typography, IconButton, CardActions, Menu, MenuItem} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/productSlice';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState} from 'react';

const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.products.favorites.includes(product.id));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) =>{
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = ()=>{
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

