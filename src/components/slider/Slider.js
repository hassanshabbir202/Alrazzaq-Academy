import React from 'react'
import { Carousel } from 'antd';
import slider1 from "../images/slider1.jpg"
import slider2 from "../images/SLIDER2.png"
import "../slider/Slider.css"

// const contentStyle = {
//     height: '400px',
//     color: '#fff',
//     textAlign: 'center',
//     background: '#fff',
//   };

  const imgStyle = {
    width: "100%",
    height:"100%"
    // marginLeft:"10vw"
  }


const Slider = () => {
  return (
    <div>
      <Carousel autoplay style={{boxShadow: "rgba(0, 0, 0, 0.267) 0px 6px 6px"}}>
    <div>
      <h3 className='slider1 slider-img'><img style={imgStyle} src={slider1} alt="" /></h3>
    </div>
    <div >
      <h3  className="slider2 slider-img"><img style={imgStyle} src={slider2} alt="" /></h3>
    </div>
  </Carousel>
    </div>
  )
}

export default Slider
