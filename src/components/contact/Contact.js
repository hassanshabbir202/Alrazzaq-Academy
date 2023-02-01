import React, { useState } from 'react'
import "../contact/Contact.css"
import { Button, Form, Input } from 'antd';
const { TextArea } = Input;

const Contact = () => {
    const [data,setData] = useState({
        username:"",
        email:"",
        password:"",
        messege:""
      })
      const onFinish = (values) => {
        console.log('Success:', values);
      };
      
        let name,value;
       const handleChange = (event) => {
        name = event.target.name;
        value = event.target.value;
        setData({...data, [name]:value})
     }
    
     const submitForm = () => {
        const {username , email , password , message} = data;
        if(username && email && password || message){
          alert("Messege Send");
          window.location.reload();
        }else{
          alert("Plz Fill the Data");
        }
     }
  return (
    <div>

<div className="contact">
      <div className="contact-content">
        <div className="contact-text">
        <h1 id="contact-heading">Contact Us</h1>
        </div>
      </div>
     </div>

      <div className="form-cont">
      <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input value={data.username} name="username" className="inputs" onChange={handleChange}/>
    </Form.Item>
    <Form.Item
      label="Email Adr"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your Email!',
        },
      ]}
    >
      <Input value={data.email} name='email' className="inputs" onChange={handleChange}/>
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password value={data.password} name='password' className="inputs" onChange={handleChange}/>
    </Form.Item>

    <Form.Item 
      label="Messege Opt"  
      name="Messege"
      rules={[
        {
          required: false,
          message: 'Please Enter your Messege!',
        },
      ]}
    >
        <TextArea rows={4} placeholder="Type Your Messege" value={data.messege} name='messege' className='inputs' id='messesge-text' onChange={handleChange} maxLength={6} />
        </Form.Item>









  
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" onClick={submitForm}>
        Submit
      </Button>
    </Form.Item>
  </Form>
      </div>
    </div>
  )
}

export default Contact
