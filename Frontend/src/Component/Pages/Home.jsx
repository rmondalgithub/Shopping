import React from 'react'
import Hero from '../../Component/Hero'
import LatestCollection from '../LatestCollection'
import BestSeller from '../BestSeller'
import OurPolicy from '../OurPolicy'
import NewsLetterBox from '../NewsLetterBox'


const Home = () => {

  return (
    <div>
    
    <Hero/>
    <LatestCollection/>
    <BestSeller/>
    <OurPolicy/>
    <NewsLetterBox/>
    </div>
  )
}

export default Home
