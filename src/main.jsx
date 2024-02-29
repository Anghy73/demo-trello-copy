import React from 'react'
import reactDOM from 'react-dom/client'
import App from './App'
import './style.css'
import { TaskProvider } from '../context/task'

reactDOM.createRoot(document.getElementById('app')).render(
  <TaskProvider>
    <App />
  </TaskProvider>
)
