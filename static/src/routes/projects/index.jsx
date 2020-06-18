import React from 'react'
import Gist from 'react-gist'

import PageSkeleton from '../../components/page-skeleton'

import './index.scss'

export default function Projects () {
  // 775ba3c969a7479f99b7271a3f0efdff

  return (
    <PageSkeleton>
      <section className='projects'>
        <h1 className='title' tabIndex={0}>Projects</h1>
        <section className='projects__list'>
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
      </section>
    </PageSkeleton>
  )
}
