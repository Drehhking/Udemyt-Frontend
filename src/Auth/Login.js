import React,{useReducer} from 'react'

import { Card, Flex, Typography, Form, Input, Button, Alert, Spin, } from "antd";
import { Link as Link1 } from 'react-router-dom'
import '../register.css'
import loginImg from "../Images/illustration 2.webp"
import useLogin from '../hooks/useLogin';
import { useCartContext } from '../contexts/Cart_context';






const Login = () => {
  const {error, loading, loginUser} = useLogin();
  const {clearCart} = useCartContext()
  const handleLogin = async (values) => {
    try {
      const storedUserData = localStorage.getItem('user_data')
      let storedEmail = '';


      if (storedUserData) {
        const parsedUserData = JSON.parse(storedUserData);
        storedEmail = parsedUserData.email || '';
      }

      let input = document.getElementById('input');

      if (input.value.trim() !== storedEmail) {
        clearCart();
      }
      
      await loginUser(values);
    } catch (error) {
         console.error('Login failed:', error);
    }
  };
  return (
    <div className="register-main-div">
    <Card className="form-container">
      <Flex gap="large" align="center">
        <Flex flex={1}>
          <img src={loginImg} alt="" className="auth-image" />
        </Flex>
        {/* {form} */}
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className="title">
            Sign In
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogan">
            unlock your learning expererience
          </Typography.Text>
          <Form layout="vertical" onFinish={handleLogin} autoComplete="off" >
            <Form.Item label="Email" name="email" rules={[
              {
                required: true,
                message: "please input your full Email!"
              },
              {
                type: 'Email',
                message: 'The input is not a valid Email '
              }
            ]}>
              <Input size="large" placeholder="Email" id='input' />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[
              {
                required: true,
                message: "please input your full Password!"
              },
            ]}>
              <Input.Password size="large" placeholder=" Enter your password" />
            </Form.Item>
            {error && <Alert description ={error} type="error" showIcon closable className="alert" />}
            <Form.Item>
              <div className="sumn">
                <input type="checkbox" />
                <p>Send me special offers, personalized recommendations, and learning tips</p>
              </div>
            </Form.Item>
            <Form.Item>
              {/* <Button htmlType="submit" size="large" className="btn">Sign up</Button> */}
              <button  style={{backgroundColor :"#8710D8", color: 'white'}}
               type={`${loading ? '' : 'primary'}`}
                size="large"
                 className="btn">
                {loading ? <Spin/> : 'Sign In'}
              </button>
            </Form.Item>
            <Form.Item>
              <div className="sum">
                <p>Don't have an account?</p>
                <Link1 to="/register">
                  <Button size="large" className="btn1">Sign up</Button>
                </Link1>
              </div>
            </Form.Item>
          </Form>
        </Flex>
        {/* {Image} */}
      </Flex>
    </Card>
  </div>
);
}

export default Login