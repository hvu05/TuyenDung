// file pages/Login/index.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Switch } from 'antd';
import './FormLogin.scss'
import { login } from '../../services/companyservices';
import { setCookie } from '../../helper/cookie';
import Signin from '../Signin';


const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

function Login() {
    const navigate = useNavigate();
    const HandleSignin = () => {
        navigate('/signin');
    }
    const onFinish = async (values) => {
        const email = (values.username);
        const pass = (values.password);
        const response = await login(email, pass);
        if (response.length > 0) {
            console.log(response);
            setCookie("id", response[0].id, 1);
            setCookie("companyName", response[0].companyName, 1);
            setCookie("token", response[0].token, 1);
            setCookie("email", response[0].email, 1);
            setCookie("phone", response[0].phone, 1);
            navigate('/homeCom');
        }
        else console.log("That bai");

    };
    return (
        <>
            <Form
                className='formlogin'
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
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <div className='header'>Login for Company</div>
                <Form.Item
                    label="Email"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
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
                    <Input.Password />
                </Form.Item>
                <Form.Item label={null} className='button'>
                    <Button type="primary" htmlType="submit">
                        <span>Submit</span>
                    </Button>
                <a className='signin' onClick={HandleSignin}>Sign in</a>
                </Form.Item>
            </Form>
        </>
    );
}
export default Login;