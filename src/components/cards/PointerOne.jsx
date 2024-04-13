import React from 'react'
import pointer1 from '../../assets/pointer-1.png'
import HeadingFive from '../utilities/HeadingFive'
import Paragraph from '../utilities/Paragraph'


const PointerOne = () => {
  return (
    <>
        <div>
            <picture>
                <img src={pointer1} alt="not found" />
            </picture>
            <HeadingFive classname='miniHeading mt-4' text='Strategy'/>
            <Paragraph classname='paragraph text-dark-blue max-w-303px mt-2' text='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'/>
        </div>
    </>
  )
}

export default PointerOne