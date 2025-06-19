import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
        <Route path="/" element={<Home/>} />
        <Route path="/favoritos" element={<Favorites/>} />
        <Route path="/producto/:id" element={<ProductDetail/>} />
        <Route path="/crear" element={<ProductForm/>} />
        <Route path="/editar/:id" element={<ProductForm/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;