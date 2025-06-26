import { useState } from 'react';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login, setError, clearError } from '../redux/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setLocalError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setLocalError('');
    dispatch(clearError());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === form.email && u.password === form.password);

    if (!user) {
      setLocalError('Credenciales inválidas');
      return;
    }

    dispatch(login({ email: user.email, name: user.name }));
    navigate('/');
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', p: 3, mt: 4, boxShadow: 3 }}>
      <Typography variant="h5" mb={2}>Inicio de sesión</Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          fullWidth
          label="Correo electrónico"
          name="email"
          value={form.email}
          onChange={handleChange}
          margin="normal"
          required
          type="email"
        />
        <TextField
          fullWidth
          label="Contraseña"
          name="password"
          value={form.password}
          onChange={handleChange}
          margin="normal"
          required
          type="password"
        />
        <Button variant="contained" type="submit" sx={{ mt: 2 }} fullWidth>Ingresar</Button>
      </form>
    </Box>
  );
};

export default Login;