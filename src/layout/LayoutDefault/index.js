import { Link, Outlet, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./LayoutDefault.scss"
import Login from "../../components/ButtonLogin";
import Signin from "../../components/ButtonSignin";
import { getCookie } from "../../helper/cookie";
import ButtonLogout from "../../components/ButtonLogout";
import DScv from "../../pages/HomeCompany/DScv";
import React from 'react';
import { DownOutlined, SettingOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { UserOutlined } from "@ant-design/icons";
import { get } from "../../utils/request";
import PageLogin4Can from "../../pages/PageLogin4Can";
import PageSignin4Can from "../../pages/PageSignin4Can";
import ButtonLogin4Can from "../../components/Allrouter/Login4Can";
import ButtonSignin4Can from "../../components/Allrouter/Signin4Can";
import Home from "../../pages/Home";



function LayoutDefautlt() {
    const navigate = useNavigate();
    const [token, setToken] = useState(getCookie("token")); // Lưu token vào state

    useEffect(() => {
        const interval = setInterval(() => {
            setToken(getCookie("token")); // Cập nhật lại token khi cookie thay đổi
        }, 500); // Kiểm tra mỗi giây

        return () => clearInterval(interval); // Cleanup khi component bị hủy
    }, []);
    const name = getCookie("companyName"); // Lấy email từ cookie
    const email = getCookie("email"); // Lấy email từ cookie
    const phone = getCookie("phone"); // Lấy phone từ cookie
    const items = [
        {
            key: '1',
            label: <span className="dropdown-name">{name}</span>,
        },
        {
            type: 'divider',
        },
        {
            key: "2",
            label: <span className="dropdown-email">Email: {email}</span>,
        },
        {
            key: "3",
            label: <span className="dropdown-phone">Phone: {phone}</span>,
        },
    ];
    const HandleClickLogo = () => {
        navigate("/");
    }
    return (
        <>
            <div className="layout-default">
                <header className="layout-default__header">
                    <div className="layout-default__logo" onClick={HandleClickLogo}>
                        IT Jobs
                    </div>
                    {token ? (<>
                        <div className="layout-default__logout">
                            <ButtonLogout />
                            <Dropdown menu={{items,}} className="account">
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                    <UserOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </>) : (<>
                        <div className="layout-default__login">
                            <Login />
                        </div>

                        <div className="layout-default__login4can">
                            <ButtonLogin4Can />
                        </div>

                        {/* <div className="layout-default__signin4can">
                            <ButtonSignin4Can />
                        </div> */}
                    </>)}
                </header>
                {token ? (<>
                    <main>
                        <Outlet />
                    </main>
                </>) : (<>
                    <main className="layout-default__main">
                        <Outlet />
                    </main>
                </>)}

                <footer className="layout-default__footer">
                    Copyright 2025 by T
                </footer>
            </div>
        </>
    )
}
export default LayoutDefautlt;