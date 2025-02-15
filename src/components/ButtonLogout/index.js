import { useNavigate } from "react-router-dom";
import React from 'react';
import { Button, Flex } from 'antd';
import './ButtonLogout.scss';
import { deleteAllCookies } from "../../helper/cookie";
// import { Navigate } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
function ButtonLogout() {
    const navigate = useNavigate();
    const HandleLogOut = () => {
        Swal.fire({
            title: "Bạn có muốn đăng xuất?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, log out!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Đã đăng xuất!",
                text: "Đã đăng xuất!",
                icon: "success"
              });
              deleteAllCookies();
              navigate('/');
            }
          });
        
    }
    return (
        <>
            <div className="logout">
                <Flex wrap gap="small" className="logout--small">
                    <Button danger onClick={HandleLogOut}>Log out</Button>
                </Flex>
            </div>
        </>
    )
}
export default ButtonLogout;