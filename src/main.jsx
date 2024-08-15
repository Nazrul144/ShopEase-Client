import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Routes';
import "./index.css";
import AuthProvider from './provider/AuthProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='w-11/12 mx-auto'>
    <HelmetProvider>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
    </div>
  </StrictMode>,
)
