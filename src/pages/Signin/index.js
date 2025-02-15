// file pages/Signin/index.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
// import './FormSignin.scss'
// import { Signin } from '../../services/companyservices';
import { setCookie } from '../../helper/cookie';
import { signin } from '../../services/companyservices';
import './PageSignin.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
function isCompanyNameUnique(companies, valueS) {
    return !companies.some(company => (company.companyName === valueS.companyName) || company.email === valueS.email);
}
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
function Signin() {
    const navigate = useNavigate();
    const onFinish = async (values) => {
        try {
            const res = await fetch('http://localhost:3000/company');
            const data = await res.json();
            // console.log("data", data);
            // console.log("name", values.companyName);
    
            if (isCompanyNameUnique(data, values)) {
                const response = await signin(values);
                await Swal.fire({
                    title: "Đăng ký thành công, vui lòng đăng nhập nhé!",
                    icon: "success",
                    draggable: true
                  });
                navigate('/login');
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Tên công ty hoặc gmail đã tồn tại!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    
    return (
        <>
            <Form
                className='formSignin'
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
                <div className='dky'>Đăng ký công ty</div>
                <Form.Item
                    label="Tên công ty"
                    name="companyName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Số điện thoại"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Địa chỉ"
                    name="address"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your address!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

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
                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}
export default Signin;