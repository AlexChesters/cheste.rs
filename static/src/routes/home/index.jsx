import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-fetch'
import ReactMarkdown from 'react-markdown/with-html'

import Example from './components/Example'

import Post from '../../../blog/001-post.md'

const Home = () => {
  const [source, setSource] = useState()

  async function fetchSource () {
    const res = await fetch(Post)
    const data = await res.text()

    setSource(data)
  }

  useEffect(() => {
    fetchSource()
  }, [])

  return (
    <ReactMarkdown
      source={source}
    />
  )
}

export default Home
