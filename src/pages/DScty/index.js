import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Button, message } from "antd";
import Back from "../../helper/Back";
import useFetchAPIcty from "../../helper/useFetchAPIcty";
import Forward from "../../helper/Forward";

const DScty = () => {
    const navigate = useNavigate();
    const { cty, loadingCty } = useFetchAPIcty();
    const columns = [
        {
            title: "Số thứ tự",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Mô tả",
            dataIndex: "companyName",
            key: "companyName",
        },
        {
            title: "Thao tác",
            key: "action",
            render: (text, record) => (
                <Button type="link" onClick={() => handleNavigate(record.id)}>
                    Thông tin thêm
                </Button>
            ),
        },
    ];

    const handleNavigate = (id) => {
        navigate(`/infoCty/${id}`); // Điều hướng đến trang InfoCV với ID
    };

    return (
        <div>
            <Forward />
            <h2>Danh sách các công ty cần tuyển nhân sự</h2>
            <Table columns={columns} dataSource={cty} loading={loadingCty} rowKey="id" />
        </div>
    );
};

export default DScty;
