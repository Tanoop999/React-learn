import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const reactElemnet = React.createElement(
  'a', 
  {href : 'https://www.google.com', target: '_blank' },
  'click here to visit goddogle'
)
createRoot(document.getElementById('root')).render(
  <App/>
)
