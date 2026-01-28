import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();

// Set base path based on subdomain for asset resolution
const hostname = window.location.hostname;
const parts = hostname.split('.');
const subdomain = parts[0];
if (subdomain && subdomain !== '512') {
  const baseTag = document.getElementById('app-base') as HTMLBaseElement;
  if (baseTag) {
    baseTag.href = `/${subdomain}/`;
  }
}

import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { HomePage } from '@/pages/HomePage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <RouteErrorBoundary />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <RouterProvider router={router} />
  </ErrorBoundary>
)
   