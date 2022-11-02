import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import './index.css'
import { ContextProvider } from './Pages/useContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ContextProvider>
      <Router>
          <App />
      </Router>
      </ContextProvider>
  </React.StrictMode>
)
