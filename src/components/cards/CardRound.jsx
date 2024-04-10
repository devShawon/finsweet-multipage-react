import React from 'react'
import HeadingFive from '../utilities/HeadingFive';
import Paragraph from '../utilities/Paragraph';

import { FaCheckCircle } from "react-icons/fa";

let paratext = 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '

const CardRound = () => {
  return (
    <>
        <div className='w-405px bg-white pt-58px pl-12 pb-12 pr-8'>
            <FaCheckCircle className='icon' />
            <HeadingFive classname='cardHeading text-dark-blue font-normal mt-22px' text='Two Free Revision Round'/>
            <Paragraph classname='paragraph text-dark-blue mt-3' text={paratext} />
        </div>
    </>
  )
}

export default CardRound