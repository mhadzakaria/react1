import { useState } from "react"
import postsData from "./../posts.json"
import Article from "../components/Article"
import Search from "../components/Search"

function Homepage() {
  const [posts, setPosts] = useState(postsData)
  const [totalPosts, setTotalPosts] = useState(0)
  const setChangeSearch = (value) => {
    const filteredPosts = postsData.filter((post) =>
      post.title.toLowerCase().includes(value.toLowerCase())
    )
    setTotalPosts(filteredPosts.length)

    setPosts(filteredPosts)
  }
  return (
    <>
      <h1>Simple Blog</h1>

      <Search setChangeSearch={setChangeSearch} totalPosts={totalPosts}/>

      {/* jika kirim props/params selain string pake nya {} */}
      {posts.map( (post, index) => (
        <Article title={post.title} date={post.date} tags={post.tags} key={index } />
      ))
      }
      {/* ini cara kedua kirim params dengn spesifik key object nya lebih simple */}
      {posts.map(({title, tags, date}, index) => (
        <Article {...{title, tags, date}} key={index}/>
      ))}
    </>
  )
}

export default Homepage