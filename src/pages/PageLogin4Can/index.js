// file pages/Login/index.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
// import './FormLogin.scss'
import { login4can } from '../../services/companyservices';
import { setCookie } from '../../helper/cookie';


const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
function PageLogin4Can() {
    const navigate = useNavigate();
    const HandleSignin = () => {
        navigate('/signin4can');
    }
    const onFinish = async (values) => {
        console.log(values);
        const email = (values.email);
        const phone = (values.phone);
        const response = await login4can(email, phone);
        if (response.length > 0) {
            console.log(response);
            setCookie("id", response[0].id, 1);
            setCookie("Name", response[0].name, 1);
            setCookie("token", response[0].token, 1);
            setCookie("email", response[0].email, 1);
            setCookie("phone", response[0].phone, 1);
            setCookie("isAdminCompany", true, 1);
            navigate('/dscty');
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
                <div className='header'>Login for Candidate</div>
                <Form.Item
                
                    label="Email"
                    name="email"
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
                    label="Phone"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <a className='signin' onClick={HandleSignin}>
                        Sign in
                    </a>
                </Form.Item>
            </Form>
        </>
    );
}
export default PageLogin4Can;