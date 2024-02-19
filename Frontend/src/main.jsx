import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // theme
// import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import './index.css'
import { PrimeReactProvider } from "primereact/api";
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <PrimeReactProvider>
    <App />
  </PrimeReactProvider>

);
