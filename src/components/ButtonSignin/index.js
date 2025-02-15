import { Link } from "react-router-dom";
import React from 'react';
import { Button, Flex } from 'antd';
import './Signin.scss';
function Signin() {
    return (
        <>
            <Link to="/signin" className="signin">
                <Flex gap="small" wrap className="signin--small">
                    <Button type="primary" className="signin--small__button">Sign in for Company</Button>
                </Flex>
            </Link>
        </>
    )
}
export default Signin;