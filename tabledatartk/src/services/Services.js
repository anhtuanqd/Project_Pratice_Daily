import axios from 'axios'
import { useState, useEffect } from 'react'

const GetData = (url) => {
    const [data, setData] = useState([])
    useEffect(()=> {
        const sourceCancel = axios.CancelToken.source()
        const fetchData = async () => {
            try {
                let res = await axios.get(url, {
                    cancelToken: sourceCancel.token,
                })
                let data = res && res.data ? res.data : []
                setData(data)  
            }catch(e) {
                console.log(e.message)
            }
        }
        fetchData()

        return () => {
            sourceCancel.cancel('Request is canceled');
        }
    },[])
    
    return data;
}
export default GetData;