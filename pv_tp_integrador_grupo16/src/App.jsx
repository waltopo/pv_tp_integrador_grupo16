import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home';
import NotFound from './pages/NotFound.jsx';
import Favorites from './pages/Favorites.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import ProductForm from './pages/ProductForm.jsx';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* Ruta publicas */}
        <Route path="/login"  element={<></>} />
        <Route path="/register" element={<></>} />
        {/* Rutas privadas */}
        <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} />
        <Route path="/favoritos" element={<PrivateRoute><Favorites/></PrivateRoute>} />
        <Route path="/producto/:id" element={<PrivateRoute><ProductDetail/></PrivateRoute>} />
        <Route path="/crear" element={<PrivateRoute><ProductForm/></PrivateRoute>} />
        <Route path="/producto/editar/:id" element={<PrivateRoute><ProductForm/></PrivateRoute>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;