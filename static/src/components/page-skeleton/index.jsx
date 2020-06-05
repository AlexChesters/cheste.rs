import React from 'react'
import PropTypes from 'prop-types'

import './index.scss'

const Skeleton = (props) => {
  return (
    <div>
      <header className='header'>
        <img className='avatar' src='/assets/img/me.jpg' alt='Image of Alex Chesters' />
        <a href='mailto:alex@cheste.rs' className='header__item header__item--right-aligned blue'>Email</a>
        <a href='/talks' className='header__item header__item--right-aligned blue'>Talks</a>
        <a href='/blog' className='header__item header__item--right-aligned blue'>Blog</a>
        <a href='/' className='header__item header__item--right-aligned blue'>Home</a>
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
