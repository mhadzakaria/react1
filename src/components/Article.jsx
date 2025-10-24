import { useContext } from "react";
import { GlobalContext } from "../context";

const ArticleStatus = ({ isNew }) => {
  // ini cara ternary
  // return isNew ? <span>(Baru)</span> : ''

  // ini cara lebih simple
  return isNew && <span>(Baru)</span>
}

function Article(props) {
  const user = useContext(GlobalContext)
  return (
    // ini react fragment! <> </>
    <>
      <div>
        <h3>{props.title}!</h3>
        <p>
          {props.tags.join(", ")}
          <br />
          Date: {props.date}
          <ArticleStatus isNew={props.isNew}/>
          <br />
          <span>Dibuat oleh : {user.username}</span>
        </p>
      </div>
    </>
  )
}

export default Article;