import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import Home from './routes/Home'
import Treinamentos from './routes/Treinamentos'
import Sobre from './routes/Sobre'
import Loja from './routes/Loja'

const router = createBrowserRouter ([
  {
    path: '/', element: <App />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/treinamentos', element: <Treinamentos /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/loja', element: <Loja /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
