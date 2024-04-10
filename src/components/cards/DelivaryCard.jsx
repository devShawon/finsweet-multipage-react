import React from 'react'
import HeadingFive from '../utilities/HeadingFive';
import Paragraph from '../utilities/Paragraph';

import { BsAlarmFill } from "react-icons/bs";

let paratext = 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '

const DelivaryCard = () => {
  return (
    <>
        <div className='w-405px bg-white pt-58px pl-12 pb-12 pr-8'>
            <BsAlarmFill className='icon' />
            <HeadingFive classname='cardHeading text-dark-blue font-normal mt-22px' text='Quick Delivery'/>
            <Paragraph classname='paragraph text-dark-blue mt-3' text={paratext} />
        </div>
    </>
  )
}

export default DelivaryCard