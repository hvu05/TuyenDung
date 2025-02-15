import { useNavigate } from "react-router-dom";
import React from 'react';
import { Button, Dropdown, Flex } from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons';

function Back() {
    const navigate = useNavigate();
    const onMenuClick = () => {
        navigate(-1);
    };
    return (
        <>
            <Flex align="flex-start" gap="small" vertical>
                <Button type="primary" onClick={onMenuClick}><LeftCircleOutlined /></Button>
            </Flex>
        </>
    )
}
export default Back;