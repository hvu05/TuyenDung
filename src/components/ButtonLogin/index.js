import { Link } from "react-router-dom";
import React from 'react';
import { Button, Flex } from 'antd';
import './Login.scss';
function ButtonLogin() {
    return (
        <>
            <Link to="/login" className="login">
                <Flex gap="small" wrap className="login--small">
                    <Button className="login--small__button">Log in for Company</Button>
                </Flex>
            </Link>
        </>
    )
}
export default ButtonLogin;