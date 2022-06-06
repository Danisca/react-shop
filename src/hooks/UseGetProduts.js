import {useEffect, useState} from 'react';
import axios from 'axios';
// controls the load of the data after calling the api
const useGetProducts = (API)=>{
    const [data,setData] = useState([]);
    useEffect(()=>{
        const fetchData = async ()=>{
            const result = await axios(API);
            // console.log(result.data);
            setData(result.data);
        }
        fetchData();
    },[]);
    return data;
}

export default useGetProducts;