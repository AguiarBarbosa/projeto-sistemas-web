import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Register } from './pages/register/Register'
import { Turma } from './pages/turma/Turma'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NotFound } from './pages/not-found/NotFound.tsx'

const router = createBrowserRouter([
  {path:"/", element: <Register/>},
  {path:"/turma", element: <Turma/>},
  {path:"*", element: <NotFound/>},
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
