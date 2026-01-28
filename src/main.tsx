import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();

import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { HomePage } from '@/pages/HomePage'

// Detect base path from URL (e.g., /fr, /de, /ch)
const getBasename = () => {
  const match = window.location.pathname.match(/^\/(fr|de|ch)/);
  return match ? `/${match[1]}` : '';
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <RouteErrorBoundary />,
  },
], { basename: getBasename() });

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <RouterProvider router={router} />
  </ErrorBoundary>
)
   