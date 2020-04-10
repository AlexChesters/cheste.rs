import React from 'react'

import PageSkeleton from '../../components/page-skeleton'

import './index.scss'

export default function Home () {
  return (
    <PageSkeleton>
      <section className='introduction'>
        <h1 className='title'>Alex Chesters</h1>
        <p className='subtitle italic'>Senior Software Engineer, BBC iPlayer &amp; Sounds</p>
      </section>
      <section>
        <p>sasa</p>
      </section>
    </PageSkeleton>
  )
}
