import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TagManager from 'react-gtm-module/dist/TagManager.js';

const tagManagerArgs = {
  gtmId: 'GTM-WCVB59QT' // Replace 'GTM-000000' with your GTM ID
};

TagManager.initialize(tagManagerArgs)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
