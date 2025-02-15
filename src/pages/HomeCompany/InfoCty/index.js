import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetchAPIcty from "../../../helper/useFetchAPIcty";
import { Card, Descriptions, Tag, Button, Input } from "antd";
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { getCookie } from "../../../helper/cookie";
import "./InfoCty.scss";
import { update } from "../../../utils/request";
import Back from "../../../helper/Back";

const InfoCty = () => {
    const { cty, loadingCty } = useFetchAPIcty();
    const id = getCookie("id");
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});
    const isCompany = getCookie("isAdminCompany");
    if (loadingCty) {
        return <p>Đang tải dữ liệu...</p>;
    }

    if (!cty || !Array.isArray(cty)) {
        return <p>Dữ liệu không hợp lệ.</p>;
    }

    const ctyData = cty.find((item) => item.id === id);

    if (!ctyData) {
        return <p>Không tìm thấy dữ liệu Công ty.</p>;
    }

    const handleEdit = () => {
        setFormData(ctyData);
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        update(formData.id, formData);
        setIsEditing(false);
        window.location.reload();
        navigate('homeCom');
    };

    const handleCancel = () => {
        setFormData(ctyData);
        setIsEditing(false);
    };

    return (
        <Card title={`Thông tin Công ty của ${ctyData.companyName}`} bordered={false} style={{ width: 600, margin: "20px auto" }}>
            <Back />
            {isEditing ? (
                <>
                    <Button type="primary" onClick={handleSave} style={{ marginRight: 10 }}>Lưu</Button>
                    <Button type="default" onClick={handleCancel}>Hủy</Button>
                </>
            ) : (
                isCompany ? null : (  
                    <Button type="primary" onClick={handleEdit}>Chỉnh sửa</Button>
                )
            )}

            <Descriptions bordered column={1} style={{ marginTop: 20 }}>
                <Descriptions.Item label="Tên công ty">
                    {isEditing ? (
                        <Input name="companyName" value={formData.companyName} onChange={handleChange} />
                    ) : (
                        <strong>{ctyData.companyName}</strong>
                    )}
                </Descriptions.Item>
                <Descriptions.Item label="Số điện thoại">
                    {isEditing ? (
                        <Input name="phone" value={formData.phone} onChange={handleChange} />
                    ) : (
                        <>
                            <PhoneOutlined /> {ctyData.phone}
                        </>
                    )}
                </Descriptions.Item>
                <Descriptions.Item label="Email">
                    {isEditing ? (
                        <Input name="email" value={formData.email} onChange={handleChange} />
                    ) : (
                        <>
                            <MailOutlined /> {ctyData.email}
                        </>
                    )}
                </Descriptions.Item>
                <Descriptions.Item label="Địa chỉ">
                    {isEditing ? (
                        <Input name="address" value={formData.address} onChange={handleChange} />
                    ) : (
                        <>
                            <EnvironmentOutlined /> {ctyData.address}
                        </>
                    )}
                </Descriptions.Item>
                <Descriptions.Item label="Thời gian làm việc">
                    {isEditing ? (
                        <Input name="workingTime" value={formData.workingTime} onChange={handleChange} />
                    ) : (
                        ctyData.workingTime
                    )}
                </Descriptions.Item>
                <Descriptions.Item label="Website">
                    {isEditing ? (
                        <Input name="website" value={formData.website} onChange={handleChange} />
                    ) : (
                        <a href={ctyData.website} target="_blank" rel="noopener noreferrer">
                            {ctyData.website}
                        </a>
                    )}
                </Descriptions.Item>
            </Descriptions>

            <img className="image" src={ctyData.image} alt={ctyData.companyName} style={{ width: "100%", marginTop: 20 }} />
            <Button type="primary" style={{ marginTop: 20 }}>Liên hệ</Button>
        </Card>
    );
};

export default InfoCty;
