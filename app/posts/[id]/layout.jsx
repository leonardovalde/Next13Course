import Link from 'next/link'

const fetchSinglePosts = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 10 }
  }).then((res) => res.json())
}

async function PostDescription ({ children, params }) {
  const { id } = params
  const post = await fetchSinglePosts(id)
  return (
    <>
      <h1>{post.title}</h1>
      <hr />
      <h2>{post.body}</h2>
      <Link href={'/posts/[id]/comments'} as={`/posts/${id}/comments`}>
        Comentarios
      </Link>
      {children}
    </>
  )
}
export default PostDescription
