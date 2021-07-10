import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import fetch from 'isomorphic-fetch'

import PageSkeleton from '../../components/page-skeleton'

import './index.scss'

const appendTabIndexToChildren = (element) => {
  if (!element.children.length) return

  for (let i = 0; i < element.children.length; i++) {
    const child = element.children[i]
    child.setAttribute('tabindex', '0')
    appendTabIndexToChildren(child)
  }
}

export default function BlogEntry () {
  const [post, setPost] = useState(null)
  const { entry } = useParams()

  async function fetchPost () {
    const res = await fetch(`https://cheste.rs/blog/${entry}.json`)
    const post = await res.json()

    setPost(post.html)

    const element = document.getElementById('blog-entry')
    appendTabIndexToChildren(element)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  if (!post) return <PageSkeleton />

  return (
    <PageSkeleton>
      <section className='blog-entry' id='blog-entry'>
        <div dangerouslySetInnerHTML={{ __html: post }} />
      </section>
    </PageSkeleton>
  )
}
