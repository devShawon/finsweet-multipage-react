import React from 'react'

import { Accordion } from "keep-react";
import Span from './Span';
import Heading from './Heading';

const Accordian = ({headingtxt, peratxt, number, panel}) => {

  return (
    <Accordion flush={true}>
        <Accordion.Panel>
            <Accordion.Container>
                <div className='flex items-center gap-x-14'>
                    <Span className='number'>{number}</Span>
                    <Heading Heading={'h3'} className='cardHeading text-dark-blue font-medium'>{headingtxt}</Heading>
                </div>
            <Accordion.Icon />
            </Accordion.Container>
            <Accordion.Content className='paragraph w-600px text-dark-blue opacity-87 ml-20'>
                {peratxt}
            </Accordion.Content>
        </Accordion.Panel>
    </Accordion>
  )
}

export default Accordian