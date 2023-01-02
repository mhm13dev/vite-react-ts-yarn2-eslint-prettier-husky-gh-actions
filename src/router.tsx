import { createBrowserRouter } from "react-router-dom";

import { Home, Dashboard } from "./screens";
import { APP_ROUTES } from "./constants/app-routes";

export const router = createBrowserRouter([
  {
    path: APP_ROUTES.HOME,
    element: <Home />,
  },
  {
    path: APP_ROUTES.DASHBOARD,
    element: <Dashboard />,
  },
]);
