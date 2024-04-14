import React from 'react'
import HeadingFive from '../utilities/HeadingFive'
import HeadingThree from '../utilities/HeadingThree'
import Paragraph from '../utilities/Paragraph'
import Image from '../utilities/Image'
import img from '../../assets/about/problem-img.png'

const Goal = () => {
  return (
    <section>
        <div className="max-w-container mx-auto">
            <div className='bg-light pt-112px pb-80px pl-80px flex gap-x-61 items-center'>
                <div>
                    <HeadingFive classname='aboutMiniHeading -mt-8' text='who we are' />
                    <HeadingThree className='midHeading mt-1' text='Goal focussed' />
                    <Paragraph classname='paragraph text-dark-blue w-515px mt-4' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
                </div>
                <div>
                    <HeadingThree className='midHeading' text='Continuous improvement' />
                    <Paragraph classname='paragraph text-dark-blue w-515px mt-4' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
                </div>
            </div>
            <div className='max-w-container h-340px overflow-hidden'>
                <Image src={img} alt='not found' className='max-w-full h-full object-cover' />
            </div>
        </div>
    </section>
  )
}

export default Goal