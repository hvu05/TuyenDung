import {useRoutes} from "react-router-dom";
import { routers } from "../../routers";

function Allrouter () {
    const elements = useRoutes(routers);
    
    return (
        <>
            {elements}
        </>
    )
}
export default Allrouter;
