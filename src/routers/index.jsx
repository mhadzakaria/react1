import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Index'
import RootLayout from "../layouts/RootLayout";
import AboutPage from "../pages/About";
import Blog from "../pages/blogs/Index";

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
        path: "/blogs",
        element: <Blog />
      },
      {
        path: "/about",
        element: <AboutPage />
      }
    ]
  }
])
