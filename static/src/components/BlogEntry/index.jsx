import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-fetch'
import ReactMarkdown from 'react-markdown/with-html'
import PropTypes from 'prop-types'

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

  return source ? (
    <ReactMarkdown
      source={source}
    />
  ) : null
}

BlogEntry.propTypes = {
  entry: PropTypes.string.isRequired
}

export default BlogEntry
