import { useNavigate } from "react-router-dom";
import './Homes.scss'
import { SearchOutlined } from '@ant-design/icons';
import JobList from "../DSjob";

function Home() {
    const navigate = useNavigate();
   const SearchJob = () => {
    navigate("/searchJob");
   }

    return (
        <>
            <h1>1000+ IT Jobs For Developers</h1>
            <div onClick={SearchJob}><SearchOutlined /></div>
            <JobList />
        </>
    );
}

export default Home;
