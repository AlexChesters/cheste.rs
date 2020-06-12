import React from 'react'

import PageSkeleton from '../../components/page-skeleton'

import './index.scss'

export default function Home () {
  return (
    <PageSkeleton>
      <section className='introduction'>
        <h1 className='title' tabIndex={0}>Alex Chesters</h1>
        <p className='subtitle italic' tabIndex={0}>
          Senior Software Engineer, BBC iPlayer &amp; Sounds
        </p>
      </section>
      <section className='blurb' tabIndex={0}>
        <p tabIndex={0}>
          I’m a software engineer based in the North West of England, currently
          working for BBC iPlayer &amp; Sounds in Salford, Greater
          Manchester.

          <br /> <br />

          I have a passion for full-stack development, with particular
          experience in Amazon Web Services and developing Node.js applications.
        </p>
      </section>
      <section className='cv'>
        <h1 className='cv__title' tabIndex={0}>Background</h1>

        <h2 tabIndex={0}>Experience</h2>
        <ol className='cv__list'>
          <li className='cv__list-item'>
            <h1 className='cv__list-item--title' tabIndex={0}>
              British Broadcasting Corporation
            </h1>
            <p className='cv__list-item--subtitle italic' tabIndex={0} aria-label='Senior Software Engineer (August 2019 to present)'>
              Senior Software Engineer (August 2019 - Present)
            </p>
            <p className='cv__list-item--description' tabIndex={0}>
              In August 2019 I was promoted to my current position of Senior
              Software Engineer. Whilst continuing to work on the development of
              the BBC&apos;s Connected TV applications, I now also lead the
              Continuous Delivery Guild; a cross-discipline community exploring
              the obstacles to Continuous Delivery in BBC iPlayer &amp; Sounds.
            </p>

            <p className='cv__list-item--subtitle italic' tabIndex={0} aria-label='Software Engineer (September 2017 to August 2019)'>
              Software Engineer (September 2017 - August 2019)
            </p>
            <p className='cv__list-item--description' tabIndex={0}>
              In September 2017 I was promoted to the role of Software Engineer,
              continuing to work in the division now known as BBC Design &amp;
              Engineering on the BBC&apos;s Connected TV applications.
            </p>

            <p className='cv__list-item--subtitle italic' tabIndex={0} aria-label='Junior Software Engineer (January 2017 to September 2017)'>
              Junior Software Engineer (January 2017 - September 2017)
            </p>
            <p className='cv__list-item--description' tabIndex={0}>
              In January 2017 I completed my apprenticeship scheme and began the
              role of a Junior Software Engineer; I continued to work in the
              division now known as BBC Design &amp; Engineering on the
              BBC&apos;s various Connected TV applications.
            </p>

            <p className='cv__list-item--subtitle italic' tabIndex={0} aria-label='Apprentice Software Engineer (September 2014 to January 2017)'>
              Apprentice Software Engineer (September 2014 - January 2017)
            </p>
            <p className='cv__list-item--description' tabIndex={0}>
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

        <h2 tabIndex={0}>Licenses and Certifications</h2>
        <ol className='cv__list'>
          <li className='cv__list-item'>
            <h1 className='cv__list-item--title' tabIndex={0}>Mental Health First Aider</h1>
            <p className='cv__list-item--subtitle italic' tabIndex={0}>MHFA England</p>
            <p className='cv__list-item--description' tabIndex={0}>
              I am a Mental Health First Aider, qualified in providing first aid
              to people who may be experiencing mental health issues such as
              depression, anxiety and psychosis.
            </p>
          </li>

          <li className='cv__list-item'>
            <h1 className='cv__list-item--title' tabIndex={0}>
              AWS Certificated Solutions Architect - Associate
            </h1>
            <p className='cv__list-item--subtitle italic' tabIndex={0}>
              Amazon Web Services
            </p>
            <p className='cv__list-item--description' tabIndex={0}>
              I am a qualified AWS Solutions Architect at Associate level.
            </p>
          </li>
        </ol>

        <h2 tabIndex={0}>Accomplishments</h2>
        <ol className='cv__list'>
          <li className='cv__list-item'>
            <h1 className='cv__list-item--title' tabIndex={0}>
              BBC Design &amp; Engineering Apprentice of the Year 2016
            </h1>
          </li>
        </ol>

        <h2 tabIndex={0}>Education</h2>
        <ol className='cv__list'>
          <li className='cv__list-item'>
            <h1 className='cv__list-item--title' tabIndex={0}>The Manchester College</h1>
            <p className='cv__list-item--subtitle italic' tabIndex={0} aria-label='September 2014 to May 2016'>
              September 2014 - May 2016
            </p>
            <p className='cv__list-item--description' tabIndex={0}>
              Level 4 Higher Apprenticeship in IT, Software and Web
            </p>
          </li>

          <li className='cv__list-item'>
            <h1 className='cv__list-item--title' tabIndex={0}>Barrow Hall College</h1>
            <p className='cv__list-item--subtitle italic' tabIndex={0} aria-label='September 2012 to May 2014'>
              September 2012 - May 2014
            </p>
            <p className='cv__list-item--description' tabIndex={0}>
              Attained four AS Levels in Media, Applied ICT, Law and Economics
              and three A2 levels in Applied ICT, Law and Economics.
            </p>
          </li>

          <li className='cv__list-item'>
            <h1 className='cv__list-item--title' tabIndex={0}>Great Sankey High School</h1>
            <p className='cv__list-item--subtitle italic' tabIndex={0} aria-label='September 2007 to May 2012'>
              September 2007 - May 2012
            </p>
            <p className='cv__list-item--description' tabIndex={0}>Attained 9 GCSEs.</p>
          </li>
        </ol>
      </section>
    </PageSkeleton>
  )
}
