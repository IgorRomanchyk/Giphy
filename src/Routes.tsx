import { Navigate, useRoutes } from 'react-router-dom'

import Layout from './layouts/Layout'
import NotFound from './pages/404'
import Home from './pages/home'

function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="404" replace /> },
      ],
    },
  ])
}

export default Routes