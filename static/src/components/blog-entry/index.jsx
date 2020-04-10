import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-fetch'
import ReactMarkdown from 'react-markdown/with-html'
import PropTypes from 'prop-types'

import './index.scss'

const BlogEntry = (props) => {
  const [source, setSource] = useState()

  async function fetchSource () {
    const res = await fetch(props.entry)
    const data = await res.text()

    setSource(data)
  }

  useEffect(() => {
    fetchSource()
  }, [])

  if (!source) return null

  return (
    <section className='blog-entry'>
      <ReactMarkdown
        source={source}
      />
    </section>
  )
}

BlogEntry.propTypes = {
  entry: PropTypes.string.isRequired
}

export default BlogEntry
