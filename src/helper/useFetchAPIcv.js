import React, { useEffect, useState, message } from "react";
import axios from "axios";
function useFetchAPIcv() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:3000/cv");
            setData(response.data);
        } catch (error) {
            message.error("Lỗi khi lấy dữ liệu");
        }
        setLoading(false);
    };
    const DataLoading = {
        cv: data,
        loadingCv: loading
    }
    return DataLoading;
}
export default useFetchAPIcv;