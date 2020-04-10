import React from 'react'

import PageSkeleton from '../../components/page-skeleton'

export default function Home () {
  return (
    <PageSkeleton>
      <section>
        <h1>Alex Chesters</h1>
        <p className='italic'>Senior Software Engineer, BBC iPlayer &amp; Sounds</p>
      </section>
    </PageSkeleton>
  )
}
