import { useState, useEffect } from "react"
import postsData from "./../posts.json"
import Article from "../components/Article"
import Search from "../components/Search"

function Homepage() {
  const [posts, setPosts] = useState(postsData)
  const [totalPosts, setTotalPosts] = useState(0)
  const [externalPosts, setExternalPosts] = useState([])
  const setChangeSearch = (value) => {
    const filteredPosts = postsData.filter((post) =>
      post.title.toLowerCase().includes(value.toLowerCase())
    )
    setTotalPosts(filteredPosts.length)

    setPosts(filteredPosts)
  }

  useEffect(() => {
    console.log('panggil sekali')
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setExternalPosts(json))
  }, []) // jalankan useEffect hanya sekali saat load, [] menunjukan tidak ada state yg di pantau

  useEffect(() => {
    console.log('list post data berubah')
  }, [posts]) // jalankan useEffect saat state posts berubah atau di sentuh

  useEffect(() => {
    console.log('berubah')
  }) // jalankan useEffect setiap ada perubahan state apapun

  return (
    <>
      <h1>Simple Blog</h1>
      <Search setChangeSearch={setChangeSearch} totalPosts={totalPosts}/>

      {/* jika kirim props/params selain string pake nya {} */}
      {/* {posts.map( (post, index) => (
        <Article title={post.title} date={post.date} tags={post.tags} key={index } />
      ))} */}
      {/* ini cara kedua kirim params dengn spesifik key object nya lebih simple */}
      {/* {posts.map(({title, tags, date}, index) => (
        <Article {...{title, tags, date}} key={index}/>
      ))} */}
      {/* ini cara ketiga lebih simple tapi kirim semua props nya */}

      {posts.map((props, index) => (
        <Article {...props} key={index}/>
      ))}

      <hr />

      {externalPosts.map((props, index) => (
        <div key={index}>- {props.title}</div>
      ))}
    </>
  )
}

export default Homepage