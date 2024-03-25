import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>       
    <ToastProvider>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider> 
    </ToastProvider>
        
  </Router>
);
