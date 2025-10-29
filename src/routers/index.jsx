import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Index'
import ExternalPage from '../pages/External'
import RootLayout from "../layouts/RootLayout";
import AboutPage from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/external",
        element: <ExternalPage />
      },
      {
        path: "/about",
        element: <AboutPage />
      }
    ]
  }
])
