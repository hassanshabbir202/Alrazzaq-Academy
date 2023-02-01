import React from 'react'
import Navigation from './components/navbar/Navigation'
import RecomCources from './components/recommendcource/RecomCources'
import Testimonial from './components/testimonial/Testimonial'
// import Video from './components/videogallery/Video'
import "./App.css"
import Contact from './components/contact/Contact'
import Foter from './components/footer/Foter'
import {Routes , Route} from "react-router-dom"
import Home from './components/home/Home'
import Qaida from './components/qaida/Qaida'
import KhatmeNabuwat from './components/khatmeN/KhatmeNabuwat'
import QuranNazra from './components/quranNazra/QuranNazra'
import Admission from './components/admission/Admission'

const App = () => {
  return (
    <div>
      <Navigation/>
       <Routes>
         <Route path='/'  element={<Home/>}/>
         <Route path='/about'  element={<Testimonial/>}/>
         <Route path='/cources'  element={<RecomCources/>}/>
         {/* <Route path='/gallery'  element={<Video/>}/> */}
         <Route path='/contact'  element={<Contact/>}/>
         <Route path='/qaida'  element={<Qaida/>}/>
         <Route path='/khatmeNabuwat'  element={<KhatmeNabuwat/>}/>
         <Route path='/qurannazra'  element={<QuranNazra/>}/>
         <Route path='/admission'  element={<Admission/>}/>
       </Routes>
      <Foter/>
    </div>
  )
}

export default App
