import React from 'react'

import BlogEntry from '../../components/BlogEntry'

import Post from '../../../blog/001-post.md'

const Home = () => {
  return <BlogEntry entry={Post} />
}

export default Home
