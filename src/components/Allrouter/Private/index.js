import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "../../../helper/cookie";

function Private() {
    const token = getCookie('token');
    let isLogin = true;

    if(token.length > 0) isLogin = true;
    else isLogin = false;

    return (
        <div>
        {isLogin ?  (<Outlet />): (<Navigate to='/login' />)}
        </div>
    );
}
export default Private;