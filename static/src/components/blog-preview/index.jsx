import React from 'react'

import './index.scss'

export default function BlogPreview () {
  return (
    <section>
      <ol className='blog-preview__list'>
        <li className='blog-preview__item'>
          <a href='/blog/008' className='blog-preview__link'>AWS Re:Invent 2019 - An Overview</a>
        </li>
        <li className='blog-preview__item'>
          <a href='/blog/007' className='blog-preview__link'>How my website is built</a>
        </li>
        <li className='blog-preview__item'>
          <a href='/blog/006' className='blog-preview__link'>AWS Re:Invent - Top Tips</a>
        </li>
      </ol>
    </section>
  )
}
