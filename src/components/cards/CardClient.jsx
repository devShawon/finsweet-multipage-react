import React from 'react'
import { FaUsers } from "react-icons/fa6";
import HeadingFive from '../utilities/HeadingFive';
import Paragraph from '../utilities/Paragraph';

let paratext = 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '

const CardClient = () => {
  return (
    <>
        <div className='w-405px bg-white pt-58px pl-12 pb-12 pr-8'>
            <FaUsers className='icon' />
            <HeadingFive classname='cardHeading text-dark-blue font-normal mt-22px' text='Uses Client First'/>
            <Paragraph classname='paragraph text-dark-blue mt-3' text={paratext} />
        </div>
    </>
  )
}

export default CardClient