import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './components/AuthProvider'
import './assets/css/index.css'
import router from './routes/router'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <AuthProvider isSignedIn={false}>
  //     <RouterProvider router={router}></RouterProvider>
  //   </AuthProvider>
  // </StrictMode>,
  <AuthProvider isSignedIn={false}>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
)
