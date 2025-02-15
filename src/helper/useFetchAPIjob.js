import React, { useEffect, useState, message } from "react";
import axios from "axios";
function useFetchAPIjob() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:3000/jobs");
            setData(response.data);
        } catch (error) {
            message.error("Lỗi khi lấy dữ liệu");
        }
        setLoading(false);
    };
    const DataLoading = {
        jobs: data,
        loadingJobs: loading
    }
    // console.log("useapi: ", data);
    return DataLoading;
}
export default useFetchAPIjob;