import React from 'react'
import HeadingThree from '../../utilities/HeadingThree'
import HyperLink from '../../utilities/HyperLink'
import Span from '../../utilities/Span'
import Paragraph from '../../utilities/Paragraph'

import { Accordion } from "keep-react";
import { Plus } from "phosphor-react";


import { GoPlus } from "react-icons/go";
import Heading from '../../utilities/Heading'

const Question = () => {

    let peraText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

  return (
    <>
        <section className='bg-white py-128px'>
            <div className="max-w-container mx-auto">
                <div className='flex gap-x-110'>
                    <div>
                        <Heading 
                            Heading={'h3'}
                            className= 'midHeading w-328px mb-4'
                            text= 'Frequently asked questions'
                        />
                        <HyperLink href='#' className='text-lg text-royal-blue font-poppins font-medium leading-8' text='Contact us for more info' />
                    </div>
                    {/* <Accordion className="space-y-4">
                        <Accordion.Panel>
                            <Accordion.Container>
                                <div className='flex items-center gap-x-55'>
                                    <span>01</span>
                                    <Accordion.Title>What is the purpose of the Keep React?</Accordion.Title>
                                </div>
                            <Accordion.Icon>
                                <Plus size={24} color="#444" />
                            </Accordion.Icon>
                            </Accordion.Container>
                            <Accordion.Content>
                            The Keep React is a collection of UI components, styles, and guidelines that ensure consistency and a unified
                            user experience across our products. It simplifies the design and development process by providing
                            ready-to-use components that can be easily customized and integrated into various applications.
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Container>
                            <Accordion.Title>Q. How do I customize the color scheme of components?</Accordion.Title>
                            <Accordion.Icon>
                                <Plus size={24} color="#444" />
                            </Accordion.Icon>
                            </Accordion.Container>
                            <Accordion.Content>
                            The Keep React offers a range of color variants for components. To customize the color scheme, you can use the
                            available color options such as gray,info,error,warning and success. Simply set the desired color variant as a
                            prop when using the component, and it will reflect the chosen color.
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Container>
                            <Accordion.Title>Q. Can I add additional content to notifications?</Accordion.Title>
                            <Accordion.Icon>
                                <Plus size={24} color="#444" />
                            </Accordion.Icon>
                            </Accordion.Container>
                            <Accordion.Content>
                            Yes, the Notification component in the Keep React allows you to include extra content alongside the primary
                            message. The additionalContent prop can be used to display supplementary information, such as buttons, links,
                            or icons, within the notification to provide users with more context and options.
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion> */}
                    <div className='flex flex-col gap-y-16'>
                        <div className='flex items-start justify-between mb-16px'>
                            <div className='flex gap-x-14'>
                                <Span className='number' text='01'/>
                                <div>
                                    <HeadingThree className='cardHeading text-dark-blue' text='How much time does it take?' />
                                    <Paragraph classname='paragraph max-w-624px text-dark-blue mt-4' text={peraText} />
                                </div>
                            </div>
                            <div>
                                <GoPlus className='text-2xl rotate-45 text-dark-blue opacity-70' />
                            </div>
                        </div>
                        <div className='accordion after:contentspace'>
                            <div className='flex gap-x-14'>
                                <Span className='number' text='02'/>
                                <div>
                                    <HeadingThree className='cardHeading text-dark-blue' text='What is your class naming convention?' />
                                </div>
                            </div>
                            <div>
                                <GoPlus className='text-2xl text-dark-blue opacity-70' />
                            </div>
                        </div>
                        <div className='accordion after:contentspace'>
                            <div className='flex gap-x-14'>
                                <Span className='number' text='03'/>
                                <div>
                                    <HeadingThree className='cardHeading text-dark-blue' text='How do you communicate?' />
                                </div>
                            </div>
                            <div>
                                <GoPlus className='text-2xl text-dark-blue opacity-70' />
                            </div>
                        </div>
                        <div className='accordion after:contentspace'>
                            <div className='flex gap-x-14'>
                                <Span className='number' text='04'/>
                                <HeadingThree className='cardHeading text-dark-blue' text='I have a bigger project. Can you handle it?' />
                            </div>
                            <div>
                                <GoPlus className='text-2xl text-dark-blue opacity-70' />
                            </div>
                        </div>
                        <div className='accordion after:contentspace'>
                            <div className='flex gap-x-14'>
                                <Span className='number' text='05'/>
                                    <HeadingThree className='cardHeading text-dark-blue' text='What is your class naming convention?' />
                            </div>
                            <div>
                                <GoPlus className='text-2xl text-dark-blue opacity-70' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Question