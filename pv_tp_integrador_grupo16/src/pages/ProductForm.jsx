import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, editProduct } from '../redux/productSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';

const ProductForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);
  const productToEdit = useSelector(state => state.products.list.find(p => p.id === parseInt(id)));
  const [form, setForm] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
  });
  useEffect(() => {
    if (isEdit && productToEdit) {
      setForm({
        title: productToEdit.title,
        price: productToEdit.price,
        description: productToEdit.description,
        category: productToEdit.category,
        image: productToEdit.image,
      });
    }
  }, [isEdit, productToEdit]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      dispatch(editProduct({ id: parseInt(id), ...form }));
    } else {
      dispatch(addProduct(form));
    }
    navigate('/');
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3, boxShadow: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
      <Typography variant="h5" mb={3}>
        {isEdit ? 'Editar Producto' : 'Crear Producto'}
      </Typography>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          fullWidth
          label="Título"
          name="title"
          value={form.title}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Precio"
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          margin="normal"
          required
          inputProps={{ min: 0, step: 0.01 }}
        />
        <TextField
          fullWidth
          label="Descripción"
          name="description"
          multiline
          rows={4}
          value={form.description}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Categoría"
          name="category"
          value={form.category}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="URL de Imagen"
          name="image"
          value={form.image}
          onChange={handleChange}
          margin="normal"
          required
        />
        <Button variant="contained" type="submit" sx={{ mt: 3 }}>
          {isEdit ? 'Guardar Cambios' : 'Crear Producto'}
        </Button>
      </form>
    </Box>
  );
};
export default ProductForm;