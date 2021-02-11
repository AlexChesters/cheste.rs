import React from 'react'

import PageSkeleton from '../../components/page-skeleton'

import './index.scss'

export default function BlogPreview () {
  const blogData = [
    {
      identifier: '008',
      title: 'AWS Re:Invent 2019 - An Overview'
    },
    {
      identifier: '007',
      title: 'How my website is built'
    },
    {
      identifier: '006',
      title: 'AWS Re:Invent - Top Tips'
    },
    {
      identifier: '005',
      title: 'AWS Re:Invent 2018 - An Overview'
    },
    {
      identifier: '004',
      title: 'Creating your own web server in Node.js'
    },
    {
      identifier: '003',
      title: 'Creating an AWS Budget with alarms'
    },
    {
      identifier: '002',
      title: 'Hack Week December 2017 - Who\'s This?'
    },
    {
      identifier: '001',
      title: 'Hack Week May 2017 - AFK'
    }
  ]

  return (
    <PageSkeleton>
      <section className='blog-preview'>
        <h1 className='title' tabIndex={0}>Blog</h1>
        <table className='post__list'>
          <tbody>
            {
              blogData.map((entry, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <h1 key={index}><a href={`/blog/${entry.identifier}`} className='post__list-item--title' tabIndex={0}>{entry.title}</a></h1>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </section>
    </PageSkeleton>
  )
}
