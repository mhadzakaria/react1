import { useState } from "react"

function Search(props) {
  const [search, setSearch] = useState("")
  const changeSearch = (event) => {
    setSearch(event.target.value)
    props.setChangeSearch(event.target.value)
  }

  return (
    <>
      <div>Cari : <input type="text" onChange={changeSearch} /></div>
      <span>Ditemukan 0 data dengan teks {search}</span>
    </>
  )
}

export default Search;