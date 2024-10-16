import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './routes/Home.jsx'

const router = createBrowserRouter ([
  {
    path: '/', element: <App />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
