function Article() {
  const name = "Ahmad";
  const titles = ['React', 'Tutorial'];
  
  return (
    // ini react fragment! <> </>
    <>
      <div>Nama saya {name}!</div>
      <div>
        {titles.map(title => (
          <div>{title}</div>
        ))}
        {titles.map(title => {
          return (
            <>
              <div>{title}</div>
              <div>{title}</div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Article;