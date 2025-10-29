export const postById = ({params}) => {
  // with loader, we don't need .then(response => response.json()) and so on, bcs react has been do that
  return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
}