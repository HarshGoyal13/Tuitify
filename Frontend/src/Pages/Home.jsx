import React from 'react'
import Hero from '../Components/Home/Hero'
import CounterSection from '../Components/Home/CounterBar'
import CodeBlockSection from '../Components/Home/CodeBlock'
import SkillsLearn from '../Components/Home/SkillsLearn'
import DreamJobBanner from '../Components/Home/DreamJob'
import WhyChooseUs from '../Components/Home/WhyChooseUs'
import BestCourses from '../Components/Home/BestCourses'

const Home = () => {
  return (
    <>
    <Hero/>
    <CounterSection/>
    <CodeBlockSection/>
    <SkillsLearn/>
    <DreamJobBanner/>
    <WhyChooseUs/>
    <BestCourses/>
    </>
  )
}

export default Home