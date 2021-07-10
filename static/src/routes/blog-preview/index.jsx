import React, { useState, useEffect } from 'react'

import PageSkeleton from '../../components/page-skeleton'

import './index.scss'

export default function BlogPreview () {
  const [blogData, setBlogData] = useState([])

  useEffect(async () => {
    const res = await window.fetch('https://cheste.rs/blog/overview.json')
    const data = await res.json()

    setBlogData(data)
  }, [])

  return (
    <PageSkeleton>
      <section className='blog-preview'>
        <h1 className='title' tabIndex={0}>Blog</h1>
        <table className='post__table'>
          <tbody>
            {
              blogData.map((entry, index) => {
                return (
                  <tr key={index} className='post__table-item'>
                    <td>
                      <a href={`/blog/${entry.identifier}`} className='post__table-item--title' tabIndex={0}>
                        <h1>{entry.title}</h1>
                        <p>{entry.preview}</p>
                      </a>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </section>
    </PageSkeleton>
  )
}
