import { Link } from "react-router-dom";
import React from 'react';
import { Button, Flex } from 'antd';
import './Login4Can.scss';
function ButtonLogin4Can() {
    return (
        <>
            <Link to="/login4can" className="login4can">
                <Flex gap="small" wrap className="login4can--small">
                    <Button className="login--small__button">Log in for Candidate</Button>
                </Flex>
            </Link>
        </>
    )
}
export default ButtonLogin4Can;