import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SpeedInsights } from "@vercel/speed-insights/react"
import router from './router';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
        <SpeedInsights />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);