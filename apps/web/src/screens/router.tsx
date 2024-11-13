import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import { ROUTES } from 'const';

import { Events } from './events';
import { Event } from './event';

const router = createBrowserRouter([
  { path: ROUTES.EVENTS, element: <Events /> },
  { path: ROUTES.EVENT_ID, element: <Event /> },
  { path: '*', element: <Navigate to={ROUTES.EVENTS} replace /> },
]);

export const Router = () => <RouterProvider router={router} />;
