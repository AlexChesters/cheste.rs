import React from 'react'

import PageSkeleton from '../../components/page-skeleton'
import BlogPreview from '../../components/blog-preview'

import './index.scss'

export default function Home () {
  return (
    <PageSkeleton>
      <section className='introduction'>
        <h1 className='title'>Alex Chesters</h1>
        <p className='subtitle italic'>Senior Software Engineer, BBC iPlayer &amp; Sounds</p>
      </section>
      <section className='blurb'>
        <p>
          I’m a software engineer based in the North West of England, currently
          working for BBC iPlayer &amp; Sounds in Salford, Greater
          Manchester.

          <br /> <br />

          I have a passion for full-stack development, with particular
          experience in Amazon Web Services and developing Node.js applications.
          </p>
      </section>
      <BlogPreview />
    </PageSkeleton>
  )
}
