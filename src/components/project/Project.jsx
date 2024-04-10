import React from 'react'
import HeadingTwo from '../utilities/HeadingTwo'
import img1 from '../../assets/project-img1.png'
import img2 from '../../assets/project-img2.png'
import img3 from '../../assets/project-img3.png'

import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import HeadingSix from '../utilities/HeadingSix'
import Paragraph from '../utilities/Paragraph'
import Image from '../utilities/Image'
import HyperLink from '../utilities/HyperLink'

const Project = () => {
  return (
    <>
        <section className='bg-white py-128px'>
            <div className='max-w-container mx-auto'>
                <div className='flex items-center justify-between'>
                    <HeadingTwo classname='subHeading' text='View our project'/>
                    <Link className='view text-dark-blue'>view more<FaArrowRightLong /></Link>
                </div>
                <div className='flex justify-between mt-16 '>
                    <div>
                        <div className='w-843px h-600px overflow-hidden relative [&>div]:hover:left-0'>
                            <Image src={img1} alt='not found' className='img' />
                            <div className='absolute -left-396px top-0 w-396px h-full bg-gradient pt-312px pr-35px pb-76px pl-12 transition-all duration-200'>
                                <HeadingSix className='cardHeading' text='Workhub office Webflow Webflow Design'/>
                                <Paragraph classname='paragraph opacity-80 mt-4' text='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam '/>
                                <Link className='view mt-10'>view more<FaArrowRightLong /></Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='w-414px h-284px overflow-hidden relative [&>div]:hover:opacity-100'>
                                <Image src={img1} alt='not found' className='img' />
                                <div className='absolute left-0 top-0 w-full h-full bg-gradient pt-128px pr-9 pb-45px pl-14 opacity-0 transition-all duration-200'>
                                    <HeadingSix className='cardHeading w-290px' text='Unisaas Website Design'/>
                                    <Link className='view mt-2.5'>view more<FaArrowRightLong /></Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className='w-414px h-284px overflow-hidden mt-8 relative [&>div]:hover:opacity-100'>
                                    <Image src={img3} alt='not found' className='img' />
                                    <div className='absolute left-0 top-0 w-full h-full bg-gradient pt-128px pr-9 pb-45px pl-14 opacity-0 transition-all duration-200'>
                                        <HeadingSix className='cardHeading w-290px' text='Unisaas Website Design'/>
                                        <Link className='view mt-2.5'>view more<FaArrowRightLong /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Project