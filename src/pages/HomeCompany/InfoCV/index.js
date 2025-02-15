import { useParams } from "react-router-dom";
import useFetchAPIcv from "../../../helper/useFetchAPIcv";
import React from "react";
import { Card, Descriptions, Tag, Button } from "antd";
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons";
import Back from "../../../helper/Back";

const InfoCV = () => {
    const { cv, loadingCv } = useFetchAPIcv();
    const { id } = useParams(); // Lấy ID từ URL
    if (loadingCv) {
        return <p>Đang tải dữ liệu...</p>;
    }

    if (!cv || !Array.isArray(cv)) {
        return (
            <>
                <Back />
                <p>Dữ liệu không hợp lệ.</p>
            </>
        );
    }

    const cvv = cv.find(item => item.id === parseInt(id)); // Tìm CV theo ID

    if (!cvv) {
        return (
            <>
                <Back />
                <p>Không tìm thấy dữ liệu CV.</p>
            </>
        );
    }

    return (
        <>
            <Back />
            <Card title={`Thông tin CV của ${cvv.name}`} bordered={false} style={{ width: 600, margin: "20px auto" }}>
                <Descriptions bordered column={1}>
                    <Descriptions.Item label="Họ và Tên">
                        <strong>{cvv.name}</strong>
                    </Descriptions.Item>
                    <Descriptions.Item label="Số điện thoại">
                        <PhoneOutlined /> {cvv.phone}
                    </Descriptions.Item>
                    <Descriptions.Item label="Email">
                        <MailOutlined /> {cvv.email}
                    </Descriptions.Item>
                    <Descriptions.Item label="Thành phố">
                        <EnvironmentOutlined /> {cvv.city}
                    </Descriptions.Item>
                    <Descriptions.Item label="Trạng thái">
                        {cvv.statusRead ? (
                            <Tag color="green">Đã đọc</Tag>
                        ) : (
                            <Tag color="red">Chưa đọc</Tag>
                        )}
                    </Descriptions.Item>
                    <Descriptions.Item label="Mô tả">
                        {cvv.description}
                    </Descriptions.Item>
                    <Descriptions.Item label="Dự án">
                        <a href={cvv.linkProject} target="_blank" rel="noopener noreferrer">
                            {cv.linkProject}
                        </a>
                    </Descriptions.Item>
                    <Descriptions.Item label="Ngày tạo">
                        {cvv.createAt}
                    </Descriptions.Item>
                </Descriptions>

                <Button type="primary" style={{ marginTop: 20 }}>
                    <a href={`https://mail.google.com/mail/u/0/#inbox?compose=new`} target="_blank" rel="noopener noreferrer">
                        Liên hệ qua Email
                    </a>
                </Button>
            </Card>
        </>
    );
};

export default InfoCV;
