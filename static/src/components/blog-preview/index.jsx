import React from 'react'

import './index.scss'

export default function BlogPreview () {
  return (
    <section>
      <table className='blog-preview__table'>
        <tbody>
          <tr>
            <td><a href='/blog/008'>AWS Re:Invent 2019 - An Overview</a></td>
          </tr>
          <tr>
            <td><a href='/blog/007'>How my website is built</a></td>
          </tr>
          <tr>
            <td><a href='/blog/006'>AWS Re:Invent - Top Tips</a></td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
