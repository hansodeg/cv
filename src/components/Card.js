import React from 'react'
export default function Card () {
  return (
    <div className='lablogger'>
      <div className='prove_form'>
        MERN Stack Application
        <div className='card-body text-dark'>
          <h2 className='card-title'>imageAzets</h2>
          <p className='card-text text-secondary'>
            Node express.js, mongoDb and React program for image upload
          </p>
          <div className='icons'>
            <a href='#!'>
              <i className='fab fa-react fa-2x' />
            </a>
            <a href='#!'>
              <i className='fab fa-js-square fa-2x' />
            </a>
            <a href='#!'>
              <i className='fab fa-node fa-2x' />
            </a>

            <a href='#!'>
              <i className='fab fa-css3 fa-2x' />
            </a>
            <a href='#!'>
              <i className='fas fa-database fa-2x' />
            </a>
          </div>
          <br />
          <a href="https://github.com/hansodeg/imageAzets" target="_blank">
          Check out the repo</a>
        </div>
      </div>
    </div>
  )
}
