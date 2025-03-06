import { createRoot } from 'react-dom/client'
import AppRoutes from './Routes/AppRoutes';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
)
