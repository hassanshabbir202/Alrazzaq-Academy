import React from 'react'
import Contact from '../contact/Contact'
import Header from '../header/Header'
import RecomCources from '../recommendcource/RecomCources'
import Slider from '../slider/Slider'
import Testimonial from '../testimonial/Testimonial'
// import Video from '../videogallery/Video'

const Home = () => {
  return (
    <div>
      <Header/>
      <Slider/>
      <Testimonial/>
      <RecomCources/>
      {/* <Video/> */}
      <Contact/>
    </div>
  )
}

export default Home
