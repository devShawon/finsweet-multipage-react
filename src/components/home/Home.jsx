import React from 'react'
import Banner from '../banner/Banner'
import Work from '../work/Work'
import Project from '../project/Project'
import Product from '../product/Product'
import About from '../about/About'
import Question from '../question/Question'
import Build from '../build/Build'
import Blog from '../blog/Blog'

const Home = () => {
  return (
    <>
        <Banner />
        <Work />
        <Project />
        <Product />
        <About />
        <Question />
        <Build />
        <Blog />
    </>
  )
}

export default Home