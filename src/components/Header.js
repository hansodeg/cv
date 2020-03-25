import React from 'react'

export default class Header extends React.Component {
  constructor (props) {
    super(props)
    this.toggleClass = this.toggleClass.bind(this)
    this.state = {
      showMenu: false
    }
  }
  toggleClass () {
    this.setState({ showMenu: !this.state.showMenu })
  }

  render () {
    return (
      <header>
        <div
          className={this.state.showMenu ? 'menu-btn close' : 'menu-btn'}
          onClick={this.toggleClass}
        >
          <div className='icons'>
            <a href='#!'>
              <i className='far fa-address-card fa-4x' />
            </a>
          </div>
        </div>
        <nav className={this.state.showMenu ? 'menu show' : 'menu'}>
          <ul className='menu-nav'>
            <li className='nav-item current'>
              <a className='nav-link'>Contact me</a>
            </li>

            <li className='nav-item'>
              <a href='mailto: hansodeg@gmail.com' className='nav-link'>
                <i className='fas fa-envelope fa-1x' />
                hansodeg@gmail.com
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='https://github.com/hansodeg'
                className='nav-link'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-github fa-1x' />
                hansodeg
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='https://www.instagram.com/hans_thehorrible'
                className='nav-link'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-instagram fa-1x' />
                hans_thehorrible
              </a>
            </li>

            <li className='nav-item'>
              <a href='#' className='nav-link'>
                <i className='fab fa-whatsapp fa-1x' />
                +47 41177545
              </a>
            </li>
      
       
          </ul>
        </nav>
      </header>
    )
  }
}
