import {createBrowserRouter} from 'react-router-dom'
import HomePage from './Page/HomePage'
import AboutUs from './Page/AboutUs'
import Menu from './Page/Menu'
import Contact from './Page/Contact'


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
])

export default router