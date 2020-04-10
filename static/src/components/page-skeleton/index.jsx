import React from 'react'
import PropTypes from 'prop-types'

import './index.scss'

const Skeleton = (props) => {
  return (
    <div>
      <header className='header'>
        <img className='avatar' src='/assets/img/me.jpg' alt='Image of Alex Chesters' />
        <a href='/' className='header--item right-align'>Home</a>
        <a href='/blog' className='header--item right-align'>Blog</a>
      </header>
      <main className='main-content'>
        {props.children}
      </main>
    </div>
  )
}

Skeleton.propTypes = {
  children: PropTypes.element
}

export default Skeleton
