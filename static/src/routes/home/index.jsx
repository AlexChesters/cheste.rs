import React from 'react'

import PageSkeleton from '../../components/page-skeleton'

import './index.scss'

export default function Home () {
  return (
    <PageSkeleton>
      <section className='introduction'>
        <h1 className='title'>Alex Chesters</h1>
        <p className='subtitle italic'>
          Senior Software Engineer, BBC iPlayer &amp; Sounds
        </p>
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

        <h2>Experience</h2>
        <ol className='cv__list'>
          <li className='cv__list-item'>
            <h1 className='cv__list-item--title'>
              British Broadcasting Corporation
            </h1>
            <p className='cv__list-item--subtitle italic'>
              Senior Software Engineer (August 2019 - Present)
            </p>
            <p className='cv__list-item--description'>
              In August 2019 I was promoted to my current position of Senior
              Software Engineer. Whilst continuing to work on the development of
              the BBC's Connected TV applications, I now also lead the
              Continuous Delivery Guild; a cross-discipline community exploring
              the obstacles to Continuous Delivery in BBC iPlayyer &amp; Sounds.
            </p>

            <p className='cv__list-item--subtitle italic'>
              Software Engineer (September 2017 - August 2019)
            </p>
            <p className='cv__list-item--description'>
              In September 2017 I was promoted to the role of Software Engineer,
              continuing to work in the division now known as BBC Design &amp;
              Engineering on the BBC's Connected TV applications.
            </p>

            <p className='cv__list-item--subtitle italic'>
              Junior Software Engineer (January 2017 - September 2017)
            </p>
            <p className='cv__list-item--description'>
              In January 2017 I completed my apprenticeship scheme and began the
              role of a Junior Software Engineer; I continued to work in the
              division now known as BBC Design &amp; Engineering on the BBC's
              various Connected TV applications.
            </p>

            <p className='cv__list-item--subtitle italic'>
              Apprentice Software Engineer (September 2014 - January 2017)
            </p>
            <p className='cv__list-item--description'>
              Between September 2014 and January 2017 I worked as an Apprentice
              Software Engineer at the BBC whilst completing a Level 4 Higher
              Apprenticeship in IT, Software and Web at The Manchester College.
              I worked in the division now known as BBC Design &amp; Engineering
              MediaCityUK, developing applications including BBC iPlayer, Sport,
              News and Red Button+ for Connected TV devices, such as smart TVs,
              set-top boxes and games consoles.
            </p>
          </li>
        </ol>

        <h2>Education</h2>
        <ol className='cv__list'>
          <li className='cv__list-item'>
            <h1 className='cv__list-item--title'>The Manchester College</h1>
            <p className='cv__list-item--subtitle italic'>
              September 2014 - May 2016
            </p>
            <p className='cv__list-item--description'>
              Level 4 Higher Apprenticeship in IT, Software and Web
            </p>
          </li>
          <li className='cv__list-item'>
            <h1 className='cv__list-item--title'>Barrow Hall College</h1>
            <p className='cv__list-item--subtitle italic'>
              September 2012 - May 2014
            </p>
            <p className='cv__list-item--description'>
              Attained four AS Levels in Media, Applied ICT, Law and Economics
              and three A2 levels in Applied ICT, Law and Economics.
            </p>
          </li>
          <li className='cv__list-item'>
            <h1 className='cv__list-item--title'>Great Sankey High School</h1>
            <p className='cv__list-item--subtitle italic'>
              September 2007 - May 2012
            </p>
            <p className='cv__list-item--description'>Attained 9 GCSEs.</p>
          </li>
        </ol>
      </section>
    </PageSkeleton>
  )
}
