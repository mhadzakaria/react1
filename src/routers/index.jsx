import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Index'
import ExternalPage from '../pages/External'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/external",
    element: <ExternalPage />
  }
])
