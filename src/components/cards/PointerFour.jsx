import React from 'react'
import pointer4 from '../../assets/pointer-4.png'
import HeadingFive from '../utilities/HeadingFive'
import Paragraph from '../utilities/Paragraph'

const PointerFour = () => {
  return (
    <>
        <div>
            <picture>
                <img src={pointer4} alt="not found" />
            </picture>
            <HeadingFive classname='miniHeading mt-4' text='development'/>
            <Paragraph classname='paragraph text-dark-blue max-w-303px mt-2' text='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'/>
        </div>
    </>
  )
}

export default PointerFour