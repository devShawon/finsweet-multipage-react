import React from 'react'
import pointer3 from '../../assets/home/pointer-3.png'
import HeadingFive from '../utilities/HeadingFive'
import Paragraph from '../utilities/Paragraph'

const PointerThree = () => {
  return (
    <>
        <div>
            <picture>
                <img src={pointer3} alt="not found" />
            </picture>
            <HeadingFive classname='miniHeading mt-4' text='Design'/>
            <Paragraph classname='paragraph text-dark-blue max-w-303px mt-2' text='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'/>
        </div>
    </>
  )
}

export default PointerThree