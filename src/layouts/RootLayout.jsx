import { Link, Outlet } from "react-router-dom";
function RootLayout(params) {
  return (
    <>
      <Link to="">Home</Link> |&nbsp;
      <Link to="/blogs">Blog</Link> |&nbsp;
      <Link to="/about">About</Link>
      <p />
      <Outlet />
    </>
  )
}

export default RootLayout;