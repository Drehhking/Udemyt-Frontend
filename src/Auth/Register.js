import React from "react";
import { Card, Flex, Typography, Form, Input, Button, Alert, Spin, } from "antd";
import Navbar from "../components/Navbar";
// import Link from "antd/es/typography/Link";
import { Link as Link1 } from 'react-router-dom'
import '../register.css'
import registerImg from "../Images/desktop-illustration-step-1-x2.webp"
import useSignup from "../hooks/useSignup.js";
const Register = () => {
  const {loading, error, registeruser} = useSignup()
  const handleRegister = (values) => {
    registeruser(values);
  };
  return (
    <div className="">
      <Navbar />
      <div className="register-main-div">
        <Card className="form-container">
          <Flex gap="large" align="center">
            <Flex flex={1}>
              <img src={registerImg} alt="" className="auth-image" />
            </Flex>
            {/* {form} */}
            <Flex vertical flex={1}>
              <Typography.Title level={3} strong className="title">
                Sign up and start learning
              </Typography.Title>
              <Typography.Text type="secondary" strong className="slogan">
                join for exclusive learning experience!
              </Typography.Text>
              <Form layout="vertical" onFinish={handleRegister} autoComplete="off" >

                <Form.Item label="Full Name" name="name" rules={[
                  {
                    required: true,
                    message: "please input your full name!"
                  },
                ]}>
                  <Input size="large" placeholder="Full Name " />
                </Form.Item>

                <Form.Item label="Email" name="email" rules={[
                  {
                    required: true,
                    message: "please input your full Email!"
                  },
                  {
                    type: 'email',
                    message: 'The input is not a valid Email '
                  }
                ]}>
                  <Input size="large" placeholder=" Email" />
                </Form.Item>

                <Form.Item label="Password" name="password" rules={[
                  {
                    required: true,
                    message: "please input your full Password!"
                  },
                ]}>
                  <Input.Password size="large" placeholder=" Enter your password" />
                </Form.Item>

                <Form.Item label=" Confirm Password" name="passwordConfirm" rules={[
                  {
                    required: true,
                    message: "please Re-enter your Password!"
                  },
                ]}>
                  <Input.Password size="large" placeholder=" confirm Password" />
                </Form.Item>

                {
                   error && ( <Alert description ={error} type="error" showIcon closable className="alert" />)
                }

                <Form.Item>
                  <div className="sumn">
                    <input type="checkbox" />
                    <p>Send me special offers, personalized recommendations, and learning tips</p>
                  </div>
                </Form.Item>

                <Form.Item>
                  <button style={{backgroundColor :"#8710D8", color: 'white'}}
                   type={`${loading ? '' : 'primary'}`}
                    size="large"
                     className="btn">
                    {loading ? <Spin/> : 'Sign up'}
                  </button>
                </Form.Item>

                <Form.Item>
                  <div className="sum">
                    <p>Already have an account?</p>
                    <Link1 to="/login">
                      <Button size="large" className="btn1"> Log in</Button>
                    </Link1>
                  </div>
                </Form.Item>
              </Form>
            </Flex>

            {/* {Image} */}




          </Flex>
        </Card>
      </div>
    </div>
  );
};

export default Register;
