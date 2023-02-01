import React from 'react'
import "../quranNazra/QuranNazra.css"
import thirdCource from "../images/thirdCource.jpg"
import Button from "react-bootstrap/Button";
import { Collapse } from 'antd';
import { Link } from 'react-scroll';
const { Panel } = Collapse;
const QuranNazra = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
    <div className="quran-nazra-c">
      <div className="quran-nazra-content">
        <div className="quran-nazra-text">
        <h1 id="quran-nazra-heading">Admission Open</h1>
        </div>
      </div>
     </div>
     <h1 className='text-center' style={{color:"hsl(204deg 66% 60%)"}}>3 Days Free Trial</h1>
    <div className='d-flex justify-content-center'>
      <div>
        <Collapse onChange={onChange} style={{marginTop:"7vh"}}>
      <div style={{backgroundColor:"hsl(204deg 66% 60%)"}}>
        <img className='c-img' src={thirdCource} alt="" />
      </div>
      <Panel header="Course Detail" style={{backgroundColor:"hsl(204deg 66% 60%)"}}>
        <p className='text-c'>Learn Quran Online with Quran Nazra (Quran reading) and become a reciter of Quran <br /> with proper  pronunciation and correct origins. Being a Muslim, it is our religious duty <br /> to learn to read Quran  and not just that we should read it as per its commandments and that <br /> is what you will learn in this course. If you have any doubts that your Quran recitation is not up to  <br /> mark then take admission to learn the holiest book of Almighty.</p>
      </Panel>
      <Panel header="Courses detail for brother" style={{backgroundColor:"hsl(204deg 66% 60%)"}}>
      <p> 
      ⭐ Period: According to student's ability <br />
      ⭐ Duration: 30 Minutes <br />
      ⭐ Languages: Urdu/English</p>
      </Panel>
      <Panel header="Courses detail for sisters" style={{backgroundColor:"hsl(204deg 66% 60%)"}}>
      <p> 
      ⭐ Period: According to student's ability <br />
      ⭐ Duration: 30 Minutes <br />
      ⭐ Languages: Urdu/English</p>
      </Panel>
      <Panel header="What will I learn" style={{backgroundColor:"hsl(204deg 66% 60%)"}}>
      <p> 
      ⭐ Method of reading Holy Quran with proper Makharij <br />
      ⭐ Definitions of Hadar and Tarteel <br />
      ⭐ Obligatory knowledge and teachings of Islam</p>
      </Panel>
      <Panel header="Apply Now" style={{backgroundColor:"hsl(204deg 66% 60%)"}}>
      <a href="/admission"  style={{color:"#fff",textDecoration:"none"}}> <Button variant="primary">Apply Now</Button></a>
      </Panel>
    </Collapse>
    </div>
    </div>
    </>
  )
}

export default QuranNazra
