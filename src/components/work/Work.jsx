import React from 'react'
import HeadingTwo from '../utilities/HeadingTwo'
import Paragraph from '../utilities/Paragraph'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import PointerOne from '../cards/PointerOne';
import PointerTwo from '../cards/PointerTwo';
import PointerThree from '../cards/PointerThree';
import PointerFour from '../cards/PointerFour';
import HyperLink from '../utilities/HyperLink';

const Work = () => {
  return (
    <section className='bg-gray py-128px'>
        <div className='max-w-container mx-auto'>
            <div className='flex gap-x-142'>
                <div>
                    <HeadingTwo classname='subHeading' text='How we work'/>
                    <Paragraph classname='paragraph my-4 w-405px text-dark-blue' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' />
                    <div className='getLink flex items-center gap-x-4'>
                        <HyperLink text='Get in touch with us' />
                        <FaArrowRightLong />
                    </div>
                </div>
                <div className='flex flex-wrap gap-y-12'>
                    <PointerOne />
                    <PointerTwo />
                    <PointerThree />
                    <PointerFour />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Work