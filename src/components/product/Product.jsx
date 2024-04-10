import React from 'react'
import HeadingSix from '../utilities/HeadingSix'
import HeadingTwo from '../utilities/HeadingTwo'
import CardClient from '../cards/CardClient'
import CardRound from '../cards/CardRound'
import CustomCard from '../cards/CustomCard'
import CardSapport from '../cards/CardSapport'
import DelivaryCard from '../cards/DelivaryCard'
import ApproachCard from '../cards/ApproachCard'

const Product = () => {
  return (
    <>
        <section className='bg-gray py-128px'>
            <div className="max-w-container mx-auto">
                <HeadingSix className='smallHeading text-center' text='feature'/>
                <HeadingTwo classname='subHeading max-w-630px text-center mx-auto mt-3' text='Design that solves problems, one product at a time'/>
                <div className='mt-12 flex flex-wrap gap-x-8 gap-y-6'>
                    <CardClient />
                    <CardRound />
                    <CustomCard />
                    <CardSapport />
                    <DelivaryCard />
                    <ApproachCard />
                </div>
            </div>
        </section>
    </>
  )
}

export default Product