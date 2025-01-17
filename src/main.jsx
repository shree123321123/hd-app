import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline } from '@mui/material'
import {Toaster} from 'react-hot-toast'
import { ContextProvider } from './Context/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ContextProvider>
      <CssBaseline>
        <App />
        <Toaster/>
      </CssBaseline>
    </ContextProvider>

  </React.StrictMode>,
)