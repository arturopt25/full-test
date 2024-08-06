import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';  // Asegúrate de que esta línea esté presente
import App from './App';


// ReactDOM.render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);