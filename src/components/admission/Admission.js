import React, { useState } from "react";
import { Button, Form, Input, Select, Space } from "antd";
import "../admission/Admission.css";
const Admission = (props) => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  const onFinish = (values) => {
    console.log(values);
  };

  const printDiv = () => {
    var divContents = document.getElementById("share-data").innerHTML;
    var a = window.open("", "", "height=500, width=800");
    a.document.write("<html>");
    a.document.write("<body >");
    a.document.write(divContents);
    a.document.write("</body></html>");
    a.document.close();
    a.print();
  };

  const [data, setData] = useState({
    fname: "",
    lname: "",
    fathername: "",
    email: "",
    country: "",
    skype: "",
    city: "",
    phone: "",
    code: "",
    course: "",
    whatsapp: "",
  });

  const submitForm = () => {
    const {
      fname,
      lname,
      fathername,
      email,
      country,
      skype,
      city,
      phone,
      code,
      course,
      whatsapp,
    } = data;
    if (
      (fname &&
        lname &&
        fathername &&
        email &&
        country &&
        skype &&
        city &&
        phone &&
        code &&
        course) ||
      whatsapp
    ) {
      alert("Form Submit Successfully");
      document.querySelector(".cont").style.display = "none";
      document.getElementById("share-data").style.display = "block";
      document.getElementById("btn-none").style.display = "block";
      document.getElementById("share-info").style.display = "block";
    } else {
      alert("Plz Fill the Data");
    }
  };

  let name, value;
  const handleOnChange = (event) => {
    name = event.target.name;
    value = event.target.value;

    setData({ ...data, [name]: value });
  };

  return (
    <div>
      <div className="admission">
        <div className="admission-content">
          <div className="admission-text">
            <h1 id="admission-heading">Student Registration</h1>
          </div>
        </div>
      </div>
      <div className="cont" style={{ padding: "2vh", width: "100%" }}>
        <h1
          className="mb-3 text-center formheading"
          style={{ color: "hsl(85deg 54% 51%)" }}
        >
          {props.heading}
        </h1>
        <Form
          className="main_form"
          style={{ marginLeft: "8vw" }}
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            className="mainCont"
            name={["fname"]}
            label={
              <label style={{ color: "hsl(206deg 87% 38%)" }}>First Name</label>
            }
            style={{ marginLeft: "10vw", width: "50%", color: "orange" }}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              style={{ height: "40px" }}
              className="test"
              value={data.fname}
              name="fname"
              onChange={handleOnChange}
            />
          </Form.Item>

          <Form.Item
            className="mainCont"
            name={["lname"]}
            label={
              <label style={{ color: "hsl(206deg 87% 38%)" }}>Last Name</label>
            }
            style={{ marginLeft: "10vw", width: "50%", color: "orange" }}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              style={{ height: "40px" }}
              className="test"
              value={data.lname}
              name="lname"
              onChange={handleOnChange}
            />
          </Form.Item>

          <Form.Item
            className="mainCont"
            name={["fathername"]}
            label={
              <label style={{ color: "hsl(206deg 87% 38%)" }}>
                Father Name
              </label>
            }
            style={{ marginLeft: "10vw", width: "50%", color: "orange" }}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              style={{ height: "40px" }}
              className="test"
              value={data.fathername}
              name="fathername"
              onChange={handleOnChange}
            />
          </Form.Item>

          <Form.Item
            style={{ marginLeft: "10vw", width: "50%" }}
            name={["email"]}
            label={
              <label style={{ color: "hsl(206deg 87% 38%)" }}>
                Email Adress
              </label>
            }
            rules={[
              {
                type: "email",
                required: true,
              },
            ]}
          >
            <Input
              style={{ height: "40px" }}
              className="test"
              value={data.email}
              name="email"
              onChange={handleOnChange}
            />
          </Form.Item>

          <Form.Item
            style={{ marginLeft: "10vw", width: "50%" }}
            name={["country"]}
            label={
              <label style={{ color: "hsl(206deg 87% 38%)" }}>
                Select Country
              </label>
            }
            rules={[
              {
                type: "country",
                required: true,
              },
            ]}
          >
            <Input
              style={{ height: "40px" }}
              className="test"
              value={data.country}
              name="country"
              onChange={handleOnChange}
            />
          </Form.Item>

          <Form.Item
            style={{ marginLeft: "10vw", width: "50%" }}
            name={["skype"]}
            label={
              <label style={{ color: "hsl(206deg 87% 38%)" }}>Skype ID</label>
            }
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              style={{ height: "40px" }}
              className="test"
              value={data.skype}
              name="skype"
              onChange={handleOnChange}
            />
          </Form.Item>

          <Form.Item
            style={{ marginLeft: "10vw", width: "50%" }}
            name={["city"]}
            label={
              <label style={{ color: "hsl(206deg 87% 38%)" }}>Enter City</label>
            }
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              style={{ height: "40px" }}
              className="test"
              value={data.city}
              name="city"
              onChange={handleOnChange}
            />
          </Form.Item>

          <Form.Item
            style={{ marginLeft: "10vw", width: "50%" }}
            name={["phone"]}
            label={
              <label style={{ color: "hsl(206deg 87% 38%)" }}>
                Enter Phone
              </label>
            }
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              style={{ height: "40px" }}
              className="test"
              value={data.phone}
              name="phone"
              onChange={handleOnChange}
            />
          </Form.Item>

          <Form.Item
            style={{ marginLeft: "10vw", width: "50%" }}
            name={["code"]}
            label={
              <label style={{ color: "hsl(206deg 87% 38%)" }}>Zip Code</label>
            }
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              style={{ height: "40px" }}
              className="test"
              value={data.code}
              name="code"
              onChange={handleOnChange}
            />
          </Form.Item>

          <Form.Item
            style={{ marginLeft: "10vw", width: "50%" }}
            name={["course"]}
            label={
              <label style={{ color: "hsl(206deg 87% 38%)" }}>
                Select Course
              </label>
            }
            rules={[
              {
                type: "course",
                required: true,
              },
            ]}
          >
            <Input
              style={{ height: "40px" }}
              className="test"
              value={data.course}
              name="course"
              onChange={handleOnChange}
            />
          </Form.Item>

          <Form.Item
            style={{ marginLeft: "10vw", width: "50%" }}
            name={["whatsapp"]}
            label={
              <label style={{ color: "hsl(206deg 87% 38%)" }}>Whatsapp</label>
            }
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              style={{ height: "40px" }}
              className="test"
              value={data.whatsapp}
              name="whatsapp"
              onChange={handleOnChange}
            />
          </Form.Item>

          <Form.Item
            style={{ marginLeft: "10vw", width: "50%" }}
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 8,
            }}
          >
            <Button
              type="primary my-4"
              onClick={submitForm}
              id="submit-btn"
              htmlType="submit"
            >
              Submit{" "}
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="s-data">
        <div className="share-data-cont">
          <div className="download-btn-cont d-flex justify-content-center">
            <Space>
              <Button
                type="primary"
                id="btn-none"
                style={{ display: "none" }}
                onClick={printDiv}
              >
                Print Now
              </Button>
            </Space>
          </div>

          <div
            id="share-data"
            className="my-4"
            style={{
              display: "none",
              backgroundColor: "#fff",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              padding: "3rem",
              borderRadius: "12px",
            }}
          >
            <h2 className="text-center">Your Information</h2>
            <p className="para" style={{ marginTop: "4vh" }}>
              First Name : <span>{data.fname}</span>
            </p>
            <p className="para">
              Last Name : <span>{data.lname}</span>
            </p>
            <p className="para">
              Father Name : <span>{data.fathername}</span>
            </p>
            <p className="para">
              Email : <span>{data.email}</span>
            </p>
            <p className="para">
              country : <span>{data.country}</span>
            </p>
            <p className="para">
              skype Id : <span>{data.skype}</span>
            </p>
            <p className="para">
              City : <span>{data.city}</span>
            </p>
            <p className="para">
              Phone : <span>{data.phone}</span>
            </p>
            <p className="para">
              course : <span>{data.course}</span>
            </p>
            <p className="para">
              Whatsapp : <span>{data.whatsapp}</span>
            </p>
            <h4 style={{ fontSize: "13px", marginTop: "8vh" }}>
              You can verify your details on any social media account below and
              ensure your admission{" "}
            </h4>
          </div>
          <div
            className="admission-department"
            style={{
              display: "none",
              backgroundColor: "hsl(206deg 87% 38%)",
              borderRadius: "10px",
              color: "#fff",
            }}
            id="share-info"
          >
            <h5
              className="text-center"
              style={{ marginTop: "5vh", paddingTop: "2vh" }}
            >
              Contact to Admission Department
            </h5>
            <p className="text-center my-4 department">
              Gmail : alrazzaqacademy53@gmail.com
            </p>
            <p className="text-center department">Whatsapp : +92 312 2029419</p>
            <p
              className="text-center department"
              style={{ paddingBottom: "2vh" }}
            >
              CELL: 0312-2029419
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
