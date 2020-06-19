import React from 'react'
import Gist from 'react-gist'

import PageSkeleton from '../../components/page-skeleton'

import './index.scss'

export default function Projects () {
  return (
    <PageSkeleton>
      <section className='projects'>
        <h1 className='title' tabIndex={0}>Projects</h1>
        <section className='projects__list'>
          <section>
            <h1><a href='https://github.com/AlexChesters/ukpd' target='_blank' rel='noreferrer noopener' className='projects__list-item--title' tabIndex={0}>UKPD</a></h1>
            <p className='projects__list-item--description' tabIndex={0}>
              As featured on the UK
            Police Data API <a href='https://data.police.uk/about/#tools' target='_blank' rel='noreferrer noopener' tabIndex={0}>website</a>, <span className='italic'>UKPD</span> is a simple Node.js client for
            the <a href='https://data.police.uk/docs/' target='_blank' rel='noreferrer noopener' tabIndex={0}>UK Police Data API</a>,
            compatible with Node.js and the browser.
          </p>
            <div>
              <Gist id='775ba3c969a7479f99b7271a3f0efdff' />
            </div>
          </section>
          <section>
            <h1><a href='https://github.com/AlexChesters/vigilante' target='_blank' rel='noreferrer noopener' className='projects__list-item--title' tabIndex={0}>Vigilante</a></h1>
            <p className='projects__list-item--description' tabIndex={0}>
              <span className='italic'>Vigilante</span> is a minimalist web
              server for Node.js; I have spent a lot of time working with
              Express and Koa and was inspired to see if I could create
              something similar myself.
            </p>
            <p className='projects__list-item--description' tabIndex={0}>
              If you're interested in learning more, I wrote a <a href='https://cheste.rs/blog/004'>blog post</a> about it.
            </p>
          </section>
        </section>
      </section>
    </PageSkeleton>
  )
}
