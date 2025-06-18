import {Card, CardMedia, CardContent, Typography, IconButton, CardActions, Button} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/productSlice';
const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.products.favorites.includes(product.id));

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
        <Button component={Link} to={`/producto/${product.id}`} size="small">
          Ver más
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

