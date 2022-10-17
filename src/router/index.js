import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Home = lazy(() => import('../pages/home/home'))

const routes = [
    {
        path: "/",
        element: <Navigate to='/home' />
    },
    {
        path: "/home",
        element: <Home />
    }
]

export default routes