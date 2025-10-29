import { useLoaderData } from "react-router-dom";

function DetailBlog() {
  const post = useLoaderData();

  return (
    <>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </>
  )
}

export default DetailBlog;