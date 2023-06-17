const fetchSinglePostsComments = (id) => {
  //await new Promise((resolve) => setTimeout(resolve, 10000))
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: { revalidate: 10 }
  }).then((res) => res.json())
}

async function page () {
  const comments = await fetchSinglePostsComments(1)
  return (
    <div style={{ backgroundColor: 'gray' }}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <h2 >{comment.name}</h2>
          <h2>{comment.body}</h2>
        </li>
      ))}
    </div>
  )
}

export default page
