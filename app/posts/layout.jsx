import React from 'react'

function PostLayout ({ children }) {
  return (
    <div>
      Home → Posts
      <div>{children}</div>
    </div>
  )
}

export default PostLayout
