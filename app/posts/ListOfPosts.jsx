import Link from 'next/link'
const fetchPosts = (min, max) => {
  console.log('Haciedo el fetch')

  return fetch('https://jsonplaceholder.typicode.com/posts')
  // return fetch('https://jsonplaceholder.typicode.com/posts', {next: {revalidate: 10}})
  // return fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-store'})
    .then((res) => res.json())
    .then((posts) => posts.slice(min, max))
}

async function ListOfPosts () {
  const posts = await fetchPosts(0, 100)
  return posts.map((post) => (
    <Link href={'/posts/[id]'} as={`/posts/${post.id}`} key={post.id}>
      <h1 style={{ color: 'red' }}>{post.title}</h1>
      <p>{post.body}</p>
    </Link>
  ))
}

export default ListOfPosts
