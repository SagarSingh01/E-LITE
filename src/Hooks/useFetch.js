import axios from "axios";
import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, SetError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await axios.get(url);
                setData(res.data);
            }
            catch (err) {
                console.log(err);
                SetError(true);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);
    return [data, loading, error];
}

export default useFetch;