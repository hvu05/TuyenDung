import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Button, message } from "antd";
import useFetchAPIcv from "../../../helper/useFetchAPIcv";
import Forward from "../../../helper/Forward";


const DScv = () => {

    const navigate = useNavigate();
    const { cv, loadingCv } = useFetchAPIcv();
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Ảnh",
            dataIndex: "image",
            key: "image",
        },
        {
            title: "Mô tả",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Thao tác",
            key: "action",
            render: (text, record) => (
                <Button type="link" onClick={() => handleNavigate(record.id)}>
                    Liên hệ
                </Button>
            ),
        },
    ];

    const handleNavigate = (id) => {
        navigate(`/infoCV/${id}`); // Điều hướng đến trang InfoCV với ID
    };
    return (
        <div>
            <Forward />
            <h2>Danh sách các cv</h2>
            <Table columns={columns} dataSource={cv} loading={loadingCv} rowKey="id" />
        </div>
    );
};

export default DScv;
