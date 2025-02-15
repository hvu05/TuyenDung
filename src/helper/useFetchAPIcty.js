import React, { useEffect, useState, message } from "react";
import axios from "axios";
function useFetchAPIcty() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:3000/company");
            setData(response.data);
        } catch (error) {
            message.error("Lỗi khi lấy dữ liệu");
        }
        setLoading(false);
    };
    const DataLoading = {
        cty: data,
        loadingCty: loading
    }
    return DataLoading;
}
export default useFetchAPIcty;