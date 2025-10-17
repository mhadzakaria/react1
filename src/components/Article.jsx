function Article(props) {
  return (
    // ini react fragment! <> </>
    <>
      <h3>{props.title}!</h3>
      <div>
        <p>{props.tags.join(", ")}</p>
        <p>Date: {props.date}</p>
      </div>
    </>
  )
}

export default Article;