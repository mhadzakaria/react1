import posts from "./../posts.json"
import Article from "../components/Article"

function Homepage() {
  return (
    <>
      <h1>Simple Blog</h1>
      {/* jika kirim props/params selain string pake nya {} */}
      {posts.map( post => (
        <Article title={post.title} date={post.date} tags={post.tags}/>
      ))
      }
    </>
  )
}

export default Homepage