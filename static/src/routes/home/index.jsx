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
      <section class='cv'>
        <h1 className='cv__title'>Background</h1>

        <h2>Education</h2>
        <ol className='cv__list'>
          <li className='cv__list-item'>
            <h1 className='cv__list-item--title'>The Manchester College</h1>
            <p className='cv__list-item--subtitle italic'>September 2014 - May 2016</p>
            <p className='cv__list-item--description'>Level 4 Higher Apprenticeship in IT, Software and Web</p>
          </li>
          <li className='cv__list-item'>
            <h1 className='cv__list-item--title'>Barrow Hall College</h1>
            <p className='cv__list-item--subtitle italic'>September 2012 - May 2014</p>
            <p className='cv__list-item--description'>Attained four AS Levels in Media, Applied ICT, Law and Economics and three A2 levels in Applied ICT, Law and Economics.</p>
          </li>
          <li className='cv__list-item'>
            <h1 className='cv__list-item--title'>Great Sankey High School</h1>
            <p className='cv__list-item--subtitle italic'>September 2007 - May 2012</p>
            <p className='cv__list-item--description'>Attained 9 GCSEs.</p>
          </li>
        </ol>
      </section>
    </PageSkeleton>
  )
}
