import React from 'react'
import PropTypes from 'prop-types'

import './index.scss'

const Skeleton = (props) => {
  return (
    <div>
      <header className='header'>
        <img className='avatar' src='/assets/img/me.jpg' alt='Image of Alex Chesters' tabIndex={0} />
        <a href='/assets/cv.pdf' className='header__item header__item--right-aligned blue' tabIndex={0}>CV</a>
        <a href='mailto:alex@cheste.rs' className='header__item header__item--right-aligned blue' tabIndex={0}>Email</a>
        <a href='/blog' className='header__item header__item--right-aligned blue' tabIndex={0}>Blog</a>
        <a href='/talks' className='header__item header__item--right-aligned blue' tabIndex={0}>Talks</a>
        <a href='/projects' className='header__item header__item--right-aligned blue' tabIndex={0}>Projects</a>
        <a href='/' className='header__item header__item--right-aligned blue' tabIndex={0}>Home</a>
      </header>
      <main className='main-content'>
        {props.children}
      </main>
    </div>
  )
}

Skeleton.propTypes = {
  children: PropTypes.node
}

export default Skeleton
