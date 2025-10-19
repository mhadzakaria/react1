const ArticleStatus = ({ isNew }) => {
  // ini cara ternary
  // return isNew ? <span>(Baru)</span> : ''

  // ini cara lebih simple
  return isNew && <span>(Baru)</span>
}

function Article(props) {
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
        </p>
      </div>
    </>
  )
}

export default Article;