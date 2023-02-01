import React from 'react'
import "../khatmeN/KhatmeNabuwat.css"
import secondCource from "../images/secondCource.webp"
import Button from "react-bootstrap/Button";
import { Collapse } from 'antd';
import { Link } from 'react-scroll';
const { Panel } = Collapse;

const KhatmeNabuwat = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
    <div className="khatmeN-c">
      <div className="khatme-content">
        <div className="khatme-text">
        <h1 id="khatme-heading">Admission Open</h1>
        </div>
      </div>
     </div>
     <h1 className='text-center' style={{color:"hsl(204deg 66% 60%)"}}>3 Days Free Trial</h1>
    <div className='d-flex justify-content-center'>
      <div>
        <Collapse onChange={onChange} style={{marginTop:"7vh"}}>
      <div style={{backgroundColor:"hsl(204deg 66% 60%)"}}>
        <img className='img-c' src={secondCource} alt="" />
      </div>
      <Panel header="Course Detail" style={{backgroundColor:"hsl(204deg 66% 60%)"}}>
        <p className='text-c'>The importance of belief in Khatam-e-Nabuwat for a Muslim in the present times is clearly stated<br /> in this course.what belief should be believed regarding Khatam-e-Nabuwat and  <br /> those matter are highlighted whose perpetrator  will get excluded from the boundaries <br /> of Islam.moreover the evidences of Khatam-e-Nabuwat in the Quran and hadith have also <br /> been explained</p>
      </Panel>
      <Panel header="Courses detail for brother" style={{backgroundColor:"hsl(204deg 66% 60%)"}}>
        <p>
        ⭐ Period  30days <br />
        ⭐ Duration 30 minutes <br />
        ⭐ Languages Urdu</p>
      </Panel>
      <Panel header="Courses detail for sisters" style={{backgroundColor:"hsl(204deg 66% 60%)"}}>
      <p> 
      ⭐ Period  30days <br />
      ⭐ Duration 30 minutes <br />
      ⭐ Languages Urdu</p>
      </Panel>
      <Panel header="What will I learn" style={{backgroundColor:"hsl(204deg 66% 60%)"}}>
      <p> 
      ⭐ Importance of belief in Khatam-e-Nabuwat for a Muslim in the present times <br />
      ⭐ What beliefs should be believed regarding Khatam-e-Nabuwat.</p>
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

export default KhatmeNabuwat
