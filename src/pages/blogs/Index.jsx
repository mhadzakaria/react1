import { useState, useEffect } from "react"

function Blog() {
  const [externalPosts, setExternalPosts] = useState([])

  useEffect(() => {
    console.log('panggil sekali')
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setExternalPosts(json))
  }, []) // jalankan useEffect hanya sekali saat load, [] menunjukan tidak ada state yg di pantau

  useEffect(() => {
    console.log('berubah')
  }) // jalankan useEffect setiap ada perubahan state apapun

  return (
    <>
      <h1>Blog</h1>

      {externalPosts.map((props, index) => (
        <div key={index}>- {props.title}</div>
      ))}
    </>
  )
}

export default Blog;