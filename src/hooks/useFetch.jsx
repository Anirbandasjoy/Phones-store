import { useEffect, useState } from 'react'
import axios from "axios"
export const useFetch = (url) => {

    const [isLoading, setIsloading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null)

    const fetchData = async (url) => {
        try {
            const { data } = await axios.get(url);
            setData(data);
            setIsloading(false);
            setError(null)
        } catch (error) {
            setError(error.message);
            setIsloading(false)
        }

    }

    useEffect(() => {

        fetchData(url)

    }, [url])

    return { isLoading, error, data }
}
