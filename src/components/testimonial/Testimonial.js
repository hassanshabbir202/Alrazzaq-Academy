import React from 'react'
import "../testimonial/Testimonial.css"
import { Collapse } from 'antd';
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const Testimonial = () => {
  const onChange = (key) => {
    console.log(key);
  }
  return (
    <div>
         <div className="testimonial">
      <div className="testimonial-content">
        <div className="testimonial-text">
        <h1 id='testimonial-heading'>Welcome to Al-Razzaq Academy</h1>
        </div>
      </div>
     </div>

    <div className="d-flex justify-content-center">
    <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header="We Are Providig A Lot Of Courses / Madani Qaida Course" style={{backgroundColor:"hsl(204deg 66% 60%)"}}>
        <p>In Madani Qaida Course you will learn how to teach Madani Qaida chapter of the holy Quran. Madani pearls <br /> for Madani Qaida teaching Madani Qaida to student and basic commandment regarding namaz and holy <br /> Quran</p>
      </Panel>
      <Panel header="Khatam-e-Nabuwat course " style={{backgroundColor:"hsl(204deg 66% 60%)"}}>
        <p>The importance of belief in Khatam-e-Nabuwat for a Muslim in the present times is clearly stated in this <br /> course.what belief should be believed regarding Khatam-e-Nabuwat and those matter are highlighted <br /> whose perpetrator  will get excluded from the boundaries of Islam.moreover the evidences of <br /> Khatam-e-Nabuwat in the Quran and hadith have also been explained</p>
      </Panel>
      <Panel header="Quran Nazra (Quran Reading Course)" style={{backgroundColor:"hsl(204deg 66% 60%)"}}>
        <p>Learn Quran Online with Quran Nazra (Quran reading) and become a reciter of Quran with proper <br /> pronunciation  and correct origins. Being a Muslim, it is our religious duty to learn to read Quran and <br /> not just  that we should read it as per its commandments and that is what you will learn in this course. <br /> If you have any doubts that your Quran recitation is not up to mark then take admission to learn the <br /> holiest book of Almighty.</p>
      </Panel>
    </Collapse>
    </div>

     <div className="testimonial-cont">
        <p className='testimon-text'>Welcome to Al-Razzaq Academy We Are Providig A Lot Of Courses / Madani Qaida Course In Madani <br /> Qaida Course you will learn how to teach Madani Qaida chapter of the holy Quran. Madani pearls <br />
for Madani Qaida teaching Madani Qaida to student and basic commandment regarding namaz  and <br /> holy
Quran and Second The importance of belief in Khatam-e-Nabuwat for a Muslim in the present  <br />  times  is clearly stated in this
course.what belief should be believed regarding Khatam-e-Nabuwat <br /> and those matter are highlighted
whose perpetrator will get excluded from the boundaries of  Islam. <br /> moreover the evidences of
Khatam-e-Nabuwat in the Quran and hadith have also been explained <br /> and much more courses. </p>
     </div>
    </div>
  )
}

export default Testimonial
