import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Index'
import RootLayout from "../layouts/RootLayout";
import AboutPage from "../pages/About";
import Blog from "../pages/blogs/Index";
import DetailBlog from "../pages/blogs/_id";
import { postById } from "../apis/loader";


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
        element: <Blog /> // without loader, use fetch inside  page
      },
      {
        path: "/blogs/:id",
        element: <DetailBlog />,  // using loader, so without blank section on first load
        loader: postById
      },
      {
        path: "/about",
        element: <AboutPage />
      }
    ]
  }
])
