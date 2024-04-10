import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

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
                    <Link className='nav-link'>home</Link>
                  </li>
                  <li>
                    <Link className='nav-link'>about us</Link>
                  </li>
                  <li>
                    <Link className='nav-link'>feature</Link>
                  </li>
                  <li>
                    <Link className='nav-link'>pricing</Link>
                  </li>
                  <li>
                    <Link className='nav-link uppercase'>faq</Link>
                  </li>
                  <li>
                    <Link className='nav-link'>blog</Link>
                  </li>
                </ul>
              </div>
              <div>
                <Link className='commonBtn'>contact us</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar