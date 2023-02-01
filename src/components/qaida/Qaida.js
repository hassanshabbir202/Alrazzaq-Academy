import React from 'react'
import "../qaida/Qaida.css"
import firstCource from "../images/firstCource.jpeg"
import Button from "react-bootstrap/Button";
import { Collapse } from 'antd';
import { Link } from 'react-scroll';
const { Panel } = Collapse;
const Qaida = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
    <div className="qaida-c">
      <div className="qaida-content">
        <div className="qaida-text">
        <h1 id="qaida-heading">Admission Open</h1>
        </div>
      </div>
     </div>
     <h1 className='text-center' style={{color:"hsl(204deg 66% 60%)"}}>3 Days Free Trial</h1>
    <div className='d-flex justify-content-center'>
      <div>
        <Collapse onChange={onChange} style={{marginTop:"7vh"}}>
      <div style={{backgroundColor:"hsl(204deg 66% 60%)"}}>
        <img className='c-img' src={firstCource} alt="" />
      </div>
      <Panel header="Course Detail" style={{backgroundColor:"hsl(204deg 66% 60%)"}}>
        <p className='text-c'>Learn Quran Online and become a reciter of Quran with proper pronunciation and correct origins. <br /> </p>
      </Panel>
      <Panel header="Courses detail for brother" style={{backgroundColor:"hsl(204deg 66% 60%)"}}>
        <p>
        ⭐ Period  3month <br />
        ⭐ Duration 30 minutes <br />
        ⭐ Languages Urdu/English</p>
      </Panel>
      <Panel header="Courses detail for sisters" style={{backgroundColor:"hsl(204deg 66% 60%)"}}>
      <p> 
      ⭐ Period: According to student's ability <br />
      ⭐ Duration 30 minutes <br />
      ⭐ Languages Urdu/English</p>
      </Panel>
      <Panel header="What will I learn" style={{backgroundColor:"hsl(204deg 66% 60%)"}}>
      <p> 
      ⭐ Rules of complete Madani Qaida <br />
      ⭐ method of teaching <br />
      ⭐ Ruling of namaz <br />
      ⭐ Exercise of Quranic chapters and much more</p>
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

export default Qaida
