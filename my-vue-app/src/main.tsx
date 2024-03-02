import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import WebSocketComponent from './productosPagados.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <WebSocketComponent />
  </React.StrictMode>,
)
