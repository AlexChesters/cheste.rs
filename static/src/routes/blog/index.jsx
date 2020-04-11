import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import fetch from 'isomorphic-fetch'

import ReactMarkdown from 'react-markdown/with-html'

import PageSkeleton from '../../components/page-skeleton'

import './index.scss'

export default function Blog () {
  const [post, setPost] = useState(null)
  const { entry } = useParams()

  async function fetchPost () {
    const data = await import(`../../../blog/${entry}.md`)
    const post = await fetch(data.default)

    setPost(await post.text())
  }

  useEffect(() => {
    fetchPost()
  }, [])

  if (!post) return <PageSkeleton />

  return (
    <PageSkeleton>
      <section className='blog-entry'>
        <ReactMarkdown
          source={post}
        />
      </section>
    </PageSkeleton>
  )
}
