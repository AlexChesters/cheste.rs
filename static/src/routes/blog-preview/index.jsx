import React from 'react'

import PageSkeleton from '../../components/page-skeleton'

import './index.scss'

export default function BlogPreview () {
  return (
    <PageSkeleton>
      <section className='blog-preview'>
        <h1 className='title'>Blog</h1>
        <section className='post__list'>
          <h1><a href='/blog/008' className='post__list-item--title'>AWS Re:Invent 2019 - An Overview</a></h1>
          <h1><a href='/blog/007' className='post__list-item--title'>How my website is built</a></h1>
          <h1><a href='/blog/006' className='post__list-item--title'>Re:Invent - Top Tips</a></h1>
          <h1><a href='/blog/005' className='post__list-item--title'>AWS Re:Invent 2018 - An Overview</a></h1>
          <h1><a href='/blog/004' className='post__list-item--title'>Creating your own web server in Node.js</a></h1>
          <h1><a href='/blog/003' className='post__list-item--title'>Creating an AWS Budget with alarms</a></h1>
          <h1><a href='/blog/002' className='post__list-item--title'>Hack Week December 2017 - Who's This?</a></h1>
          <h1><a href='/blog/001' className='post__list-item--title'>Hack Week May 2017 - AFK</a></h1>
        </section>
      </section>
    </PageSkeleton>
  )
}
