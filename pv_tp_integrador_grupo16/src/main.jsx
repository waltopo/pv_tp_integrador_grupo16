import React from 'react'; // importado de react 
import ReactDOM from 'react-dom/client'; // importado de la libreria react
import App from './App.jsx';
import { Provider } from 'react-redux'; // importado de redux para manejar o compartir los archivos slice

import { store } from './redux/store.js'; // importa el store principal

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/*permite el acceso al store para todos los componentes*/}
      <App /> {/*llama a la app principal */}
    </Provider>
  </React.StrictMode>
);
