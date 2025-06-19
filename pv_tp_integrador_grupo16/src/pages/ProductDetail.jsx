import { Typography, Button, Box, CardMedia } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/productSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.list.find(p => p.id === parseInt(id)));
  const isFavorite = useSelector(state => state.products.favorites.includes(product?.id));
  if (!product) return <Typography variant="h6">Producto no ENCONTRADO</Typography>;
  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
      <Typography variant="h4" gutterBottom>{product.title}</Typography>
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'contain', maxHeight: 300, mb: 2 }}
      />
      <Typography variant="body1" paragraph>{product.description}</Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        Categoría: {product.category}
      </Typography>
      <Typography variant="h6" paragraph>Precio: ${product.price}</Typography>
      <Button variant="contained" onClick={() => dispatch(toggleFavorite(product.id))}>
        {isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      </Button>
    </Box>
  );
};
export default ProductDetail;