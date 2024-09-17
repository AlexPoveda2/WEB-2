import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
export let enrutador = [
    {
      element: <Login />,
      path: "/login",
    },
    {
      path: "/",
      element: <Dashboard />,
    },
]
