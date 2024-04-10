import React from 'react'
import pointer2 from '../../assets/pointer-2.png'
import Paragraph from '../utilities/Paragraph'
import HeadingFive from '../utilities/HeadingFive'

const PointerTwo = () => {
  return (
    <>
        <div>
            <picture>
                <img src={pointer2} alt="not found" />
            </picture>
            <HeadingFive classname='miniHeading' text='Wireframing'/>
            <Paragraph classname='paragraph text-dark-blue max-w-303px mt-2' text='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'/>
        </div>
    </>
  )
}

export default PointerTwo