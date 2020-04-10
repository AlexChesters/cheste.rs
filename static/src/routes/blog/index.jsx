import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import BlogEntry from '../../components/blog-entry'

export default function Blog () {
  const [post, setPost] = useState(null)
  const { entry } = useParams()

  async function fetchPost () {
    const data = await import(`../../../blog/${entry}.md`)

    setPost(data.default)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return post ? <BlogEntry entry={post} /> : null
}
