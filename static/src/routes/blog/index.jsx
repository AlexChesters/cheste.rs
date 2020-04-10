import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import PageSkeleton from '../../components/page-skeleton'
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

  if (!post) return <PageSkeleton />

  return (
    <PageSkeleton>
      <BlogEntry entry={post} />
    </PageSkeleton>
  )
}
