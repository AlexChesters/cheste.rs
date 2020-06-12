import React from 'react'

import PageSkeleton from '../../components/page-skeleton'

import './index.scss'

export default function Talks () {
  return (
    <PageSkeleton>
      <section className='talks'>
        <h1 className='title' tabIndex={0}>Conference talks</h1>
        <section className='post__list'>
          <h1>
            <a href='/assets/slides/net312.pdf' className='post__list-item--title' tabIndex={0}>
              How the BBC uses Lambda@Edge to customize device pages
            </a>
          </h1>
          <p tabIndex={0}>
            For most of 2019 I worked on an exciting project to replace the
            system that BBC iPlayer on TV uses to generate the HTML, XHTML or
            CE-HTML page used by over 3 million people a day.
          </p>
          <p tabIndex={0}>
            The kind folks at AWS asked me to speak about this project at AWS
            Re:Invent 2019 in Las Vegas, Nevada; if you&apos;re interested in reading
            more you can view the slides <a href='/assets/slides/net312.pdf'>here</a>.
          </p>
        </section>
      </section>
    </PageSkeleton>
  )
}
