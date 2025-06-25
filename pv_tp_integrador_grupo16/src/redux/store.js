import { configureStore } from '@reduxjs/toolkit'; // Libreria de redux para configurar el store
import productsReducer from './productSlice.js'; // Importa acciones que hacen los objetos 
import authReducer from './authSlice.js'; // Importa acciones que hacen los objetos
export const store = configureStore({ 
  reducer: {
    products: productsReducer, // asocia la clave al reducer importado
    auth:authReducer,
  },
}); // configuracion del store
