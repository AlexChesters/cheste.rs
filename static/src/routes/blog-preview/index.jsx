import React from 'react'

import PageSkeleton from '../../components/page-skeleton'

import './index.scss'

export default function BlogPreview () {
  const blogData = [
    {
      identifier: '008',
      title: 'AWS Re:Invent 2019 - An Overview',
      preview: ''
    },
    {
      identifier: '007',
      title: 'How my website is built',
      preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non ex erat. In elit nibh, hendrerit ac dui quis, faucibus.'
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
        <table className='post__table'>
          <tbody>
            {
              blogData.map((entry, index) => {
                return (
                  <tr key={index} className='post__table-item'>
                    <td>
                      <a href={`/blog/${entry.identifier}`} className='post__table-item--title' tabIndex={0}>
                        <h1>{entry.title}</h1>
                        <p>{entry.preview}</p>
                      </a>
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
