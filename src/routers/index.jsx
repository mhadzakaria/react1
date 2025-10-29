import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Index'
import RootLayout from "../layouts/RootLayout";
import AboutPage from "../pages/About";
import Blog from "../pages/blogs/Index";
import DetailBlog from "../pages/blogs/_id";

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
        path: "/blogs/:id",
        element: <DetailBlog />
      },
      {
        path: "/about",
        element: <AboutPage />
      }
    ]
  }
])
