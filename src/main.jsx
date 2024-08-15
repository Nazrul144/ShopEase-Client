import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Routes';
import "./index.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='w-11/12 mx-auto'>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
    </div>
  </StrictMode>,
)
