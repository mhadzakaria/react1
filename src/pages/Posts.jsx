import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Posts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')


  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    setLoading(true)

    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error(error)
    } else {
      console.log(data)
      setPosts(data)
    }

    setLoading(false)
  }

  async function createPost(e) {
    e.preventDefault()
  
    const { error } = await supabase
      .from('posts')
      .insert({ title, content })
  
    if (error) {
      console.error(error)
    } else {
      setTitle('')
      setContent('')
      fetchPosts()
    }
  }
  
  async function deletePost(id) {
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id)
  
    if (!error) fetchPosts()
  }
  

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <h2>Posts</h2>

      <form onSubmit={createPost}>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Judul"
        />
        <br />

        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Konten"
        />
        <br />

        <button type="submit">Tambah</button>
      </form>

      <br />

      {posts.map(post => (
        <div key={post.id}>
          <strong>{post.title}</strong>
          <p>
            {post.content}
            <br />
            <button onClick={() => deletePost(post.id)}>Hapus</button>
          </p>
          <br />
          <br />
        </div>
      ))}
    </div>
  )
}
