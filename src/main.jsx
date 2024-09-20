import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import AuthProviders from './providers/AuthProviders.jsx'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routers/Routers.jsx'
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { Toaster } from 'react-hot-toast'
// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <HelmetProvider>
      <QueryClientProvider client={queryClient}>
  <AuthProviders>
  
<RouterProvider router={routers}></RouterProvider>
<Toaster/>
</AuthProviders>
</QueryClientProvider>
</HelmetProvider>

  </StrictMode>,
)
