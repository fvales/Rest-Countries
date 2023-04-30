import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary'
import { ModeProvider } from './context/ModeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModeProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ModeProvider>
  </React.StrictMode>,
)
