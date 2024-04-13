import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import HyperLink from '../utilities/HyperLink'

const Navbar = () => {
  return (
    <>
      <nav className='bg-tint-blue py-8'>
        <div className='max-w-container mx-auto'>
          <div className='flex justify-between items-center'>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className='flex items-center gap-x-12'>
              <div>
                <ul className='flex gap-x-8 items-center'>
                  <li>
                    <HyperLink href='#' className='nav-link hover:text-white' text='home' />
                  </li>
                  <li>
                    <HyperLink href='#' className='nav-link hover:text-white' text='about us' />
                  </li>
                  <li>
                    <HyperLink href='#' className='nav-link hover:text-white' text='feature' />
                  </li>
                  <li>
                    <HyperLink href='#' className='nav-link hover:text-white' text='pricing' />
                  </li>
                  <li>
                    <HyperLink href='#' className='nav-link hover:text-white uppercase' text='faq' />
                  </li>
                  <li>
                    <HyperLink href='#' className='nav-link hover:text-white' text='blog' />
                  </li>
                </ul>
              </div>
            <div>
              <HyperLink href='#' className='commonBtn' text='contact us' />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar