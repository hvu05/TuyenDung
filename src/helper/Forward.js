import { useNavigate } from "react-router-dom";
import React from 'react';
import { Button, Flex } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';

function Forward() {
    const navigate = useNavigate();
    const onMenuClick = () => {
        navigate(1);
    };
    return (
        <>
            <Flex align="flex-start" gap="small" vertical>
                <Button type="primary" onClick={onMenuClick}><RightCircleOutlined /></Button>
            </Flex>
        </>
    )
}
export default Forward;