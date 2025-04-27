import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { store } from './redux/store';  // Importing Redux store

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  {/* Wrapping App with Redux Provider */}
       {/* Wrapping App with Router for routing */}
        <App />
    
    </Provider>
  </StrictMode>,
);
