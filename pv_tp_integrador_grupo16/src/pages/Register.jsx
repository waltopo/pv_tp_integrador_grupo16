import { useState } from 'react';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
const [error, setError] = useState('');
const [success, setSuccess] = useState('');

const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setError('');
    setSuccess('');
  };

const validateEmail = email => /\S+@\S+\.\S+/.test(email);

const handleSubmit = (e) => {e.preventDefault();

    if (!validateEmail(form.email)) {
      setError('Correo inválido');
      return;
    }
if (form.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find(u => u.email === form.email)) {
      setError('El correo ya está registrado');
      return;
    }
 
    users.push({ email: form.email, password: form.password, name: form.name });
    localStorage.setItem('users', JSON.stringify(users));

    setSuccess('Registro exitoso! Redirigiendo a login...');
    setTimeout(() => navigate('/login'), 1500);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', p: 3, mt: 4, boxShadow: 3 }}>
      <Typography variant="h5" mb={2}>Registro de usuario</Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          fullWidth
          label="Nombre"
          name="name"
          value={form.name}
          onChange={handleChange}
margin="normal"
        />
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


<TextField
          fullWidth
          label="Confirmar contraseña"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          margin="normal"
          required
          type="password"
        />

<Button variant="contained" type="submit" sx={{ mt: 2 }} fullWidth>Registrarse</Button>
      </form>
    </Box>
  );
};

export default Register;