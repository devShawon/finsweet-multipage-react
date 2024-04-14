import React from 'react'
import Banner from '../banner/Banner'
import Work from '../work/Work'
import Project from '../project/Project'
import Product from '../product/Product'
import Question from '../question/Question'
import Build from '../build/Build'
import Blog from '../blog/Blog'
import Client from '../client/Client'

const Home = () => {
  return (
    <>
        <Banner />
        <Work />
        <Project />
        <Product />
        <Client />
        <Question />
        <Build />
        <Blog />
    </>
  )
}

export default Home