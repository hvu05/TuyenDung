import React, { useState } from "react";
import { Button } from "antd";
import Forward from "../../helper/Forward";
import {
    OrderedListOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import DScv from "./DScv"; // Import trang DScv
import Dashboard from "./Dashboard";
import InfoCty from "./InfoCty";

function HomeCompany() {
    const { Header, Sider, Content } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKey, setSelectedKey] = useState("1"); // State để xác định nội dung hiển thị

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    // Hàm render nội dung động dựa vào selectedKey
    const renderContent = () => {
        switch (selectedKey) {
            case "1":
                return <h2><InfoCty /></h2>;
            case "2":
                return <Dashboard />;
            case "3":
                return <DScv />;
            default:
                return <h2>Chọn một mục từ menu</h2>;
        }
    };

    return (
        <div>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: "white" }}>
                    <div className="demo-logo-vertical" />
                    <Menu
                        theme="light"
                        mode="inline"
                        onClick={({ key }) => setSelectedKey(key)} // Thay navigate bằng setState
                        defaultSelectedKeys={["1"]}
                        items={[
                            {
                                key: "1",
                                icon: <UserOutlined />,
                                label: "Thông tin công ty",
                            },
                            {
                                key: "2",
                                icon: <VideoCameraOutlined />,
                                label: "Tổng quan",
                            },
                            {
                                key: "3",
                                icon: <OrderedListOutlined />,
                                label: "Danh sách ứng viên",
                            },
                        ]}
                    />
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                        }}
                    >
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: "16px",
                                width: 64,
                                height: 64,
                            }}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: "24px 16px",
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            height: "calc(100vh - 64px)", // Giảm 64px để trừ phần Header
                            overflow: "auto", // Thêm cuộn cho Content
                        }}
                    >
                        {renderContent()}
                    </Content>
                </Layout>
            </Layout>
            <Forward />
        </div>
    );
}

export default HomeCompany;
