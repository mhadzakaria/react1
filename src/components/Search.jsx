import { useState } from "react"

function Search(props) {
  const [search, setSearch] = useState("")

  const changeSearch = () => {
    props.setChangeSearch(search)
  }

  const searchByEnter = e => {
    if (e.key == "Enter") {
      props.setChangeSearch(search)
    }
  }

  return (
    <>
      <div>
        Cari :
        <input type="text" onChange={(e => setSearch(e.target.value))} onKeyDown={searchByEnter}/>
        <button onClick={changeSearch}>Find</button>
      </div>
      <span>Ditemukan {props.totalPosts} data dengan teks {search}</span>
    </>
  )
}

export default Search;