import { useState } from "react"
import posts from "./../posts.json"
import Article from "../components/Article"

function Homepage() {
  const [search, setSearch] = useState("")
  const changeSearch = (event) => {
    setSearch(event.target.value)
  }
  return (
    <>
      <h1>Simple Blog</h1>
      {/* jika kirim props/params selain string pake nya {} */}
      <div>Cari : <input type="text" onChange={changeSearch} /></div>
      <span>Ditemukan 0 data dengan teks {search}</span>
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